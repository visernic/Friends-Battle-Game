/**
 * Battle Card Component
 * Manages Player inputs (Name, Image Upload, Import Buttons).
 */

import { $ } from '../../utils/DOM.js';

export class BattleCard {
    constructor(playerId, onUpdate, onImportClick) {
        this.id = playerId;
        this.onUpdate = onUpdate; // Callback when data changes
        
        // DOM Elements
        this.nameInput = $(`#name${playerId}`);
        this.uploadInput = $(`#upload${playerId}`);
        this.previewUI = $(`#p${playerId}-ui-preview`);
        
        // Social Buttons
        this.tiktokBtn = this.uploadInput.parentElement.querySelector('.tiktok-btn');
        this.fbBtn = this.uploadInput.parentElement.querySelector('.fb-btn');

        this.initListeners(onImportClick);
    }

    initListeners(onImportClick) {
        // Name Change
        this.nameInput.addEventListener('input', (e) => {
            this.onUpdate(this.id, { name: e.target.value });
        });

        // Image Upload
        this.uploadInput.addEventListener('change', (e) => {
            this.handleFileUpload(e);
        });

        // Social Import Triggers
        if(this.tiktokBtn) this.tiktokBtn.onclick = () => onImportClick(this.id, 'tiktok');
        if(this.fbBtn) this.fbBtn.onclick = () => onImportClick(this.id, 'facebook');
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const img = new Image();
            img.onload = () => {
                this.updatePreview(evt.target.result);
                this.onUpdate(this.id, { image: img });
            };
            img.src = evt.target.result;
        };
        reader.readAsDataURL(file);
    }

    updatePreview(imgUrl) {
        this.previewUI.style.backgroundImage = `url(${imgUrl})`;
    }

    setName(name) {
        this.nameInput.value = name;
        this.onUpdate(this.id, { name: name });
    }
}
