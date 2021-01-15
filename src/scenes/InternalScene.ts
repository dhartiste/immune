import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalArt from '../assets/Internal';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalScene extends BaseScene {

    private art: InternalArt;
    private microGuy: MovieClip;
    
    preload():AssetList{
        return [
            {type:'animate', id:'internalArt', stage:InternalArt.stage, cacheInstance:true},
        ];
    }

    setup(){

        this.art = this.cache.animations.internalArt as InternalArt;
        this.addChild(this.art);
        this.art.bacteria.visible = this.art.protein.visible = false;

        switch(this.gameData.currentChoiceIndex) {
            case MICROORGANISM_INDEX.ATTENTUATED_VIRUS:
                this.microGuy = this.art.bacteria;
                this.art.bacteria.visible = true;
                break
            case MICROORGANISM_INDEX.BACTERIA:
                // do the bateria
                console.log("...The BACTERIA. which was found in the number check");
                this.microGuy = this.art.bacteria;
                this.art.bacteria.visible = true;
                break;
            case MICROORGANISM_INDEX.BACTERIA_PROTEIN:
                console.log("...The BACTERIA_PROTEIN which was found in the number check");
                this.microGuy = this.art.protein;
                this.art.protein.visible = true;
                break;
            case MICROORGANISM_INDEX.DEAD_VIRUS:
                this.microGuy = this.art.bacteria;
                this.art.bacteria.visible = true;
                break
            case MICROORGANISM_INDEX.LIVE_VIRUS:
                this.microGuy = this.art.bacteria;
                this.art.bacteria.visible = true;
                break;            
        }

        this.art.bacteria.gotoAndStop(0);
        this.art.protein.gotoAndStop(0);
        Utils.simpleButton(this.art.back);

    }

    start(){
        //
        PIXI.animate.Animator.play(this.microGuy,"intro",this.boingIt);

        this.art.back.once("pointerdown", ()=>{
            this.sceneEnded(this.gameData.currentAct, this.gameData.currentChoice, this.gameData.buttonChoice);
        });
    }

    boingIt = () => {
        // 
        Tween.get(this.microGuy)
            .to({x:this.art.back.x + this.art.back.width + this.microGuy.width,y:this.microGuy.height},800,"quadOut")
            .to({y:this.stageManager.height-this.microGuy.height/2},1300,"bounceOut")
            .call(this.endIt);
    }
    endIt = () => {
        PIXI.animate.Animator.play(this.microGuy,"reveal",this.boingIt);
    }

    update(){
        // todo
    }

    cleanup(){
        //to do
        //Tween.removeAllTweens();
        Tween.removeTweens(this.microGuy);
        this.art.back.off("pointerdown");
        
    }
}

interface InternalArt extends MovieClip {
    bacteria: MovieClip;
    protein: MovieClip; 
    back: MovieClip;
}