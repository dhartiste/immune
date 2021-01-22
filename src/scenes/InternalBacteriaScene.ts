import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalBacteriaArt from '../assets/InternalBacteria';
import { MICROORGANISM_INDEX } from '../helpers/Const';

import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalBacteria extends BaseScene {

    private exampleLib:any;
    private art: InternalBacteriaArt;
    //private microGuy: MovieClip;
    private bacteriaArray: Bacteria[]=[];
    private macrophageArray: Macrophage[]=[];
    private ended:boolean=false;


    


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
        this.macrophageArray = [this.art.macrophage1, this.art.macrophage2, this.art.macrophage3];


        // let macro1= new this.exampleLib.macro_bacteria() as Organism; 
        // macro1.position = new PIXI.Point(500, 200);
        // macro1.gotoAndStop(0);
        // macro1.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        // this.addChild(macro1);

        this.art.antibiotic.visible = false;

        this.macrophageArray.forEach(macrophage => {
            macrophage.gotoAndStop(0);
            macrophage.velocity = new PIXI.Point(Math.random()*.5, Math.random()-.5);
        });

        this.bacteriaArray.forEach(bacteria => {
            bacteria.gotoAndStop(0);
            bacteria.velocity = new PIXI.Point(Math.random()*-6, Math.random()-.5);
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

        // this.art.bacteria.gotoAndStop(0);
        // this.art.protein.gotoAndStop(0);

    }

    start(){
        // PIXI.animate.Animator.play(this.microGuy,"intro",this.boingIt);
        // let start = 1;
        setTimeout(this.duplicateB, 2000);
        //this.duplicateB();

        // this.bacteriaArray.forEach(bacteria => {
           
        //         bacteria.isDividing=true;
        //         PIXI.animate.Animator.play(bacteria,"duplicate");
        //         bacteria.isDividing=false;
            
        // });


        //initialize arrays

    }

    duplicateB=() => {  
        let i = 0;
        this.bacteriaArray.forEach(bacteria => {
            if (i%2===0) {
                bacteria.isDividing=true;
                PIXI.animate.Animator.play(bacteria,"duplicate");
                
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
                PIXI.animate.Animator.play(bacteria,"duplicate");
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
    // boingIt = () => {
    //     // 
    //     Tween.get(this.microGuy)
    //         .to({x:this.art.back.x + this.art.back.width + this.microGuy.width,y:this.microGuy.height},800,"quadOut")
    //         .to({y:this.stageManager.height-this.microGuy.height/2},1300,"bounceOut")
    //         .call(this.endIt);
    // }
    // endIt = () => {
    //     PIXI.animate.Animator.play(this.microGuy,"reveal",this.boingIt);
    // }

    update(){
        this.macrophageArray.forEach(macrophage => {
            this.bacteriaArray.forEach(bacteria => {
                if(!bacteria.isDividing&&!macrophage.isHit) {
                    macrophage.isHit = 
                    bacteria.x < macrophage.x + macrophage.width/2 && 
                    bacteria.x > macrophage.x - macrophage.width/2  &&
                    bacteria.y > macrophage.y - macrophage.height/2 &&
                    bacteria.y < macrophage.y + macrophage.height/2;
                    if(macrophage.isHit) {
                        PIXI.animate.Animator.play(macrophage, "dead", this.checkMacrophage);
                    }
                }
                
            });
        });

        this.macrophageArray.forEach(macrophage => {
            macrophage.x+=macrophage.velocity.x;
            macrophage.y+=macrophage.velocity.y;

            if(macrophage.position.x - macrophage.width <= this.stageManager.leftEdge || macrophage.position.x + macrophage.width >= this.stageManager.rightEdge){
                macrophage.velocity.x = -macrophage.velocity.x;
                macrophage.x+=macrophage.velocity.x;
            }
            if(macrophage.y - macrophage.height <= 0|| macrophage.y + macrophage.height >= 750){
                macrophage.velocity.y = -macrophage.velocity.y;
                macrophage.y+=macrophage.velocity.y;
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
        //Tween.removeAllTweens();
        //Tween.removeTweens(this.microGuy);
    }
}

interface Bacteria extends MovieClip {
    isDividing:boolean;
    velocity:PIXI.Point;
}

interface Macrophage extends MovieClip { //3 start
    isHit:boolean;
    velocity:PIXI.Point;
}

// interface Organism extends MovieClip {
//     isHit:boolean;
//     velocity:PIXI.Point;
// }

interface InternalBacteriaArt extends MovieClip {
    bacteria1: Bacteria;
    bacteria2: Bacteria;
    bacteria3: Bacteria;
    bacteria4: Bacteria;
    bacteria5: Bacteria;

    macrophage1: Macrophage;
    macrophage2: Macrophage;
    macrophage3: Macrophage;

    antibiotic: MovieClip;
}