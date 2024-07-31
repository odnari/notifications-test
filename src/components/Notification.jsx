import closeIcon from '../assets/close.svg';
import SuccessIcon from "./icons/SuccessIcon.jsx";
import InfoIcon from "./icons/InfoIcon.jsx";
import AlertIcon from "./icons/AlertIcon.jsx";
import {forwardRef} from "react";
import FormattedDate from "./FormatDate.jsx";

const notificationTypes = {
    success: 'success',
    alert: 'alert',
    info: 'info'
};

const notificationTypeConfig = {
    [notificationTypes.success]: {
        IconComponent: SuccessIcon,
        iconClass: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
    },
    [notificationTypes.alert]: {
        IconComponent: AlertIcon,
        iconClass: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
    },
    [notificationTypes.info]: {
        IconComponent: InfoIcon,
        iconClass: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
    }
};

const Notification = forwardRef(({notification, onRemove, onActionClick}, ref) => {
    const type = notificationTypeConfig[notification.type];

    return (
        <div
            ref={ref}
            className="flex w-full p-4 text-gray-600 bg-white rounded-lg shadow"
        >
            {type && (
                <div
                    className={`mr-3 inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${type.iconClass}`}>
                    <type.IconComponent className="w-5 h-5"/>
                </div>
            )}
            <div className="text-sm font-normal -mt-0.5">
                <p>{notification.message}</p>
                <p className="text-xs text-gray-500">
                    <FormattedDate date={notification.timestamp} />
                </p>
                {notification.link && (
                    <button
                        className="text-xs font-medium rounded-xl -ml-1 px-1.5 py-0.5 mt-0.5 text-blue-700 hover:bg-blue-50"
                        onClick={() => onActionClick(notification)}
                    >
                        View details
                    </button>
                )}
            </div>
            <button
                type="button"
                className="ms-auto flex-shrink-0 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-full p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-7 w-7"
                onClick={() => onRemove(notification.id)}
            >
                <img
                    src={closeIcon}
                    alt="Close icon"
                    className="w-5 h-5"
                />
            </button>
        </div>
    );
});

Notification.Types = notificationTypes;

Notification.displayName = 'Notification';

export default Notification;