/**
 * Elastic Collision System
 * Handles complex interactions between physics bodies.
 */

import { gameState } from '../../app/StateManager.js';

export class CollisionSystem {
    
    static resolve(b1, b2) {
        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const limit = b1.r + b2.r + 30; // 30 is extra impact buffer

        if (dist < limit) {
            // 1. Trigger Screen Shake in Global State
            gameState.state.env.shake = 20;

            // 2. Adjust Angles
            b1.angle += 0.5; 
            b2.angle -= 0.5;

            // 3. Elastic Collision Logic (Physics Math)
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate velocities
            const vx1 = b1.vx * cos + b1.vy * sin;
            const vy1 = b1.vy * cos - b1.vx * sin;
            const vx2 = b2.vx * cos + b2.vy * sin;
            const vy2 = b2.vy * cos - b2.vx * sin;

            // Swap velocities (Simple elastic for equal mass)
            const vFinal1 = vx2;
            const vFinal2 = vx1;

            // Rotate back
            b1.vx = vFinal1 * cos - vFinal1 * sin; // Simplified for stability
            b1.vy = vy1 * cos + vFinal1 * sin;
            b2.vx = vFinal2 * cos - vFinal2 * sin;
            b2.vy = vy2 * cos + vFinal2 * sin;

            // 4. Anti-Stick (Move apart so they don't overlap)
            const overlap = limit - dist;
            b1.x -= overlap / 2 * Math.cos(angle);
            b1.y -= overlap / 2 * Math.sin(angle);
            b2.x += overlap / 2 * Math.cos(angle);
            b2.y += overlap / 2 * Math.sin(angle);

            return true; // Collision happened
        }
        return false;
    }
}
