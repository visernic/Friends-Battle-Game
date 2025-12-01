/**
 * Canvas Abstraction Layer
 * Manages the HTML5 Canvas context and resizing.
 */

export class CanvasLayer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error(`Canvas with ID ${canvasId} not found!`);
        }
        this.ctx = this.canvas.getContext('2d');
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    get width() { return this.canvas.width; }
    get height() { return this.canvas.height; }
    
    getContext() { return this.ctx; }
}
