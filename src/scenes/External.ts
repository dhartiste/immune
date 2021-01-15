import { MovieClip, utils} from 'pixi-animate';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as ExternalArt from '../assets/External';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class GameScene extends BaseScene {
    
    private art: ExternalArt;
    
    preload():AssetList{
        return [
            {type:'animate', id:'externalArt', stage:ExternalArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        this.art = this.cache.animations.externalArt as ExternalArt;
        this.addChild(this.art);

        this.art.gotoAndStop('default');
        this.art.btnMoveOn.dtext.text = "Move On";
        this.art.btnBack.dtext.text = "Go Back";

        this.art.btnMoveOn.once("pointerdown",()=>{
            console.log("btnMoveOn pressed");
            this.gameData.buttonChoice="left";
            console.log(this.gameData.buttonChoice);
            this.sceneEnded(this.gameData.currentAct, this.gameData.currentChoice, this.gameData.buttonChoice);
            //this.changeScene("external");
        });
        this.art.btnBack.once("pointerdown",()=>{
            console.log("btnBack pressed");
            this.gameData.buttonChoice="right";
            console.log(this.gameData.buttonChoice);
            this.sceneEnded(this.gameData.currentAct, this.gameData.currentChoice, this.gameData.buttonChoice);
        });
    }

    start(){
        Utils.simpleButton(this.art.btnMoveOn);
        Utils.simpleButton(this.art.btnBack);
        //PIXI.animate.Animator.play(this.art, 'healthyToSick');
        PIXI.animate.Animator.play(this.art, 'default');
    }

    update(){
        // to do
    }


    cleanup(){
        // to do
        this.art.btnMoveOn.off("pointerdown");
        this.art.btnBack.off("pointerdown");
    }
}

interface TextButton extends MovieClip {
    dtext: PIXI.Text;
}

interface ExternalArt extends MovieClip {
    patient: MovieClip;
    Health:MovieClip;
    bacolor:MovieClip;
    dFarenheit: MovieClip;
    /*
    dTempFC:PIXI.animate.MovieClip;
    /*
    dTempFC:PIXI.animate.MovieClip;
    Health:PIXI.animate.MovieClip;
    bandaid:PIXI.animate.MovieClip;
    Protection:PIXI.animate.MovieClip;
    dDescription:PIXI.animate.MovieClip;
    */
    btnMoveOn:TextButton;
    btnBack:TextButton;
}