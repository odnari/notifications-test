import bellIcon from "../assets/bell.svg";

function NotificationIcon({ open, unread }) {
    return (
        <span className={`inline-flex p-2 rounded-full transition ease-in-out duration-100 hover:bg-gray-200 relative ${open ? 'bg-gray-200' : ''}`}>
            <img src={bellIcon} alt="Bell ringing icon" className="h-5 w-5" />
            {unread > 0 && (
                <div
                    className="absolute inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full top-2 end-2.5"
                />
            )}
        </span>
    );
}

export default NotificationIcon;