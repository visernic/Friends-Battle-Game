/**
 * Coin Particle
 * Spawned when a player wins.
 */

import { GameObject } from '../base/GameObject.js';
import { ASSETS } from '../../config/assets.js';

export class Coin extends GameObject {
    constructor(x, y, tint) {
        super(x, y);
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = Math.random() * 10 + 5; // Falls down
        
        this.rotation = Math.random() * 6.28;
        this.rotSpeed = (Math.random() - 0.5) * 0.2;
        this.tint = tint || '#FFD700';
        
        this.image = new Image();
        this.image.src = ASSETS.images.coin;
    }

    update() {
        this.y += this.vy;
        this.x += this.vx;
        this.rotation += this.rotSpeed;

        // Remove if falls off screen (Simple garbage collection hint)
        if (this.y > 2000) this.markedForDeletion = true;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        if (this.image.complete) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.tint;
            ctx.drawImage(this.image, -30, -30, 60, 60);
        } else {
            ctx.fillStyle = this.tint;
            ctx.beginPath();
            ctx.arc(0, 0, 30, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
}
