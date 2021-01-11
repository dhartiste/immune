import { MovieClip } from 'pixi-animate';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as ExternalArt from '../assets/External';

export default class GameScene extends Scene {
    
    private art: ExternalArt;
    
    preload():AssetList{
        return [
            {type:'animate', id:'externalArt', stage:ExternalArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        this.art = this.cache.animations.externalArt as ExternalArt;
        this.addChild(this.art);

        this.art.patient.gotoAndStop(0);
    }

    start(){
        // to do
    }

    endAnimation = () => {
        //PIXI.animate.Animator.play(this.art.patient, "sickToSickInBed");
    }

    update(){
        // to do
    }

    cleanup(){
        // to do
    }
}

interface ExternalArt extends MovieClip {
    patient: MovieClip;
    /*
    dTempFC:PIXI.animate.MovieClip;
    Health:PIXI.animate.MovieClip;
    bandaid:PIXI.animate.MovieClip;
    Protection:PIXI.animate.MovieClip;
    dDescription:PIXI.animate.MovieClip;
    */
    //btnAhead:PIXI.animate.button;
    //btnBack:PIXI.animate.MovieClip;
}