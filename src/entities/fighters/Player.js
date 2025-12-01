/**
 * Player Entity
 * Represents the battling character (ball/spinner).
 * Integrates Physics, Input, and Rendering.
 */

import { GameObject } from '../base/GameObject.js';
import { MovementSystem } from '../../core/physics/MovementSystem.js';
import { Weapon } from './Weapon.js';
import { PHYSICS_CONSTANTS } from '../../config/constants.js';

export class Player extends GameObject {
    constructor(config) {
        super(config.x, config.y);
        
        this.id = config.id;
        this.name = config.name || `Player ${config.id}`;
        this.color = config.color;
        this.radius = PHYSICS_CONSTANTS.BALL_RADIUS;
        
        // Physics properties
        this.vx = config.vx;
        this.vy = config.vy;
        this.angle = config.angle || 0;
        this.trail = [];
        
        // Visuals
        this.avatar = config.image || null; // Image Object
        this.weapon = new Weapon(this);
    }

    update(speedMultiplier) {
        // Delegate movement logic to the Physics Core
        MovementSystem.update(this, speedMultiplier);
    }

    draw(ctx) {
        // 1. Draw Weapon first (so it looks attached)
        this.weapon.draw(ctx);

        // 2. Draw Player Body (The Ball)
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Clip the circle for the avatar
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.clip();

        if (this.avatar) {
            ctx.drawImage(this.avatar, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
        } else {
            ctx.fillStyle = '#444';
            ctx.fill();
        }
        
        // Border Ring
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.color;
        ctx.stroke();

        ctx.restore();
    }
}
