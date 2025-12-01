/**
 * Audio Controller
 * Manages sound effects and background music.
 * (Placeholder for future expansion)
 */

export class AudioController {
    constructor() {
        this.muted = false;
        this.sounds = {};
    }

    play(soundName) {
        if (this.muted) return;
        if (this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }
}
