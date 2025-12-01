/**
 * Weapon Entity
 * Represents the spinning scythe or weapon attachment.
 */

import { ASSETS } from '../../config/assets.js';

export class Weapon {
    constructor(owner) {
        this.owner = owner; // The Player who holds this weapon
        this.image = new Image();
        this.image.src = ASSETS.images.scythe;
        this.rotationOffset = 0;
    }

    draw(ctx) {
        if (!this.image.complete) return;

        ctx.save();
        ctx.translate(this.owner.x, this.owner.y);
        ctx.rotate(this.owner.angle);
        
        // Draw Scythe/Blade effect
        ctx.shadowColor = this.owner.color;
        ctx.shadowBlur = 20;
        // Adjust drawing position relative to the ball center
        ctx.drawImage(this.image, this.owner.radius - 20, -60, 140, 120);
        
        ctx.shadowBlur = 0;
        ctx.restore();
    }
}
