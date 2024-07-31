import NotificationDropdown from "./NotificationsDropdown.jsx";

function Header() {
    return (
        <nav className="bg-gray-100 text-gray-700 pl-4 pr-2 py-1">
            <div className="flex justify-between items-center">
                <h1 className="font-bold">The App</h1>
                <div className='flex'>
                    <NotificationDropdown />
                </div>
            </div>
        </nav>
    );
}

export default Header;