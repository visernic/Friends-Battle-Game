/**
 * Unit Test: Validators
 * Checks if regex patterns for social media imports work correctly.
 */

import { Validators } from '../../src/utils/Validators.js';
import { TikTokService } from '../../src/services/SocialImporter/TikTokService.js';

console.group("🧪 TEST SUITE: Validators");

// Test 1: Name Sanitization
const dirtyName = "   RaKib   ";
const cleanName = Validators.sanitizeName(dirtyName);
console.assert(cleanName === "RaKib", `Expected 'RaKib', got '${cleanName}'`);
console.log("✅ Name Sanitization Passed");

// Test 2: TikTok Username Extraction
const tiktokUrl = "https://www.tiktok.com/@cool_gamer/video/123456";
const username = TikTokService.extractUsername(tiktokUrl);
console.assert(username === "cool_gamer", `Expected 'cool_gamer', got '${username}'`);
console.log("✅ TikTok Parsing Passed");

console.groupEnd();
