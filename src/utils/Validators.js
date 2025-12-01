/**
 * Input Validators
 * Ensures user inputs are clean and secure.
 */

export class Validators {
    static sanitizeName(name) {
        return name ? name.trim().substring(0, 15) : "Player";
    }

    static isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }
}
