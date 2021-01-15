import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalLiveVirusArt from '../assets/InternalLiveVirus';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalLiveVirusScene extends BaseScene {

    private art: InternalLiveVirusArt;
    private liveVirusArray: LiveVirusSprite[]=[];
    private immuneCellArray: ImmuneCell[]=[];
    
    preload():AssetList{
        return [
            {type:'animate', id:'internalLiveVirusArt', stage:InternalLiveVirusArt.stage, cacheInstance:true},
        ];
    }

    setup(){
        
        const background = new PIXI.Graphics();
        background.beginFill(0xFFFFCE);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);


        this.art = this.cache.animations.internalLiveVirusArt as InternalLiveVirusArt;
        this.addChild(this.art);
       
        this.liveVirusArray = [this.art.live1, this.art.live2, this.art.live3, this.art.live4, this.art.live5];
        this.immuneCellArray = [this.art.immune1, this.art.immune2, this.art.immune3];


        this.immuneCellArray.forEach(cell => {
            cell.gotoAndStop(0);
            cell.velocity = new PIXI.Point(Math.random(), Math.random());
        })

        this.liveVirusArray.forEach(virus => {
            virus.gotoAndStop(0);
            virus.velocity = new PIXI.Point(Math.random(), Math.random());
        })

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


        // hit testing (you need to check if the cell got hit, if it's hit then it becomes a virus factory)
        this.immuneCellArray.forEach(cell => {
            this.liveVirusArray.forEach(virus => {
                if(!cell.isHit) {
                    cell.isHit = 
                    virus.x < cell.x + cell.width/2 && 
                    virus.x > cell.x - cell.width/2  &&
                    virus.y > cell.y - cell.height/2 &&
                    virus.y < cell.y + cell.height/2;
                    if(cell.isHit) {
                        PIXI.animate.Animator.play(cell, "duplicate", this.checkVirusCount);
                    }
                }

            });
        });


        //movement of sprites (FIX)
        this.liveVirusArray.forEach(virus => {
            
            virus.y += 0;
            virus.x = -1;
        
        })

        this.immuneCellArray.forEach(cell => {
         
            cell.x += Math.random() * .5;
            cell.y += 0;
        })
    }

    checkVirusCount=()=>{
        let count:number = 0;
        this.immuneCellArray.forEach(cell => {
            if(cell.isHit){
                count++;
            }

        })
        if(count===10) {
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
interface LiveVirusSprite extends MovieClip {
    isAbsorbed:boolean;
    velocity:PIXI.Point;
    
}

interface ImmuneCell extends MovieClip { //3 start
    isHit:boolean;
    velocity:PIXI.Point;
}

interface InternalLiveVirusArt extends MovieClip {
    immune1: ImmuneCell;
    immune2: ImmuneCell;
    immune3: ImmuneCell;

    live1: LiveVirusSprite;
    live2: LiveVirusSprite;
    live3: LiveVirusSprite;
    live4: LiveVirusSprite;
    live5: LiveVirusSprite;

    back: MovieClip;
}