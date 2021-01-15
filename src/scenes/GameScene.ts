import { MovieClip } from 'pixi-animate';
import { interaction, Rectangle } from 'pixi.js';
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
    private isHitGirl:boolean = false;
    private isHitSyringe:boolean = false;
    private descripX:number = 1270;
    private descripY:number = 20;

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
        //this.art.virus_attenuatedPopup.visible = false;
        //this.art.pnlPopup2.visible = false;
        this.gameData.currentAct = 1;
    }

    start(){
        this.interactive = true;
        this.interactiveChildren = true;
        this.dragManager = new DragManager(this, this, new Rectangle(312, 0, 1000, 750) , this.onStartDrag, this.onEndDrag, this.onStickySelect);
        this.dragManager.addObject(this.art.protein);
        this.dragManager.addObject(this.art.bacteria);
        this.dragManager.addObject(this.art.virus_dead);
        this.dragManager.addObject(this.art.virus_attenuated);
        this.dragManager.addObject(this.art.virus_alive);

        this.art.bacteria.index = MICROORGANISM_INDEX.BACTERIA;
        this.art.protein.index = MICROORGANISM_INDEX.BACTERIA_PROTEIN;
        this.art.virus_alive.index = MICROORGANISM_INDEX.LIVE_VIRUS;
        this.art.virus_attenuated.index = MICROORGANISM_INDEX.ATTENTUATED_VIRUS;
        this.art.virus_dead.index = MICROORGANISM_INDEX.DEAD_VIRUS;

        this.art.bacteria.on("pointerover",() => {
            this.art.bacteriaDescrip.visible = true;
            this.art.bacteriaDescrip.x = this.descripX;
            this.art.bacteriaDescrip.y = this.descripY;
        });
        this.art.bacteria.on("pointerout", () => {
            this.art.bacteriaDescrip.visible = false;
        });
        
       this.art.protein.on("pointerover",() => {
            this.art.proteinDescrip.visible = true;
            this.art.proteinDescrip.x = this.descripX;
            this.art.proteinDescrip.y = this.descripY;
        });
        this.art.protein.on("pointerout", () => {
            this.art.proteinDescrip.visible = false;
        });

        this.art.virus_alive.on("pointerover",() => {
            this.art.aliveVirusDescrip.visible = true;
            this.art.aliveVirusDescrip.x = this.descripX;
            this.art.aliveVirusDescrip.y = this.descripY;
        });
        this.art.virus_alive.on("pointerout", () => {
            this.art.aliveVirusDescrip.visible = false;
        });

        this.art.virus_attenuated.on("pointerover",() => {
            this.art.attenuatedVirusDescrip.visible = true;
            this.art.attenuatedVirusDescrip.x = this.descripX;
            this.art.attenuatedVirusDescrip.y = this.descripY;
        });
        this.art.virus_attenuated.on("pointerout", () => {
            this.art.attenuatedVirusDescrip.visible = false;
        });

        this.art.virus_dead.on("pointerover",() => {
            this.art.deadVirusDescrip.visible = true;
            this.art.deadVirusDescrip.x = this.descripX;
            this.art.deadVirusDescrip.y = this.descripY;
        });
        this.art.virus_dead.on("pointerout", () => {
            this.art.deadVirusDescrip.visible = false;
        });
    }

    onStartDrag =(object:MicroButtons)=>{
        console.log(object.name, "this is the name of the button");
        this.isDragging = true;
        this.objDragging = object;

        this.gameData.currentChoice = object.name as MicroOrganism;
        this.gameData.currentChoiceIndex = object.index;
    }
    onEndDrag =()=>{
        this.isDragging = false;
        this.objDragging = null;
        
       if (this.gameData.currentChoice === "bacteria" || this.gameData.currentChoice === "virus_alive") {
            console.log(this.gameData.currentChoice);
             if (this.isHitGirl) {
                 this.sceneEnded(this.gameData.currentAct, this.gameData.currentChoice, this.gameData.buttonChoice);
             }
        }
        if (this.gameData.currentChoice === "protein" || this.gameData.currentChoice === "virus_attenuated" || this.gameData.currentChoice === "virus_dead"){ 
            console.log(this.gameData.currentChoice);
             if (this.isHitSyringe) {
                this.sceneEnded(this.gameData.currentAct, this.gameData.currentChoice, this.gameData.buttonChoice);
             }
        }
    }
    onStickySelect =()=>{
    //to do
    }

    update(){
        //console.log(this.mouse.clientX);
        this.dragManager.update();
        
        if (this.isDragging && this.objDragging!==null) {
            let db:MovieClip = this.art.girl;
            let bd:MovieClip = this.art.syringe;
            let obj:MovieClip = this.objDragging;
            
            this.isHitGirl = 
            obj.x < db.x + db.width/2 && 
            obj.x > db.x - db.width/2  &&
            obj.y > db.y - db.height/2 &&
            obj.y < db.y + db.height/2;
            this.art.girl.gotoAndStop(0);
            if (this.gameData.currentChoice === "bacteria" || this.gameData.currentChoice === "virus_alive") {    
                if (this.isHitGirl) {
                    this.art.girl.gotoAndStop(1);
                } 
            }  

            this.isHitSyringe = 
            obj.x < bd.x + bd.width/2 && 
            obj.x > bd.x - bd.width/2  &&
            obj.y > bd.y - bd.height/2 &&
            obj.y < bd.y + bd.height/2;
            this.art.syringe.gotoAndStop(0);
            if (this.gameData.currentChoice === "protein" || this.gameData.currentChoice === "virus_attenuated" || this.gameData.currentChoice === "virus_dead"){ 
                if (this.isHitSyringe) {
                    this.art.syringe.gotoAndStop(1);
                }   
            }         
        }
    }

    cleanup(){
        this.art.bacteria.off("pointerover");
        this.art.proteinDescrip.off("pointerover");
        this.art.aliveVirusDescrip.off("pointerover");
        this.art.attenuatedVirusDescrip.off("pointerover");
        this.art.deadVirusDescrip.off("pointerover");

        this.art.bacteria.off("pointerout");
        this.art.proteinDescrip.off("pointerout");
        this.art.aliveVirusDescrip.off("pointerout");
        this.art.attenuatedVirusDescrip.off("pointerout");
        this.art.deadVirusDescrip.off("pointerout");
    }
}

interface Art extends MovieClip {
    bacteria:MicroButtons;
    protein:MicroButtons;
    virus_dead:MicroButtons;
    virus_attenuated:MicroButtons;
    virus_alive:MicroButtons;
    girl:MovieClip;
    syringe:MovieClip;
    bacteriaDescrip:MovieClip;
    proteinDescrip:MovieClip;
    aliveVirusDescrip:MovieClip;
    attenuatedVirusDescrip:MovieClip;
    deadVirusDescrip:MovieClip;
}

interface MicroButtons extends MovieClip {
    index: number;
}