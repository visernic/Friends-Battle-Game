/**
 * Modal Component
 * Handles the Social Import popup logic.
 */

import { $ } from '../../utils/DOM.js';

export class Modal {
    constructor(elementId, onSubmit) {
        this.modal = $(`#${elementId}`);
        this.input = $('#socialUrlInput');
        this.platformLabel = $('#modalPlatform');
        this.activePlayerId = 1;
        this.onSubmit = onSubmit;

        this.initListeners();
    }

    initListeners() {
        // Cancel Button
        this.modal.querySelector('button:first-of-type').addEventListener('click', () => this.close());
        
        // Submit Button
        this.modal.querySelector('button:last-of-type').addEventListener('click', () => this.handleSubmit());
    }

    open(playerId, platform) {
        this.activePlayerId = playerId;
        this.platformLabel.innerText = platform === 'tiktok' ? 'TikTok' : 'Facebook';
        this.input.value = '';
        this.modal.classList.remove('hidden');
        this.input.focus();
    }

    close() {
        this.modal.classList.add('hidden');
    }

    handleSubmit() {
        const url = this.input.value.trim();
        if (url) {
            this.onSubmit(this.activePlayerId, url, this.platformLabel.innerText);
        }
        this.close();
    }
}
