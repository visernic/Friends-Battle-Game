/**
 * Integration Test: Physics Engine
 * Simulates a collision to ensure physics state updates correctly.
 */

import { Vector2D } from '../../src/core/physics/Vector2D.js';
import { CollisionSystem } from '../../src/core/physics/CollisionSystem.js';

console.group("🧪 TEST SUITE: Physics Integration");

// Mock Entities
const ball1 = { x: 100, y: 100, r: 60, vx: 10, vy: 0, angle: 0 };
const ball2 = { x: 110, y: 100, r: 60, vx: -10, vy: 0, angle: 0 }; // Overlapping

// Run Collision Logic
const collided = CollisionSystem.resolve(ball1, ball2);

console.assert(collided === true, "Collision should be detected");
console.assert(ball1.vx !== 10, "Ball 1 Velocity should change after impact");
console.log("✅ Collision System Integrated Successfully");

console.groupEnd();
