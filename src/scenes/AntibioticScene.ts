import { MovieClip } from 'pixi-animate';
import { Rectangle } from 'pixi.js';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as GameArt from '../assets/Antibiotic';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import DragManager from '../helpers/DragManager';
import BaseScene, { MicroOrganism } from './BaseScene';

export default class AntibioticScene extends BaseScene {

    private art: Art;
    private dragManager:DragManager;
    private isDragging:boolean = false;
    private objDragging:MicroButtons;
    private isHitGirl:boolean = false;

    preload():AssetList{
        return [
            {type:'animate', id:'gameArt', stage:GameArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        this.art = this.cache.animations.gameArt as Art;
        this.addChild(this.art);

       this.art.girl.gotoAndStop(0);
       this.art.syringe.gotoAndStop(0);
    }

    start(){
        this.interactive = true;
        this.interactiveChildren = true;
        this.dragManager = new DragManager(this, this, new Rectangle(312, 0, 1000, 750) , this.onStartDrag, this.onEndDrag, this.onStickySelect);
        this.dragManager.addObject(this.art.antibiotic);
    }

    onStartDrag =(object:MicroButtons)=>{
        console.log(object.name, "this is the name of the button");
        this.isDragging = true;
        this.objDragging = object;

    }
    onEndDrag =()=>{
    //to do
        this.isDragging = false;
        this.objDragging = null;

        if (this.isHitGirl) {
                 // go to the next scene
            console.log("go to the scene for... ", );

            this.changeScene("internal");
        }
        
    }
    onStickySelect =()=>{
    //to do
    }

    update(){
        this.dragManager.update();
        
        if (this.isDragging && this.objDragging!==null) {
            let db:MovieClip = this.art.girl;
            let obj:MovieClip = this.objDragging;
            
            this.isHitGirl = 
            obj.x < db.x + db.width/2 && 
            obj.x > db.x - db.width/2  &&
            obj.y > db.y - db.height/2 &&
            obj.y < db.y + db.height/2;
            this.art.girl.gotoAndStop(0);
            if (this.isHitGirl) {
                    this.art.girl.gotoAndStop(1);
            } 
               
        }
    }

    cleanup(){
    //to do
    }
}

interface Art extends MovieClip {
    antibiotic:MicroButtons;
    girl:MovieClip;
    syringe:MovieClip;
}

interface MicroButtons extends MovieClip {
    index: number;
}