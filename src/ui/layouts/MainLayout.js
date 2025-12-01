/**
 * Main Layout Controller
 * Orchestrates the visibility of different screens (Setup -> Processing -> Result).
 */

import { $, show, hide } from '../../utils/DOM.js';
import { ProgressBar } from '../components/ProgressBar.js';

export class MainLayout {
    constructor() {
        this.startBtn = $('#startBtn');
        this.resultUI = $('#resultUI');
        this.videoPlayer = $('#finalVideo');
        this.canvasWrapper = $('.canvas-wrapper');
        
        this.progressBar = new ProgressBar();
    }

    bindStartAction(callback) {
        this.startBtn.addEventListener('click', callback);
    }

    setStartEnabled(enabled) {
        this.startBtn.disabled = !enabled;
    }

    switchToProcessing() {
        this.startBtn.disabled = true;
        hide(this.resultUI);
        hide(this.videoPlayer);
        this.progressBar.show();
    }

    switchToResult(videoBlobUrl) {
        this.progressBar.hide();
        show(this.resultUI);
        this.setStartEnabled(true);

        // Setup Preview Button
        const previewBtn = this.resultUI.querySelector('button:first-child');
        previewBtn.onclick = () => {
            this.videoPlayer.src = videoBlobUrl;
            show(this.videoPlayer);
            this.videoPlayer.play();
        };
    }
}
