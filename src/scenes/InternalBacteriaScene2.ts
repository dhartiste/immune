import { MovieClip } from 'pixi-animate';
import { Sprite } from 'pixi.js';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalBacteriaArt from '../assets/InternalBacteria';
import { MICROORGANISM_INDEX } from '../helpers/Const';

import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalBacteria extends BaseScene {

    private exampleLib:any;
    private art: InternalBacteriaArt;
    private bacteriaArray: Bacteria[]=[];
    private macrophageArray: Macrophage[]=[];
    private ended:boolean=false;
    private antibioticArray: Antibiotic[] = [];

    preload():AssetList{
        return [
            {type:'animate', id:'internalBacteriaArt', stage:InternalBacteriaArt.stage, cacheInstance:true}
        ];
    }

    setup(){
   
        this.exampleLib = InternalBacteriaArt.library;

        const background = new PIXI.Graphics();
        background.beginFill(0xFFFFCE);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);
        
        this.art = this.cache.animations.internalBacteriaArt as InternalBacteriaArt;
        this.addChild(this.art);
        this.bacteriaArray = [this.art.bacteria1, this.art.bacteria2, this.art.bacteria3, this.art.bacteria4, this.art.bacteria5];
        this.macrophageArray = [this.art.macrophage1];
        this.art.macrophage2.visible = this.art.macrophage3.visible = false;
        this.antibioticArray = [this.art.antibiotic];

        this.macrophageArray.forEach(macrophage => {
            macrophage.gotoAndStop(0);
            macrophage.velocity = new PIXI.Point(Math.random()*.5, Math.random()-.5);
        });

        this.bacteriaArray.forEach(bacteria => {
            bacteria.gotoAndStop(0);
            bacteria.velocity = new PIXI.Point(Math.random()*-1, Math.random()-.5);
        });

        for (let index = 0; index < 19; index++) {
            this.antibioticArray.push(new this.exampleLib.antibiotic() as Antibiotic);
        }

        this.antibioticArray.forEach((antibiotic,index)=> {
            antibiotic.position = new PIXI.Point(this.art.antibiotic.x+50*Math.random(), this.art.antibiotic.y+50*Math.random());
            antibiotic.velocity = new PIXI.Point(Math.random()-2, 2*Math.random()-1);
            this.addChild(antibiotic);
        });

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

    }

    start(){
        setTimeout(this.duplicateB, 10000);
        setTimeout(() => this.changeScene("external"), 12000);
    }

    duplicateB=() => {  
        let i = 0;
        this.bacteriaArray.forEach(bacteria => {
            if (i%2===0) {
                bacteria.isDividing=true;
                if (!bacteria.isHit){
                    PIXI.animate.Animator.play(bacteria,"duplicate");
                }
            }
            i++;
        });
        setTimeout(() => this.duplicateA(), 3000);
        console.log("here");
        setTimeout(() => this.duplicateBFix(), 2000);
    }

    duplicateA(){
        let i = 1;
        this.bacteriaArray.forEach(bacteria => {
            if (i%2===0) {
                bacteria.isDividing=true;
                if (!bacteria.isHit){
                    PIXI.animate.Animator.play(bacteria,"duplicate");
                }
            }
            i++;
        });
    }

    duplicateBFix=() => {  
        console.log("hi");
        let i = 0;
        this.bacteriaArray.forEach(bacteria => {
            if (i%2===0&&i<5) {
                let bacteriaNew = new this.exampleLib.bacteria_divide() as Bacteria; 
                bacteriaNew.position = new PIXI.Point(bacteria.x-bacteria.width/5, bacteria.y);
                bacteriaNew.width*=-1;
                bacteriaNew.gotoAndStop("duplicate");
                bacteriaNew.velocity = new PIXI.Point(-bacteria.velocity.x, bacteria.velocity.y);
                bacteria.velocity.x+=Math.random();
                bacteria.x+=bacteria.width/5;
                bacteria.gotoAndStop("duplicate");
                bacteria.isDividing=false;
                bacteria.velocity.x*=-1;
                this.addChild(bacteriaNew);
                this.bacteriaArray.push(bacteriaNew);
                console.log("added a new one");
            }
            i++;
        });
        setTimeout(() => this.duplicateAFix(), 3000);
      
    }

    duplicateAFix(){
        let i = 1;
        this.bacteriaArray.forEach(bacteria => {
            
            if (i%2===0&&i<6) {
                let bacteriaNew = new this.exampleLib.bacteria_divide() as Bacteria; 
                bacteriaNew.position = new PIXI.Point(bacteria.x-bacteria.width/5, bacteria.y);
                bacteriaNew.width*=-1;
                bacteriaNew.gotoAndStop("duplicate");
                bacteriaNew.velocity = new PIXI.Point(-bacteria.velocity.x, bacteria.velocity.y);
                bacteria.velocity.x+=Math.random();
                bacteria.x+=bacteria.width/5;
                bacteria.gotoAndStop("duplicate");
                bacteria.isDividing=false;
                bacteria.velocity.x*=-1;
                this.addChild(bacteriaNew);
                this.bacteriaArray.push(bacteriaNew);
                console.log("added a new one");
            }
            i++;
        });
    }

    update(){

        this.bacteriaArray.forEach(bacteria => {
            this.antibioticArray.forEach(antibiotic => {
                if(antibiotic.visible&&!bacteria.isDividing&&!bacteria.isHit) {
                    bacteria.isHit = 
                    antibiotic.x < bacteria.x + bacteria.width/2 && 
                    antibiotic.x > bacteria.x - bacteria.width/2  &&
                    antibiotic.y > bacteria.y - bacteria.height/2 &&
                    antibiotic.y < bacteria.y + bacteria.height/2;
                    if(bacteria.isHit) {
                       // bacteria.addChild(antibiotic);
                        antibiotic.velocity = new PIXI.Point(0,0);
                        bacteria.velocity = new PIXI.Point(0,0);
                        PIXI.animate.Animator.play(bacteria, "dead", ()=>{
                            bacteria.visible = false;
                        });
                        this.bacteriaArray.forEach((bacmatch,index)=>{
                            if (bacmatch===bacteria) {
                                console.log("remove this item from the active array", index);
                            }
                        });
                    }
                }
            });
        });

        this.antibioticArray.forEach(antibiotic => {
            antibiotic.x+=antibiotic.velocity.x;
            antibiotic.y+=antibiotic.velocity.y;

            if(antibiotic.position.x - antibiotic.width <= this.stageManager.leftEdge || antibiotic.position.x + antibiotic.width >= this.stageManager.rightEdge){
                antibiotic.velocity.x = -antibiotic.velocity.x;
                antibiotic.x+=antibiotic.velocity.x;
            }
            if(antibiotic.y - antibiotic.height <= 0|| antibiotic.y + antibiotic.height >= 750){
                antibiotic.velocity.y = -antibiotic.velocity.y;
                antibiotic.y+=antibiotic.velocity.y;
            } 
        });

        this.bacteriaArray.forEach(bacteria => {
            bacteria.x+=bacteria.velocity.x;
            bacteria.y+=bacteria.velocity.y;

            if(bacteria.position.x - bacteria.width/2 <= this.stageManager.leftEdge || bacteria.position.x + bacteria.width/2 >= this.stageManager.rightEdge){
                bacteria.velocity.x = -bacteria.velocity.x;
                bacteria.x+=2*bacteria.velocity.x;
            }
            if(bacteria.y - bacteria.height/2 <= 0 || bacteria.y + bacteria.height/2  >= 750 ){
                
                bacteria.velocity.y = -bacteria.velocity.y;
                bacteria.y+=2*bacteria.velocity.y;
            } 
        });

        if (this.ended) {

            this.macrophageArray.forEach(macrophage => {
                macrophage.velocity.x*=0.95;
                macrophage.velocity.y*=0.95;
            });
    
            this.bacteriaArray.forEach(bacteria => {
                bacteria.velocity.x*=0.99;
                bacteria.velocity.y*=0.99;
            });
            
            this.antibioticArray.forEach(antibiotic => {
                antibiotic.velocity.x*=0.99;
                antibiotic.velocity.y*=0.99;
            });
        }
    }

    checkMacrophage=()=>{
        let count:number = 0;
        this.macrophageArray.forEach(macrophage => {
            if(macrophage.isHit){
                count++;
            }
        });
        if(count===3) {
            console.log("animation done");
            this.ended = true;
            setTimeout(()=>{
                this.sceneEnded(this.gameData.currentAct,"bacteria","none");
            },5000);
        }
    }

    cleanup(){
        //to do
        // clear timeouts before destroying scene
        this.bacteriaArray.forEach(bacteria => {
            bacteria.visible=false;
        });
    }
}

interface Bacteria extends MovieClip {
    isDividing:boolean;
    isHit:boolean;
    velocity:PIXI.Point;
}

interface Macrophage extends MovieClip { //3 start
    isHit:boolean;
    velocity:PIXI.Point;
}

interface Antibiotic extends Sprite{
    velocity:PIXI.Point;
    visible:boolean;
}

interface InternalBacteriaArt extends MovieClip {
    bacteria1: Bacteria;
    bacteria2: Bacteria;
    bacteria3: Bacteria;
    bacteria4: Bacteria;
    bacteria5: Bacteria;

    macrophage1: Macrophage;
    macrophage2: Macrophage;
    macrophage3: Macrophage;

    antibiotic: Antibiotic;
}