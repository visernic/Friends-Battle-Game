/**
 * Game Loop Controller
 * Handles the requestAnimationFrame cycle and delta time.
 */

export class GameLoop {
    constructor(updateFn, drawFn) {
        this.updateFn = updateFn;
        this.drawFn = drawFn;
        this.animationId = null;
        this.isRunning = false;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.loop();
    }

    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    loop() {
        if (!this.isRunning) return;

        // Core Engine Cycle
        this.updateFn(); // Logic
        this.drawFn();   // Render

        this.animationId = requestAnimationFrame(() => this.loop());
    }
}
