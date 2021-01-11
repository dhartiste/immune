import { MovieClip } from 'pixi-animate';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as GameArt from '../assets/External';

export default class GameScene extends Scene {
    
    private art: Art;
    
    preload():AssetList{
        return [
            {type:'animate', id:'gameArt', stage:GameArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        this.art = this.cache.animations.gameArt as Art;
        this.art.patient.gotoAndStop(0);
        //this.art.btnAhead.gotoAndStop(0);
        //this.art.btnBack.gotoAndStop(0);
        this.addChild(this.art);
    }

    start(){
        this.interactive = true;
        this.interactiveChildren = true;
    }

    update(){
        // to do
    }

    cleanup(){
        // to do
    }
}

interface Art extends PIXI.animate.MovieClip {
    patient:PIXI.animate.MovieClip;
    dTempFC:PIXI.animate.MovieClip;
    Health:PIXI.animate.MovieClip;
    bandaid:PIXI.animate.MovieClip;
    Protection:PIXI.animate.MovieClip;
    dDescription:PIXI.animate.MovieClip;
    //btnAhead:PIXI.animate.MovieClip;
    //btnBack:PIXI.animate.MovieClip;
}