import { MovieClip } from 'pixi-animate';
import { Rectangle } from 'pixi.js';
import { Scene, AssetList, PauseableTimer } from 'wgbh-springroll-game';
import * as GameArt from '../assets/Game';
import DragManager from '../helpers/DragManager';

export default class GameScene extends Scene {

    private art: Art;
    private dragManager:DragManager;
    
    preload():AssetList{
        return [
            {type:'animate', id:'gameArt', stage:GameArt.stage, cacheInstance:true},
            
        ];
    }

    setup(){
        this.art = this.cache.animations.gameArt as Art;
        // this.art.remote.button.gotoAndStop(0);
        // this.art.screen.gotoAndStop(0);
        this.addChild(this.art);
    }

   

    start(){
        this.interactive = true;
        this.interactiveChildren = true;
        this.dragManager = new DragManager(this, this, new Rectangle(312, 0, 1000, 750) , this.onStartDrag, this.onEndDrag, this.onStickySelect);
        this.dragManager.addObject(this.art.protein);
        this.dragManager.addObject(this.art.bacteria);
        this.dragManager.addObject(this.art.virus_alive);
        this.dragManager.addObject(this.art.virus_attenuated);
        this.dragManager.addObject(this.art.virus_dead);

    }

    onStartDrag =(object:MovieClip)=>{
        console.log(object.name, "this is the name of the thing");
    }
    onEndDrag =()=>{
<<<<<<< Updated upstream
    //to do
        // if not on top || collides with girl or syringe, move back to original position
        // if on girl 
        // current_microorg = "bacteria";
        // changeScene -> Internal();

=======
        this.isDragging = false;
        this.objDragging = null;
        
       if (this.gameData.currentChoice === "bacteria" || this.gameData.currentChoice === "virus_alive") {
            console.log(this.gameData.currentChoice);
             if (this.isHitGirl) {
                 // go to the next scene
                 console.log("go to the scene for... ", );
                 this.changeScene("liveVirus");
                 //this.changeScene('external');
                 //this.changeScene("antibiotic");
             }
        }
        if (this.gameData.currentChoice === "protein" || this.gameData.currentChoice === "virus_attenuated" || this.gameData.currentChoice === "virus_dead"){ 
            console.log(this.gameData.currentChoice);
             if (this.isHitSyringe && this.gameData.currentChoice === "protein") {
                 console.log("syringe: go to scene for...");
                 this.changeScene("proteinInject");
             } else if (this.isHitSyringe && this.gameData.currentChoice === "virus_dead"){
                this.changeScene("deadVirus");
             }
        }
>>>>>>> Stashed changes
    }
    onStickySelect =()=>{
    //to do
    }

    update(){
        this.dragManager.update();
        // for each MO, check if over girl and check if over syringe
        // if over g, highlight g

    }

    cleanup(){
    //to do
    }
}

interface Art extends PIXI.animate.MovieClip {
    // remote: PIXI.animate.MovieClip & {
    //     button: PIXI.animate.MovieClip;
    // };
    // screen: PIXI.animate.MovieClip;
    // lipsyncScene: PIXI.animate.MovieClip;
    bacteria:PIXI.animate.MovieClip;
    protein:PIXI.animate.MovieClip;
    virus_alive:PIXI.animate.MovieClip;
    virus_attenuated:PIXI.animate.MovieClip;
    virus_dead:PIXI.animate.MovieClip;
}