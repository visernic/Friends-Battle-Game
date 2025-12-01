/**
 * Local Storage Wrapper
 * Handles persistence of user settings and high scores.
 */

export class StorageService {
    static save(key, data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(key, serialized);
        } catch (e) {
            console.warn("Storage Full or Disabled");
        }
    }

    static get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            return null;
        }
    }

    static clear() {
        localStorage.clear();
    }
}
