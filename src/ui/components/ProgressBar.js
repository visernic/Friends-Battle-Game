/**
 * Progress Bar Component
 * Manages the rendering progress UI.
 */

import { $ } from '../../utils/DOM.js';

export class ProgressBar {
    constructor() {
        this.container = $('#processingUI');
        this.bar = $('#progressBar');
        this.text = $('#percentText');
    }

    update(percent) {
        // Ensure percent is between 0 and 100
        const safePercent = Math.min(100, Math.max(0, percent));
        
        this.bar.style.width = `${safePercent}%`;
        this.text.innerText = `${Math.floor(safePercent)}%`;
        
        if (safePercent >= 100) {
            this.text.innerText = "Finalizing...";
        }
    }

    show() {
        this.container.classList.remove('hidden');
    }

    hide() {
        this.container.classList.add('hidden');
    }
}
