"use strict";

/**
 * @library libSprite
 * @description A library for classes that manage sprite animations.
 */

class TSpriteCanvas {
    #cvs;
    #ctx;
    #img;

    constructor(aCanvas){
        this.#cvs = aCanvas;
        this.#ctx = aCanvas.getContext("2d");
        this.#img = new Image();
    }
    loadSpriteSheet(aFileName, aDoneLoad){
        this.#img.onload = aDoneLoad;
        this.#img.src = aFileName;
    }
    drawSprite(aSpriteInfo, aDx = 0, aDy = 0, aIndex = 0) {
        let index = aIndex;
        const sx = aSpriteInfo.x + (index * aSpriteInfo.width);
        const sy = aSpriteInfo.y;
        const sw = aSpriteInfo.width;
        const sh = aSpriteInfo.height;
        const dx = aDx;
        const dy = aDy;
        const dw = sw;
        const dh = sh;
        this.#ctx.drawImage(this.#img, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    clearCanvas(){
        this.#ctx.clearRect(0, 0, this.#cvs.width, this.#cvs.height);
    }
}

export default {
    /**
     * @class TSpriteCanvas
     * @description A class that manage sprite canvas for loading sprite sheets.
     * @param {HTMLCanvasElement} aCanvas - The canvas element to use.
     * @function loadSpriteSheet - Loads a sprite sheet image.
     * @param {string} aFileName - the file name of the sprite sheet image.
     * @param {function} aDoneLoad - A callback function to call when the image is done loading.
     */
    TSpriteCanvas: TSpriteCanvas
}