/**
 * Main Scene Renderer
 * Composites the background, UI, and entities into a frame.
 */

import { CanvasLayer } from './CanvasLayer.js';
import { THEME } from '../../config/theme.js';
import { ARENA_DIMENSIONS } from '../../config/constants.js';

export class SceneRenderer {
    constructor() {
        // We might have two layers: Render (Hidden High Res) and Preview (Visible)
        this.renderLayer = new CanvasLayer('renderCanvas');
        this.previewLayer = new CanvasLayer('previewCanvas');
    }

    init() {
        this.drawStaticPreview();
    }

    drawStaticPreview() {
        const ctx = this.previewLayer.getContext();
        // Initial "Ready" screen logic here
        ctx.fillStyle = THEME.colors.background;
        ctx.fillRect(0, 0, this.previewLayer.width, this.previewLayer.height);
        // ... more static drawing code
    }

    renderFrame(globalState) {
        const ctx = this.renderLayer.getContext();
        const w = this.renderLayer.width;
        const h = this.renderLayer.height;

        // Apply Screen Shake
        const sx = (Math.random() - 0.5) * globalState.env.shake;
        const sy = (Math.random() - 0.5) * globalState.env.shake;

        ctx.save();
        ctx.translate(sx, sy);

        // 1. Draw Background
        this.drawBackground(ctx, w, h);

        // 2. Draw Arena
        this.drawArena(ctx);

        // 3. Draw Entities (Balls, Particles) needs to be implemented here
        // ... Entity rendering logic

        ctx.restore();

        // Copy to Preview Canvas
        this.previewLayer.getContext().drawImage(this.renderLayer.canvas, 0, 0, 540, 960);
    }

    drawBackground(ctx, w, h) {
        const grad = ctx.createRadialGradient(w/2, h/2, 100, w/2, h/2, h);
        grad.addColorStop(0, '#1a1a2e');
        grad.addColorStop(1, '#000000');
        ctx.fillStyle = grad;
        ctx.fillRect(-20, -20, w+40, h+40);
    }

    drawArena(ctx) {
        ctx.shadowBlur = 30;
        ctx.shadowColor = THEME.colors.frame;
        ctx.strokeStyle = THEME.colors.frame;
        ctx.lineWidth = 15;
        ctx.strokeRect(ARENA_DIMENSIONS.x, ARENA_DIMENSIONS.y, ARENA_DIMENSIONS.width, ARENA_DIMENSIONS.height);
        ctx.shadowBlur = 0;
    }
}
