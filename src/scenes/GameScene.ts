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
    //to do
    }
    onStickySelect =()=>{
    //to do
    }

    update(){
        this.dragManager.update();
    }

    cleanup(){
    //to do
    }
}

interface Art extends PIXI.animate.MovieClip {
    bacteria:PIXI.animate.MovieClip;
    protein:PIXI.animate.MovieClip;
    virus_alive:PIXI.animate.MovieClip;
    virus_attenuated:PIXI.animate.MovieClip;
    virus_dead:PIXI.animate.MovieClip;
}