import { MovieClip } from 'pixi-animate';
import { Rectangle } from 'pixi.js';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as GameArt from '../assets/Game';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import DragManager from '../helpers/DragManager';
import BaseScene, { MicroOrganism } from './BaseScene';

export default class GameScene extends BaseScene {

    private art: Art;
    private dragManager:DragManager;
    private isDragging:boolean = false;
    private objDragging:MicroButtons;
    private isHit:boolean = false;
    
    preload():AssetList{
        return [
            {type:'animate', id:'gameArt', stage:GameArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        this.art = this.cache.animations.gameArt as Art;
        this.addChild(this.art);

        this.art.dropbox.gotoAndStop(0);
    }

    start(){
        this.interactive = true;
        this.interactiveChildren = true;
        this.dragManager = new DragManager(this, this, new Rectangle(312, 0, 1000, 750) , this.onStartDrag, this.onEndDrag, this.onStickySelect);
        this.dragManager.addObject(this.art.protein);
        this.dragManager.addObject(this.art.bacteria);

        this.art.bacteria.index = MICROORGANISM_INDEX.BACTERIA;
        this.art.protein.index = MICROORGANISM_INDEX.BACTERIA_PROTEIN;
    }

    onStartDrag =(object:MicroButtons)=>{
        console.log(object.name, "this is the name of the button");
        this.isDragging = true;
        this.objDragging = object;

        this.gameData.currentChoice = object.name as MicroOrganism;
        this.gameData.currentChoiceIndex = object.index;
    }
    onEndDrag =()=>{
    //to do
        this.isDragging = false;
        this.objDragging = null;

        if (this.isHit) {
            // go to the next scene
            console.log("go to the scene for... ", );

            this.changeScene("internal");

            // todo: move to other scenes ****

            switch(this.gameData.currentChoiceIndex) {
                case MICROORGANISM_INDEX.ATTENTUATED_VIRUS:
                    break;
                case MICROORGANISM_INDEX.BACTERIA:
                    // do the bateria
                    console.log("...The BACTERIA. which was found in the number check");
                    break;
                case MICROORGANISM_INDEX.BACTERIA_PROTEIN:
                    console.log("...The BACTERIA_PROTEIN which was found in the number check");
                    break;
                case MICROORGANISM_INDEX.DEAD_VIRUS:
                    break;
                case MICROORGANISM_INDEX.LIVE_VIRUS:
                    break;            
            }

            if (this.gameData.currentChoiceIndex===MICROORGANISM_INDEX.BACTERIA) {
                // do the bacteria
                console.log("The bacteria was found in the string check");
            }
        }
    }
    onStickySelect =()=>{
    //to do
    }

    update(){
        this.dragManager.update();
        
        if (this.isDragging && this.objDragging!==null) {
            let db:MovieClip = this.art.dropbox;
            let obj:MovieClip = this.objDragging;
            //
            this.isHit = 
            obj.x < db.x + db.width/2 && 
            obj.x > db.x - db.width/2  &&
            obj.y > db.y - db.height/2 &&
            obj.y < db.y + db.height/2;
            this.art.dropbox.gotoAndStop(0);
            if (this.isHit) {
                this.art.dropbox.gotoAndStop(1);
            }            
        }
    }

    cleanup(){
    //to do
    }
}

interface Art extends MovieClip {
    bacteria:MicroButtons;
    protein:MicroButtons;
    dropbox:MovieClip;
}

interface MicroButtons extends MovieClip {
    index: number;
}