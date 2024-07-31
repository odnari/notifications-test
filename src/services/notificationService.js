const messages = [
    'Data has been processed',
    'Device U01 is online',
    'Device X01 is down',
    'Data has been processed and sent to the server. It\'s ready for download. And we need long text for testing, so here it is',
];

const mockLinks = [
    'https://google.com',
    '/details/123',
]

const types = ['success', 'info', 'alert'];

class NotificationService {
    listener = null
    interval = null

    startListening(listener) {
        this.listener = listener;

        this.interval = setInterval(() => {
            const randomType = types[Math.floor(Math.random() * types.length)];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const randomLink = mockLinks[Math.floor(Math.random() * (mockLinks.length + 10))];
            const timestamp = Date.now();
            const id = timestamp;

            this.listener?.({
                id,
                type: randomType,
                message: randomMessage,
                timestamp,
                link: randomLink
            });
        }, 7000);
    }

    stopListening() {
        this.listener = null;
        clearInterval(this.interval);
    }
}

export default NotificationService;