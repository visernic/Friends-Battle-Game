/**
 * Base Game Object
 * All entities in the game inherit from this class.
 * Provides basic properties like position and velocity.
 */

export class GameObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0; // Velocity X
        this.vy = 0; // Velocity Y
        this.markedForDeletion = false;
    }

    update() {
        // Base update logic (can be overridden)
    }

    draw(ctx) {
        // Base draw logic
    }
}
