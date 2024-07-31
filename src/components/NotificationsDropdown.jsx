import {Menu, Transition} from '@headlessui/react';
import Notification from './Notification';
import {useNotifications} from "../store/notifications.jsx";
import bellIcon from "../assets/bell.svg";
import clearAllIcon from "../assets/clear-all.svg";

function NotificationDropdown() {
    const {notifications, removeNotification, clearAllNotifications, unread} = useNotifications();

    const handleActionClick = (notification) => {
        const {link} = notification;

        // TODO: Whitelist can be implemented for more flexibility
        if (link && link.startsWith('/')) {
            console.log('Navigating to:', link);
        } else {
            console.warn('Potentially unsafe link:', link);
        }
    };

    return (
        <Menu as="div" className="relative inline-block">
            <Menu.Button>
                {
                    ({open}) => (
                        <span className={`inline-flex p-2 rounded-full transition ease-in-out duration-100 hover:bg-gray-200 relative ${open ? 'bg-gray-200' : ''}`}>
                            <img src={bellIcon} alt="Bell ringing icon" className={`h-5 w-5`}/>
                            {
                                unread > 0 && (
                                    <div
                                        className="absolute inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full top-2 end-2.5"
                                    />
                                )
                            }
                        </span>
                    )
                }
            </Menu.Button>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <div className="pl-4 pr-2 py-2 border-b">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">Notifications ({unread})</h3>
                                <button
                                    onClick={clearAllNotifications}
                                    className="flex text-xs leading-none items-center hover:text-gray-900 rounded-xl px-2 py-1 hover:bg-gray-100"
                                >
                                    <img src={clearAllIcon} className="w-4 h-4 mr-1" alt="Clear all icon"/>
                                    Clear All
                                </button>
                            </div>
                        </div>
                        <div className="max-h-[50vh] overflow-y-auto py-3 px-4 flex flex-col gap-3">
                            {notifications.length === 0 ? (
                                <p className="px-4 py-6 text-sm text-center text-gray-500">No notifications</p>
                            ) : (
                                notifications.map((notification) => (
                                    <Menu.Item key={notification.id}>
                                        <Notification
                                            notification={notification}
                                            onRemove={removeNotification}
                                            onActionClick={handleActionClick}
                                        />
                                    </Menu.Item>
                                ))
                            )}
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default NotificationDropdown;