/**
 * Video Encoding Configuration
 * Centralized settings for video output quality.
 */

export const ENCODER_CONFIG = {
    mimeType: MediaRecorder.isTypeSupported('video/mp4') 
        ? 'video/mp4' 
        : 'video/webm;codecs=vp9',
    videoBitsPerSecond: 12000000, // 12 Mbps for High Quality
    audioBitsPerSecond: 128000
};
