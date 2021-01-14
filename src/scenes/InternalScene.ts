import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalArt from '../assets/Internal';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalScene extends BaseScene {

    private art: InternalArt;
    //private microGuy: MovieClip;
    private bacteriaArray: Bacteria[]=[];
    private macrophageArray: Macrophage[]=[];
    
    preload():AssetList{
        return [
            {type:'animate', id:'internalArt', stage:InternalArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        this.macrophageArray.forEach(macrophage => {
            macrophage.gotoAndStop(0);
            macrophage.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        })

        this.bacteriaArray.forEach(bacteria => {
            bacteria.gotoAndStop(0);
            bacteria.velocity = new PIXI.Point(Math.random(), Math.random());
        })
        this.art = this.cache.animations.internalArt as InternalArt;
        this.addChild(this.art);
        this.bacteriaArray = [this.art.bacteria1, this.art.bacteria2, this.art.bacteria3, this.art.bacteria4, this.art.bacteria5];
        this.macrophageArray = [this.art.macrophage1, this.art.macrophage2, this.art.macrophage3];

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
        Utils.simpleButton(this.art.back);

    }

    start(){
        // PIXI.animate.Animator.play(this.microGuy,"intro",this.boingIt);

        this.art.back.once("pointerdown", ()=>{
            this.changeScene("game");
        });



        //initialize arrays

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
            macrophage.gotoAndStop(0);
            macrophage.x+=macrophage.velocity.x;
            macrophage.y+=macrophage.velocity.y;
        })

        this.bacteriaArray.forEach(bacteria => {
            bacteria.gotoAndStop(0);
            bacteria.x+=bacteria.velocity.x;
            bacteria.y+=bacteria.velocity.y;
        })

        // todo
        // each microphage and bacteria is moving

        //check to see if overlap



    }

    checkMacrophage=()=>{
        let count:number = 0;
        this.macrophageArray.forEach(macrophage => {
            if(macrophage.isHit){
                count++;
            }
            
        })
        if(count===3) {
            console.log("animation done");
            this.changeScene("external");
        }
    }

    cleanup(){
        //to do
        //Tween.removeAllTweens();
        //Tween.removeTweens(this.microGuy);
        this.art.back.off("pointerdown");
        
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

interface InternalArt extends MovieClip {
    bacteria1: Bacteria;
    bacteria2: Bacteria;
    bacteria3: Bacteria;
    bacteria4: Bacteria;
    bacteria5: Bacteria;

    macrophage1: Macrophage;
    macrophage2: Macrophage;
    macrophage3: Macrophage;

    back: MovieClip;
}