import { MovieClip } from 'pixi-animate';
import { HintSequencePlayer } from 'springroll';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalLiveVirusArt from '../assets/InternalLiveVirus';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class InternalLiveVirusScene extends BaseScene {

    private art: InternalLiveVirusArt;
    private virusLibrary:any;
    private liveVirusArray: LiveVirusSprite[]=[];
    private duplicatesArray: LiveVirusSprite[]=[];
    private immuneCellArray: ImmuneCell[]=[];

    // temp!
    private oneCell:boolean=false;
 
    
    preload():AssetList{
        return [
            {type:'animate', id:'internalLiveVirusArt', stage:InternalLiveVirusArt.stage, cacheInstance:true},
            
        ];
    }

    setup(){
        
        this.virusLibrary = InternalLiveVirusArt.library;

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
            cell.velocity = new PIXI.Point(Math.random() * .5, Math.random() * .5);
        });

        this.liveVirusArray.forEach(virus => {
            virus.gotoAndStop(0);
            virus.velocity = new PIXI.Point(Math.random(), Math.random());
        });

     
        Utils.simpleButton(this.art.back);

    }

    start(){

        this.art.back.once("pointerdown", ()=>{
            this.changeScene("game");
        });
    }

    update(){


        // hit testing (you need to check if the cell got hit, if it's hit then it becomes a virus factory)
        this.immuneCellArray.forEach(cell => {
            this.liveVirusArray.forEach(virus => {
                if(!virus.isHit && !cell.isHit) {
                    virus.isHit = cell.isHit = 
                    virus.x < cell.x + cell.width/2 && 
                    virus.x > cell.x - cell.width/2  &&
                    virus.y > cell.y - cell.height/2 &&
                    virus.y < cell.y + cell.height/2;
                    if(cell.isHit) {
                        PIXI.animate.Animator.play(cell, "duplicate");
                        cell.isDuplicating = true;
                        virus.visible = false;        
                    }
 
                }

            });
            if (cell.isHit && !this.oneCell) {
                let newVirus = new this.virusLibrary.virus_alive_sm() as LiveVirusSprite;
                this.liveVirusArray.push(newVirus);
                newVirus.position = cell.position;
                newVirus.velocity = new PIXI.Point(Math.random(), Math.random());
                this.addChild(newVirus);
                this.oneCell=true;
            }
        });





        //insert duplicate virus TODO
        /* this.immuneCellArray.forEach(cell => {
            if(cell.isHit){
                this.duplicatesArray.push(new this.virusLibrary.virus_alive_sm() as LiveVirusSprite);
            }
            this.duplicatesArray.forEach(dup => {
                dup.position = new PIXI.Point(cell.x + 20 , cell.y + 20);
                dup.gotoAndStop(0);
                this.addChild(dup);
            });
        }); */


      
        //movement of sprites 
        this.immuneCellArray.forEach(cell => {
            
            cell.x += cell.velocity.x;
            cell.y += cell.velocity.y;
           
            if(cell.position.x - cell.width <= this.stageManager.leftEdge || cell.position.x + cell.width >= this.stageManager.rightEdge){
                cell.velocity.x = -cell.velocity.x;
            }
            if(cell.y - cell.height/2 <= -this.stageManager.height || cell.y + cell.height/2 >= this.stageManager.height){
                cell.velocity.y = -cell.velocity.y;
            } 

        });

        this.liveVirusArray.forEach(virus => {
         
            virus.x += -virus.velocity.x;
            virus.y += -virus.velocity.y;

            if(virus.position.x - virus.width <= this.stageManager.leftEdge || virus.position.x + virus.width >= this.stageManager.rightEdge){
                virus.velocity.x = -virus.velocity.x;
            }
            if(virus.y - virus.height/2 <= 0 || virus.y + virus.height/2 >= this.stageManager.height){
                virus.velocity.y = -virus.velocity.y;
            }
        });

        
    }

    checkVirusCount=()=>{
        let count:number = 0;
        this.immuneCellArray.forEach(cell => {
            if(cell.isHit){
                count++;
            }

        });
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
    isHit:boolean;
    
}

interface ImmuneCell extends MovieClip { //3 start
    isHit:boolean;
    velocity:PIXI.Point;
    isDuplicating: boolean;
    
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