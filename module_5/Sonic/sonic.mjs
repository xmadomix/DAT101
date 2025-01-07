"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
//--------------- Objects and Variables ----------------------------------//

// prettier-ignore
const SpriteInfoList = {
  sonic1: { x: 0, y:   0, width: 102, height: 125, count: 6},
  sonic2: { x: 0, y: 125, width: 102, height: 125, count: 9},
  sonic3: { x: 0, y: 250, width: 102, height: 125, count: 9},
  sonic4: { x: 0, y: 375, width: 102, height:  70, count: 7},
  sonic5: { x: 0, y: 450, width: 99, height: 135, count: 5},
  sonic6: { x: 0, y: 575, width: 102, height: 125, count: 3},
  sonic7: { x: 0, y: 710, width: 102, height: 125, count: 2},
  sonic8: { x: 0, y: 830, width: 102, height: 125, count: 2},
  sonic9: { x: 0, y: 960, width: 102, height: 130, count: 4}
}
let spIndex = 0;
let spi = SpriteInfoList.sonic2;

const cvs = document.getElementById("cvs");
const spriteCanvas = new libSprite.TSpriteCanvas(cvs);

spriteCanvas.loadSpriteSheet("./media/sonic_sprite_sheet.png", onLoaded);

//--------------- Functions ----------------------------------------------//
function animateSprite(){
  spriteCanvas.clearCanvas();
  spriteCanvas.drawSprite(spi, 100, 100, spIndex);
  spIndex++;
  if(spIndex >= SpriteInfoList.sonic1.count){
    spIndex = 0;
  }
}
//--------------- Event Handlers -----------------------------------------//
function onLoaded(){
  console.log("Sprite sheet loaded.");
  setInterval(animateSprite, 100);
}
//--------------- Main Code ----------------------------------------------//


