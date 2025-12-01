/**
 * Application Entry Point
 * Orchestrates the initialization of all modules.
 */

import { GameLoop } from './GameLoop.js';
import { gameState } from './StateManager.js';
import { SceneRenderer } from '../core/renderer/SceneRenderer.js';
// Physics systems will be imported in main.js to keep App.js clean

export class App {
    constructor() {
        console.log("Initializing Friends Battle Engine v1.0...");
        this.renderer = new SceneRenderer();
        this.gameLoop = new GameLoop(
            this.update.bind(this),
            this.render.bind(this)
        );
    }

    init() {
        // Load initial assets and listeners
        this.renderer.init();
        console.log("Engine Ready.");
    }

    startGame() {
        gameState.resetGame();
        this.gameLoop.start();
    }

    update() {
        // This will be connected to Physics System
        // Logic placeholder
    }

    render() {
        this.renderer.renderFrame(gameState.state);
    }
}
