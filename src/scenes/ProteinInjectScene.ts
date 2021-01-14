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

        this.macrophageArray.forEach(macrophage => {
            macrophage.gotoAndStop(0);
            macrophage.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        })

        this.proteinArray.forEach(protein => {
            protein.gotoAndStop("bald_stop");
            protein.velocity = new PIXI.Point(Math.random(), Math.random());
        })

        this.art = this.cache.animations.internalArt as InternalArt;
        this.addChild(this.art);
       
        this.proteinArray = [this.art.protein1, this.art.protein2, this.art.protein3, this.art.protein4, this.art.protein5, this.art.protein6];
        this.macrophageArray = [this.art.macrophage1, this.art.macrophage2, this.art.macrophage3];

    

        //this.art.bacteria.gotoAndStop(0);
        //this.art.protein.gotoAndStop(0);
        Utils.simpleButton(this.art.back);

    }

    start(){
        
        //PIXI.animate.Animator.play(this.microGuy,"intro",this.boingIt);

        this.art.back.once("pointerdown", ()=>{
            this.changeScene("game");
        });
    }

    update(){

        //hit testing
        this.macrophageArray.forEach(macrophage => {
            this.proteinArray.forEach(protein => {
                if(!protein.isHit&&!macrophage.isHit) {
                    protein.isHit = macrophage.isHit = 
                    protein.x < macrophage.x + macrophage.width/2 && 
                    protein.x > macrophage.x - macrophage.width/2  &&
                    protein.y > macrophage.y - macrophage.height/2 &&
                    protein.y < macrophage.y + macrophage.height/2;
                    if(macrophage.isHit) {
                        PIXI.animate.Animator.play(macrophage, "crown");
                    }
                    else{
                        macrophage.gotoAndStop(0);
                    }
                    if(protein.isHit){
                        PIXI.animate.Animator.play(protein, "bald", this.checkProteinsDead);
                    }
                    else{
                        protein.gotoAndStop(0);
                    }
                }

            });
        });


        //movement of sprites (FIX)
        this.macrophageArray.forEach(macrophage => {
            
            macrophage.y += 0;
            macrophage.x += 1;

           
        })

        this.proteinArray.forEach(protein => {
         
            protein.x += -1.2;
            protein.y += 0;
        })
    }

    checkProteinsDead=()=>{
        let count:number = 0;
        this.proteinArray.forEach(protein => {
            if(protein.isHit){
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
}

interface InternalArt extends MovieClip {
    protein1: Protein;
    protein2: Protein;
    protein3: Protein;
    protein4: Protein;
    protein5: Protein;
    protein6: Protein;

    macrophage1: Macrophage;
    macrophage2: Macrophage;
    macrophage3: Macrophage;


    back: MovieClip;
}