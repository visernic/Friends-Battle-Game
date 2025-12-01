/**
 * TikTok Data Service
 * Handles username parsing and mock data fetching for TikTok.
 */

export class TikTokService {
    static extractUsername(url) {
        try {
            if (url.includes('tiktok.com')) {
                const match = url.match(/@([a-zA-Z0-9_.]+)/);
                if (match) return match[1];
            }
            return null;
        } catch (e) {
            console.error("TikTok Parse Error:", e);
            return null;
        }
    }

    static getAvatarUrl(username) {
        // Since we can't scrape TikTok directly from client-side due to CORS,
        // we use a UI Avatar generator as a professional fallback.
        return `https://ui-avatars.com/api/?name=${username}&background=000000&color=ff0050&size=200&font-size=0.4`;
    }
}
