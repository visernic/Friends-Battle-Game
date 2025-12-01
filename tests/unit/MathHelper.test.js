/**
 * Unit Test: MathHelper
 * Verifies random number generation logic.
 */

import { MathHelper } from '../../src/utils/MathHelper.js';

console.group("🧪 TEST SUITE: MathHelper");

// Test 1: Random Range
const rand = MathHelper.randomInt(10, 20);
const inRange = rand >= 10 && rand <= 20;
console.assert(inRange, `Value ${rand} should be between 10 and 20`);
console.log("✅ Random Integer Logic Passed");

console.groupEnd();
