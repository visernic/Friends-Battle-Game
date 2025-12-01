/**
 * Global State Management (Redux Style Pattern)
 * Acts as the 'Single Source of Truth' for the game engine.
 */

class StateManager {
    constructor() {
        this.state = {
            // Player Data
            players: {
                p1: { name: "Player 1", score: 0, image: null },
                p2: { name: "Player 2", score: 0, image: null }
            },
            
            // Game Status
            status: {
                isRunning: false,
                isRecording: false,
                frame: 0,
                winner: 0, // 0 = None, 1 = P1, 2 = P2
                winFrame: 0
            },

            // Physics Objects
            entities: {
                balls: [], // Will hold player physics bodies
                particles: [],
                coins: []
            },

            // Environment
            env: {
                shake: 0,
                speedMultiplier: 1.0
            }
        };
    }

    // Get a specific part of state
    get(selector) {
        return this.state[selector];
    }

    // Reset for new game
    resetGame() {
        this.state.players.p1.score = 0;
        this.state.players.p2.score = 0;
        this.state.status.frame = 0;
        this.state.status.winner = 0;
        this.state.status.isRunning = true;
        this.state.status.isRecording = true;
        this.state.entities.particles = [];
        this.state.entities.coins = [];
        this.state.env.speedMultiplier = 1.0;
    }
}

export const gameState = new StateManager();
