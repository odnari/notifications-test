export const truncateText = (text, limit = 100) => {
    if (text.length <= limit) {
        return text;
    }

    const words = text.split(' ');
    let truncated = '';

    for (let word of words) {
        if ((truncated + word).length <= limit) {
            truncated += (truncated ? ' ' : '') + word;
        } else {
            break;
        }
    }

    return truncated + '...';
};