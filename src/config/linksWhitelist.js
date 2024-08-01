export const allowedOrigins = [
    'https://example.com',
    'https://api.example.com',
    'https://dev.example.com'
];

export const allowedRelativePaths = [
    '/user',
    '/view',
];

export function isAllowedLink(link) {
    if (!link) return false;

    if (link.startsWith('/')) {
        return allowedRelativePaths.some(path => link.startsWith(path));
    }

    try {
        const url = new URL(link);
        return allowedOrigins.includes(url.origin);
    } catch {
        return false;
    }
}