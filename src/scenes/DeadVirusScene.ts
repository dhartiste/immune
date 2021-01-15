import { MovieClip } from 'pixi-animate';
import { AssetList, Tween } from 'wgbh-springroll-game';
import * as InternalDeadVirusArt from '../assets/InternalDeadVirus';
import { MICROORGANISM_INDEX } from '../helpers/Const';
import Utils from '../helpers/Utils';
import BaseScene from './BaseScene';

export default class DeadVirusScene extends BaseScene {

    private art: InternalDeadVirusArt;
    private deadVirusArray: DeadVirus[]=[];
    private immuneCellArray: ImmuneCell[]=[];
    
    preload():AssetList{
        return [
            {type:'animate', id:'internalDeadVirusArt', stage:InternalDeadVirusArt.stage, cacheInstance:true},
        ];
    }

    setup(){


        this.art = this.cache.animations.internalDeadVirusArt as InternalDeadVirusArt;
        this.addChild(this.art);

        this.deadVirusArray = [this.art.dead_virus1, this.art.dead_virus2, this.art.dead_virus3, this.art.dead_virus4, this.art.dead_virus5];
        this.immuneCellArray = [this.art.immune1, this.art.immune2, this.art.immune3];


        this.deadVirusArray.forEach(virus => {
            virus.velocity = new PIXI.Point(Math.random() + 0.25, Math.random() + 0.25);
        });

        this.immuneCellArray.forEach(cell => {
            cell.gotoAndStop(0);
            cell.velocity = new PIXI.Point(Math.random() + 0.25, Math.random() + 0.25);
        });


    

        //this.art.bacteria.gotoAndStop(0);
        //this.art.protein.gotoAndStop(0);

    }

    start(){

        //todo
        

    }

    update(){

//hit testing
        this.immuneCellArray.forEach(cell => {
            this.deadVirusArray.forEach(virus => {
                if(!cell.isHit) {
                    cell.isHit = virus.isAbsorbed =
                    virus.x < cell.x + cell.width/2 && 
                    virus.x > cell.x - cell.width/2  &&
                    virus.y > cell.y - cell.height/2 &&
                    virus.y < cell.y + cell.height/2;
                    if(cell.isHit) {
                        PIXI.animate.Animator.play(cell, "intro", this.checkVirusCount);
                        //cell.gotoAndStop("intro_stop");
                        // cell.hitOnce = true;
                    }
                    // if(cell.hitOnce){ //trying to get the animation play, then freeze on the crown frame (TODO)
                        
                    // }
                    if(virus.isAbsorbed){
                        virus.visible = false;

                    }
                    
                }
            }) ;
        });


        //movement of sprites 
        this.deadVirusArray.forEach(virus => {
            
            virus.x += -virus.velocity.x;
            virus.y += -virus.velocity.y;
           
            if(virus.position.x - virus.width <= this.stageManager.leftEdge || virus.position.x + virus.width >= this.stageManager.rightEdge){
                virus.velocity.x = -virus.velocity.x;
            }
            if(virus.y - virus.height <= 0 || virus.y + virus.height >= 750){
                virus.velocity.y = -virus.velocity.y;
            } 
           
        });

        this.immuneCellArray.forEach(cell => {
         
            cell.x += cell.velocity.x;
            cell.y += cell.velocity.y;

            if(cell.position.x - cell.width <= this.stageManager.leftEdge || cell.position.x + cell.width >= this.stageManager.rightEdge){
                cell.velocity.x = -cell.velocity.x;
            }
            if(cell.y - cell.height <= 0 || cell.y + cell.height >= 750){
                cell.velocity.y = -cell.velocity.y;
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
        if(count===3) {
            console.log("animation done");
            this.changeScene("external");
        }
    }
    

    cleanup(){
        //to do
        //Tween.removeAllTweens();
    }
    
}

interface DeadVirus extends MovieClip {
    isAbsorbed: boolean;
    velocity:PIXI.Point;
    isWall:boolean;
}

interface ImmuneCell extends MovieClip { 
    isHit:boolean;
    velocity:PIXI.Point;
}

interface InternalDeadVirusArt extends MovieClip {
    immune1: ImmuneCell;
    immune2: ImmuneCell;
    immune3: ImmuneCell;

    dead_virus1: DeadVirus;
    dead_virus2: DeadVirus;
    dead_virus3: DeadVirus;
    dead_virus4: DeadVirus;
    dead_virus5: DeadVirus;
}
