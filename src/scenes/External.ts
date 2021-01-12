import { MovieClip, utils} from 'pixi-animate';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as ExternalArt from '../assets/External';
import Utils from '../helpers/Utils';

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

        this.art.gotoAndStop('default');
        //this.art.bacolor.gotoAndStop('default');
        this.art.btnAhead.gotoAndStop('default');
        this.art.btnBack.gotoAndStop('default');

        this.art.btnAhead.once("pointerdown",()=>{
            console.log("btnAhead pressed");
            this.changeScene("title");
            //this.changeScene("external");
        });
        this.art.btnBack.once("pointerdown",()=>{
            console.log("btnAhead pressed");
            this.changeScene("title");
        });
    }

    start(){
        Utils.simpleButton(this.art.btnAhead);
        Utils.simpleButton(this.art.btnBack);
        //PIXI.animate.Animator.play(this.art, 'healthyToSick');
        PIXI.animate.Animator.play(this.art);
    }

    update(){
        // to do
    }

    cleanup(){
        // to do
        this.art.btnAhead.off("pointerdown");
        this.art.btnBack.off("pointerdown");
    }
}

interface ExternalArt extends MovieClip {
    patient: MovieClip;
    Health:MovieClip;
    bacolor:MovieClip;
    /*
    dTempFC:PIXI.animate.MovieClip;
    /*
    dTempFC:PIXI.animate.MovieClip;
    Health:PIXI.animate.MovieClip;
    bandaid:PIXI.animate.MovieClip;
    Protection:PIXI.animate.MovieClip;
    dDescription:PIXI.animate.MovieClip;
    */
    btnAhead:MovieClip;
    btnBack:MovieClip;
}