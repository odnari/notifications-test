import {useState} from 'react';
import {useNotifications} from "../store/notifications.jsx";
import LuckyButton from "./LuckyButton.jsx";

function NotificationPlayground() {
    const {addNotification} = useNotifications();
    const [messageValue, setMessageValue] = useState('');
    const [linkValue, setLinkValue] = useState('');
    const [typeValue, setTypeValue] = useState('info');

    const handleSubmit = (e) => {
        e?.preventDefault();
        const message = messageValue.trim();

        if (message) {
            const link = linkValue.trim();
            const type = typeValue;
            const timestamp = Date.now();
            const id = timestamp;

            addNotification({
                id,
                type,
                message,
                timestamp,
                link
            });
            setMessageValue('');
            setLinkValue('');
        }
    };

    return (
        <div className="p-4 w-96 bg-white rounded-lg shadow-lg border border-gray-100 shadow-gray-200">
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-200 pb-2">Notification Playground</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Notification Message
                    </label>
                    <input
                        type="text"
                        id="message"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        placeholder="Enter notification message"
                    />
                </div>
                <div>
                    <label htmlFor="link" className="block text-sm font-medium text-gray-700 focus:outline-none">
                        Link (optional)
                    </label>
                    <input
                        type="text"
                        id="link"
                        value={linkValue}
                        onChange={(e) => setLinkValue(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none"
                        placeholder="Enter link (e.g., /details)"
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Notification Type
                    </label>
                    <select
                        id="type"
                        value={typeValue}
                        onChange={(e) => setTypeValue(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base rounded-md shadow-sm border border-gray-300 focus:outline-none"
                    >
                        <option value="info">Info</option>
                        <option value="success">Success</option>
                        <option value="alert">Alert</option>
                    </select>
                </div>
                <div className={'mt-3 flex gap-4 justify-center'}>
                    <button
                        type="submit"
                        className="w-1/4 flex items-center justify-center py-2 px-4 border-2 border-gray-600 rounded-md shadow-sm text-sm font-bold text-black hover:bg-gray-200"
                    >
                        Push
                    </button>
                    <LuckyButton onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    );
}

export default NotificationPlayground;