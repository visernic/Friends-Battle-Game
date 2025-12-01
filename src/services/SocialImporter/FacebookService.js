/**
 * Facebook Data Service
 * Handles profile URL parsing.
 */

export class FacebookService {
    static extractUsername(url) {
        try {
            if (url.includes('facebook.com')) {
                const parts = url.split('/');
                // Handle different FB URL structures
                const last = parts[parts.length - 1] || parts[parts.length - 2];
                return last.replace('/', '');
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    static getAvatarUrl(username) {
        return `https://ui-avatars.com/api/?name=${username}&background=1877F2&color=ffffff&size=200&font-size=0.4`;
    }
}
