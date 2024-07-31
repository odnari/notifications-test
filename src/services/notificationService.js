const messages = [
    'Data has been processed',
    'Device U01 is online',
    'Device X01 is down',
    'Data has been processed and sent to the server. It\'s ready for download. And we need long text for testing, so here it is',
];

const types = ['success', 'info', 'alert'];

class NotificationService {
    listener = null
    interval = null

    constructor() {
        this.dateFormatter = Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
            timeStyle: 'short'
        })
    }

    startListening(listener) {
        this.listener = listener;

        this.interval = setInterval(() => {
            const randomType = types[Math.floor(Math.random() * types.length)];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const timestamp = this.dateFormatter.format(new Date());
            const id = Date.now();

            this.listener?.(id, randomType, randomMessage, timestamp);
        }, 5000);
    }

    stopListening() {
        this.listener = null;
        clearInterval(this.interval);
    }
}

export default NotificationService;