import { Scene, AssetList, Tween } from 'wgbh-springroll-game';
import BaseScene from './BaseScene';
import Utils from '../helpers/Utils';

export default class TitleScene extends BaseScene {
    
    private btnPink: PIXI.Sprite;

    preload():AssetList{
        return [
            {type:'image', id:'btn_pink', path:'img/btn_pink.png'},
        ];
    }

    setup(){
        let i:number;
        const background = new PIXI.Graphics();
        background.beginFill(0xFFFFCE);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);

        
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