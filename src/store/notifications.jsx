import {createContext, useContext, useReducer, useEffect, useCallback, useMemo} from 'react';
import NotificationService from '../services/notificationService.js';
import {playSound} from "../utils/sound.js";

const notificationService = new NotificationService();

const playNotificationSound = () => {
    playSound('/notification.mp3')
};

const NotificationContext = createContext();

const initialState = {
    notifications: []
};

function notificationReducer(state, action) {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {
                notifications: [action.payload, ...state.notifications],
            };
        case 'REMOVE_NOTIFICATION':
            return {
                notifications: state.notifications.filter(n => n.id !== action.payload),
            };
        case 'CLEAR_ALL_NOTIFICATIONS':
            return {
                notifications: [],
            };
        default:
            return state;
    }
}

export function NotificationProvider({ children }) {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const addNotification = useCallback((id, type, message, timestamp, link = null) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: { id, type, message, timestamp, link },
        });
        playNotificationSound();
    }, []);

    const removeNotification = useCallback((id) => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
    }, []);

    const clearAllNotifications = useCallback(() => {
        dispatch({ type: 'CLEAR_ALL_NOTIFICATIONS' });
    }, []);

    useEffect(() => {
        notificationService.startListening(addNotification);

        return () => {
            notificationService.stopListening();
        };
    }, [addNotification]);

    const value = useMemo(() => ({
        ...state,
        unread: state.notifications.length,
        addNotification,
        removeNotification,
        clearAllNotifications
    }), [state, addNotification, removeNotification, clearAllNotifications]);

    return (
        <NotificationContext.Provider
            value={value}
        >
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }

    return context;
}