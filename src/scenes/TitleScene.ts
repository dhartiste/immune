import { Scene, AssetList, Tween } from 'wgbh-springroll-game';
import BaseScene from './BaseScene';
import Utils from '../helpers/Utils';
import * as TitleArt from '../assets/TitleNew';
import { MovieClip } from 'pixi-animate';

export default class TitleScene extends BaseScene {
    
    private btnPink: PIXI.Sprite;
    //private art:MovieClip;
    private art:TitleArt;

    preload():AssetList{
        return [
            {type:'image', id:'btn_pink', path:'img/enterImage.png'},
            {type:'animate', id:'titleArt', stage:TitleArt.stage, cacheInstance:true}
        ];
    }

    setup(){
        this.art = this.cache.animations.titleArt as TitleArt;

        this.art.gotoAndStop(0);

        let i:number;
        const background = new PIXI.Graphics();
        background.beginFill(0xFFFFCE);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);
        this.addChild(this.art);
        
        this.btnPink = new PIXI.Sprite(this.cache.images.btn_pink);

        this.gameData.currentChoice = "none";
        this.gameData.currentAct = 0;
        this.gameData.completedOrgs = [false,false,false,false,false];

        this.btnPink.y = 500;
        this.btnPink.x = 725;
        
        this.addChild(this.btnPink);

        this.btnPink.once("pointerdown",()=>{
            console.log("Pink button pressed");
            this.changeScene("game");
            //this.changeScene("external");
        });
        this.resize();
    }

    start(){
        Utils.simpleButton(this.btnPink);
        PIXI.animate.Animator.play(this.art);
    }

    // ----------------------------------------------------------
    // ****** SOME FUNCTIONS >>>>>>>
    // ----------------------------------------------------------

   
    // ----------------------------------------------------------
    // ****** END SOME FUNCTIONS <<<<<<<<<
    // ----------------------------------------------------------

    resize(){
       // todo
    }

    cleanup(){
        this.btnPink.off("pointerdown");
    }

}

interface TitleArt extends MovieClip {

}