/**
 * Math Utility Functions
 * For random number generation and physics calculations.
 */

export class MathHelper {
    static random(min, max) {
        return Math.random() * (max - min) + min;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static oneOf(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
