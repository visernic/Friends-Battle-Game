# 🏗 Project Architecture

## Modular Design Overview

This project follows a **Service-Oriented Modular Architecture** using Vanilla ES6 JavaScript. This ensures high performance, maintainability, and security against script kiddies.

### 📂 Directory Breakdown

#### `src/app/`

* **Purpose:** Core application logic.
    
* **Key Files:** `App.js` (Entry), `StateManager.js` (Redux-like Store).
    

#### `src/core/`

* **Purpose:** The "Engine Room". Contains all heavy calculations.
    
* **Physics:** Custom verlet-integration based physics engine.
    
* **Renderer:** Canvas API abstraction layer.
    

#### `src/entities/`

* **Purpose:** Game Objects (OOP Pattern).
    
* **Inheritance:** `GameObject` -&gt; `Player`, `Coin`.
    

#### `src/services/`

* **Purpose:** Handling side-effects and external APIs.
    
* **Features:**
    
    * `Recorder`: `MediaRecorder` API wrapper for client-side rendering.
        
    * `SocialImporter`: Regex parsers for TikTok/FB URLs.
        

#### `src/ui/`

* **Purpose:** DOM manipulation and View logic.
    
* **Pattern:** Component-based UI updates (Logic separated from HTML).
    

*Developed by Visernic*
