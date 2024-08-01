import {useContext} from "react";
import {NotificationsContext} from "../store/notifications.jsx";

export function useNotifications() {
    const context = useContext(NotificationsContext);

    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }

    return context;
}