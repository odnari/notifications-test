import {useContext} from "react";
import {NotificationsStateContext} from "../store/notifications.jsx";

export function useNotificationsState() {
    const context = useContext(NotificationsStateContext);

    if (!context) {
        throw new Error('UseNotificationsState must be used within a NotificationProvider');
    }

    return context;
}