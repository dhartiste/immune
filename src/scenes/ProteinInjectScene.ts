import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalArt from '../assets/Internal_Protein';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalScene extends BaseScene {

    private art: InternalArt;
    private proteinArray: Protein[]=[];
    private macrophageArray: Macrophage[]=[];
    preload():AssetList{
        return [
            {type:'animate', id:'internalArt', stage:InternalArt.stage, cacheInstance:true},
        ];
    }

    setup(){

        const background = new PIXI.Graphics();
        background.beginFill(0xFFFFCE);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);
        
        this.art = this.cache.animations.internalArt as InternalArt;
        this.addChild(this.art);
       
        this.proteinArray = [this.art.protein1, this.art.protein2, this.art.protein3, this.art.protein4, this.art.protein5, this.art.protein6, this.art.protein7, this.art.protein8, this.art.protein9];
        this.macrophageArray = [this.art.macrophage1, this.art.macrophage2, this.art.macrophage3];


        this.macrophageArray.forEach(macrophage => {
            macrophage.gotoAndStop(0);
            macrophage.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        });

        this.proteinArray.forEach(protein => {
            protein.gotoAndStop(0);
            protein.velocity = new PIXI.Point(Math.random(), Math.random());
        });

        Utils.simpleButton(this.art.back);

    }

    start(){


        this.art.back.once("pointerdown", ()=>{
            this.changeScene("game");
        });
    }

    update(){

        //hit testing
        this.macrophageArray.forEach(macrophage => {
            this.proteinArray.forEach(protein => {
                if(!protein.isHit) {
                    protein.isHit = macrophage.isHit = 
                    protein.x < macrophage.x + macrophage.width/2 && 
                    protein.x > macrophage.x - macrophage.width/2  &&
                    protein.y > macrophage.y - macrophage.height/2 &&
                    protein.y < macrophage.y + macrophage.height/2;
                    if(macrophage.isHit && !macrophage.hitOnce) {
                        PIXI.animate.Animator.play(macrophage, "crown");
                        macrophage.hitOnce = true; 
                    }
                    // if(macrophage.hitOnce){ //trying to get the animation play, then freeze on the crown frame (TODO)
                    //     macrophage.gotoAndStop("crown_stop");
                    // }
                    if(protein.isHit){
                        PIXI.animate.Animator.play(protein, "bald", this.checkProteinsDead);
                    }
                }
            });
        });

        //movement of sprites 
        this.macrophageArray.forEach(macrophage => {
            
            macrophage.x += macrophage.velocity.x;
            macrophage.y += macrophage.velocity.y * 2;
           
            if(macrophage.position.x - macrophage.width <= this.stageManager.leftEdge || macrophage.position.x + macrophage.width >= this.stageManager.rightEdge){
                macrophage.velocity.x = -macrophage.velocity.x;
            }
            if(macrophage.y - macrophage.height/2 <= 0 || macrophage.y + macrophage.height /2>= this.stageManager.height){
                macrophage.velocity.y = -macrophage.velocity.y;
            } 

        });

        this.proteinArray.forEach(protein => {
         
            protein.x += -protein.velocity.x;
            protein.y += -protein.velocity.y;

            if(protein.position.x - protein.width <= this.stageManager.leftEdge || protein.position.x + protein.width >= this.stageManager.rightEdge){
                protein.velocity.x = -protein.velocity.x;
            }
            if(protein.y - protein.height/2 <= 0 || protein.y + protein.height/2 >= this.stageManager.height){
                protein.velocity.y = -protein.velocity.y;
            }
        });
    }

    checkProteinsDead=()=>{
        let count:number = 0;
        this.proteinArray.forEach(protein => {
            if(protein.isHit){
                count++;
            }

        });
        if(count===5) {
            console.log("animation done");
            this.changeScene("external");
        }
    }

    cleanup(){
        //to do
        //Tween.removeAllTweens();
        this.art.back.off("pointerdown");
        
    }
}
interface Protein extends MovieClip {
    isHit:boolean;
    velocity:PIXI.Point;
   
}

interface Macrophage extends MovieClip { //3 start
    isHit:boolean;
    velocity:PIXI.Point;
    hitOnce: boolean;
}

interface InternalArt extends MovieClip {
    protein1: Protein;
    protein2: Protein;
    protein3: Protein;
    protein4: Protein;
    protein5: Protein;
    protein6: Protein;
    protein7: Protein;
    protein8: Protein;
    protein9: Protein;

    macrophage1: Macrophage;
    macrophage2: Macrophage;
    macrophage3: Macrophage;


    back: MovieClip;
}