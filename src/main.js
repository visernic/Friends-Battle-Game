/**
 * Friends Battle Game - Main Entry Point
 * Initializes the App, binds UI events, and starts the engine.
 */

import { App } from './app/App.js';
import { gameState } from './app/StateManager.js';
import { MainLayout } from './ui/layouts/MainLayout.js';
import { BattleCard } from './ui/components/BattleCard.js';
import { Modal } from './ui/components/Modal.js';
import { recorderService } from './services/Recorder/MediaRecorderService.js';
import { TikTokService } from './services/SocialImporter/TikTokService.js';
import { FacebookService } from './services/SocialImporter/FacebookService.js';

// Initialize Core Systems
const app = new App();
const layout = new MainLayout();

// Player Configuration Logic
const handlePlayerUpdate = (id, data) => {
    const pKey = id === 1 ? 'p1' : 'p2';
    const playerState = gameState.state.players[pKey];
    
    if (data.name) playerState.name = data.name;
    if (data.image) playerState.image = data.image;

    // Enable Start button if both players have images
    const p1Ready = gameState.state.players.p1.image;
    const p2Ready = gameState.state.players.p2.image;
    layout.setStartEnabled(p1Ready && p2Ready);
};

// Social Import Logic
const handleImportSubmit = (playerId, url, platform) => {
    let name = "Guest";
    let avatarUrl = "";

    if (platform === 'TikTok') {
        name = TikTokService.extractUsername(url) || "TikTok User";
        avatarUrl = TikTokService.getAvatarUrl(name);
    } else {
        name = FacebookService.extractUsername(url) || "FB User";
        avatarUrl = FacebookService.getAvatarUrl(name);
    }

    // Load Image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
        // Update UI and State
        const card = playerId === 1 ? card1 : card2;
        card.setName(name);
        card.updatePreview(avatarUrl);
        handlePlayerUpdate(playerId, { image: img, name: name });
    };
    img.src = avatarUrl;
};

// UI Components
const modal = new Modal('importModal', handleImportSubmit);
const card1 = new BattleCard(1, handlePlayerUpdate, (id, platform) => modal.open(id, platform));
const card2 = new BattleCard(2, handlePlayerUpdate, (id, platform) => modal.open(id, platform));

// Game Lifecycle
app.init(); // Setup Renderer

layout.bindStartAction(() => {
    console.log("Starting Battle...");
    layout.switchToProcessing();
    
    // Start Recording Service
    const stream = document.getElementById('renderCanvas').captureStream(60);
    recorderService.startRecording(stream);

    // Start Game Loop
    app.startGame();
    
    // Monitor Progress
    const checkProgress = setInterval(async () => {
        const state = gameState.state;
        
        // Update Progress Bar
        const maxScore = 10; // Should come from config
        const currentMax = Math.max(state.players.p1.score, state.players.p2.score);
        let pct = (currentMax / maxScore) * 100;
        if(state.status.winner > 0) pct = 99;
        
        layout.progressBar.update(pct);

        // Check for Game Over
        if (!state.status.isRunning) {
            clearInterval(checkProgress);
            const blobUrl = await recorderService.stopRecording();
            layout.switchToResult(blobUrl);
            
            // Bind Download Button
            const dlBtn = document.getElementById('resultUI').querySelector('button:last-child');
            dlBtn.onclick = () => recorderService.downloadVideo(`Battle_${state.players.p1.name}_vs_${state.players.p2.name}.mp4`);
        }
    }, 100);
});

console.log("System Initialized.");
