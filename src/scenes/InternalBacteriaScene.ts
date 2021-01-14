import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalBacteriaArt from '../assets/InternalBacteria';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalBacteria extends BaseScene {

    private art: InternalBacteriaArt;
    //private microGuy: MovieClip;
    private bacteriaArray: Bacteria[]=[];
    private macrophageArray: Macrophage[]=[];
    
    preload():AssetList{
        return [
            {type:'animate', id:'internalBacteriaArt', stage:InternalBacteriaArt.stage, cacheInstance:true},
        ];
    }

    setup(){

        const background = new PIXI.Graphics();
        background.beginFill(0xFFFFCE);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);
        
        this.art = this.cache.animations.internalBacteriaArt as InternalBacteriaArt;
        this.addChild(this.art);
        this.bacteriaArray = [this.art.bacteria1, this.art.bacteria2, this.art.bacteria3, this.art.bacteria4, this.art.bacteria5];
        this.macrophageArray = [this.art.macrophage1, this.art.macrophage2, this.art.macrophage3];

        this.macrophageArray.forEach(macrophage => {
            macrophage.gotoAndStop(0);
            macrophage.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        })

        this.bacteriaArray.forEach(bacteria => {
            bacteria.gotoAndStop(0);
            bacteria.velocity = new PIXI.Point(Math.random()-1, Math.random());
        })
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
            macrophage.x+=macrophage.velocity.x;
            macrophage.y+=macrophage.velocity.y;
        })

        this.bacteriaArray.forEach(bacteria => {
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

interface InternalBacteriaArt extends MovieClip {
    bacteria1: Bacteria;
    bacteria2: Bacteria;
    bacteria3: Bacteria;
    bacteria4: Bacteria;
    bacteria5: Bacteria;

    macrophage1: Macrophage;
    macrophage2: Macrophage;
    macrophage3: Macrophage;
}