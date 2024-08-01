import {createContext, useReducer, useEffect, useCallback, useMemo} from 'react';
import NotificationService from '../services/notificationService.js';
import {playSound} from "../utils/sound.js";
import {isAllowedLink} from "../config/linksWhitelist.js";

const notificationService = new NotificationService();

const playNotificationSound = () => {
    playSound('/notification.mp3')
};

export const NotificationContext = createContext();

const initialState = {
    notifications: []
};

function notificationReducer(state, {type, payload}) {
    switch (type) {
        case 'ADD_NOTIFICATION':
            if (payload?.link && !isAllowedLink(payload.link)) {
                console.warn('Potentially dangerous link removed:', payload.link);
                delete payload.link;
            }

            return {
                notifications: [payload, ...state.notifications],
            };
        case 'REMOVE_NOTIFICATION':
            return {
                notifications: state.notifications.filter(n => n.id !== payload),
            };
        case 'CLEAR_ALL_NOTIFICATIONS':
            return {
                notifications: [],
            };
        default:
            return state;
    }
}

export function NotificationProvider({children}) {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const addNotification = useCallback((notification) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: notification,
        });
        playNotificationSound();
    }, []);

    const removeNotification = useCallback((id) => {
        dispatch({type: 'REMOVE_NOTIFICATION', payload: id});
    }, []);

    const clearAllNotifications = useCallback(() => {
        dispatch({type: 'CLEAR_ALL_NOTIFICATIONS'});
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