import {useContext} from "react";
import {NotificationContext} from "../store/notifications.jsx";

export function useNotifications() {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }

    return context;
}