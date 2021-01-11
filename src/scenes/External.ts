import { MovieClip, utils} from 'pixi-animate';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as ExternalArt from '../assets/External';
//import Utils from '../helpers/Utils';

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
        //Utils.simpleButton(this.art.btnAhead);
    }

    start(){
        PIXI.animate.Animator.play(this.art, 'healthyToSick');
        //PIXI.animate.Animator.play(this.art, 'sickToBed');
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
    btnAhead:MovieClip;
    btnBack:MovieClip;
}