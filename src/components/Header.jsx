import React, {useState} from 'react';
import bellIcon from '../assets/bell.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const unreadCount = 5;

    return (
        <nav className="bg-gray-100 text-gray-700 pl-4 pr-2 py-1">
            <div className="flex justify-between items-center">
                <h1 className="font-bold">The App</h1>
                <div className='flex'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-full hover:bg-gray-200 relative"
                    >
                        <img src={bellIcon} alt="Bell ringing icon" className="h-5 w-5"/>
                        {
                            unreadCount > 0 && (
                                <div
                                    className="absolute inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full top-2 end-2.5"
                                />
                            )
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;