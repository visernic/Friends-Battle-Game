/**
 * Media Recorder Service
 * Singleton service to handle Canvas-to-Video recording.
 */

import { ENCODER_CONFIG } from './VideoEncoder.js';

class MediaRecorderService {
    constructor() {
        this.recorder = null;
        this.chunks = [];
        this.blobUrl = null;
        this.isRecording = false;
    }

    startRecording(canvasStream) {
        if (!canvasStream) {
            console.error("No stream provided to recorder.");
            return;
        }

        this.chunks = [];
        try {
            this.recorder = new MediaRecorder(canvasStream, ENCODER_CONFIG);
            
            this.recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    this.chunks.push(e.data);
                }
            };

            this.recorder.start();
            this.isRecording = true;
            console.log("Recording started...");
        } catch (err) {
            console.error("Failed to start recording:", err);
        }
    }

    stopRecording() {
        return new Promise((resolve, reject) => {
            if (!this.recorder || this.recorder.state === 'inactive') {
                resolve(null);
                return;
            }

            this.recorder.onstop = () => {
                this.isRecording = false;
                const blob = new Blob(this.chunks, { type: ENCODER_CONFIG.mimeType });
                this.blobUrl = URL.createObjectURL(blob);
                console.log("Recording finished. Blob created.");
                resolve(this.blobUrl);
            };

            this.recorder.stop();
        });
    }

    downloadVideo(filename = 'battle-game-video.mp4') {
        if (!this.blobUrl) return;
        
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = this.blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
        }, 100);
    }
}

// Export as Singleton
export const recorderService = new MediaRecorderService();
