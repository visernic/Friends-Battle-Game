/**
 * Global Game Constants
 * Defines the core physics boundaries and rules.
 */

export const GAME_CONFIG = {
    FPS: 60,
    WIN_SCORE: 10,
    SPEED_RAMP: 0.0005, // How much speed increases per frame
    MAX_SPEED_MULT: 2.0
};

export const ARENA_DIMENSIONS = {
    x: 80,
    y: 550,
    width: 920,
    height: 920
};

export const PHYSICS_CONSTANTS = {
    BALL_RADIUS: 60,
    COLLISION_BUFFER: 30, // Extra space to prevent sticking
    SHAKE_DECAY: 0.9,
    FRICTION: 0.99
};
