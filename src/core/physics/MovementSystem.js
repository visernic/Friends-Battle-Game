/**
 * Movement Physics System
 * Handles velocity, acceleration, and wall bouncing.
 */

import { ARENA_DIMENSIONS, PHYSICS_CONSTANTS } from '../../config/constants.js';

export class MovementSystem {
    static update(entity, speedMultiplier = 1.0) {
        // Update Angle for spin effect
        entity.angle += 0.25 * speedMultiplier;
        
        // Trail Logic
        entity.trail.push({ x: entity.x, y: entity.y });
        if(entity.trail.length > 15) entity.trail.shift();

        // Position Update
        entity.x += entity.vx * speedMultiplier;
        entity.y += entity.vy * speedMultiplier;

        // Boundary Checking (The Arena Walls)
        this.checkBoundaries(entity);
    }

    static checkBoundaries(b) {
        const { x, y, width, height } = ARENA_DIMENSIONS;
        const buffer = PHYSICS_CONSTANTS.COLLISION_BUFFER;
        
        // Left & Right
        if (b.x - b.r - buffer < x) {
            b.x = x + b.r + buffer;
            b.vx *= -1;
        } else if (b.x + b.r + buffer > x + width) {
            b.x = x + width - b.r - buffer;
            b.vx *= -1;
        }

        // Top & Bottom
        if (b.y - b.r - buffer < y) {
            b.y = y + b.r + buffer;
            b.vy *= -1;
        } else if (b.y + b.r + buffer > y + height) {
            b.y = y + height - b.r - buffer;
            b.vy *= -1;
        }
    }
}
