import { MovieClip } from 'pixi-animate';
import { AssetList } from 'wgbh-springroll-game';
import * as LibraryExampleArt from '../assets/LibraryExample';
import BaseScene from './BaseScene';

export default class LibraryExampleScene extends BaseScene {

    private exampleLib:any;
    private macrophageArray: Organism[] = [];
    private proteinArray: Organism[] = [];
    
    preload():AssetList{
        return [
            {type:'animate', id:'libraryExampleArt', stage:LibraryExampleArt.stage, cacheInstance:true},
            {type:'sound', id:'sfx_star', path:'./sounds/sfx_star.{mp3}', volume:1.0, context: 'sfx'},
        ];
    }

    setup(){

        this.exampleLib = LibraryExampleArt.library;
        // notice that I did not add the Animate stage here, so initially there is nothing on the canvas!

        // I will create a rectangle out of thin air for a bg:
        const background = new PIXI.Graphics();
        background.beginFill(0XFFFFCC);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);

        // ******************************************************************************
        // create a couple Macrophagies from the Library:

        // Note: use the Library name (macro_bacteria) in Animate, not the instance name!!! This is different from using the objects that are on the stage
        // Note: There still needs to be 1 instance of the object on the stage so that it is exported in the Library
        // Then you can add as many as you want from the Library

        let macro1= new this.exampleLib.macro_bacteria() as Organism; 
        macro1.position = new PIXI.Point(500, 200);
        macro1.gotoAndStop(0);
        macro1.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        let macro2 = new this.exampleLib.macro_bacteria() as Organism; 
        macro2.position = new PIXI.Point(300, 300);
        macro2.gotoAndStop(0);
        macro2.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        let macro3 = new this.exampleLib.macro_bacteria() as Organism; 
        macro3.position = new PIXI.Point(350, 500);
        macro3.gotoAndStop(0);
        macro3.velocity = new PIXI.Point(Math.random()*.5, Math.random()*.5);
        this.addChild(macro1, macro2, macro3);
        this.macrophageArray.push(macro1);
        this.macrophageArray.push(macro2);
        this.macrophageArray.push(macro3);

        // great, now we have our array of Macrophage and can operate on them like before
        // ******************************************************************************


        // ******************************************************************************
        // Now, let's make a whole bunch of proteins: 
        // But if we want to make 100 then who wants to create all those variables?
        // Yes, we can write much more concise code!!!
        
        for (let index = 0; index < 100; index++) {
            this.proteinArray.push(new this.exampleLib.protein() as Organism); // library name (protein) just happened to be the same as the stage instance name!
        }

        this.proteinArray.forEach((protein,index)=> {
            protein.position = new PIXI.Point(700+500*Math.random(), 100+500*Math.random());
            protein.gotoAndStop(0);
            protein.velocity = new PIXI.Point(Math.random()-1, Math.random());
            this.addChild(protein);
        });

        // BAM, now we have our array of 100 proteins and can operate on them like before
        // ******************************************************************************

        
        // ******************************************************************************
        // And now for a Coda, put in some sound. Would be nice if this happened on iHit!
        // But for now put it on a click event

        this.macrophageArray.forEach(macrophage => {
            macrophage.interactive = true;
            macrophage.buttonMode = true;
            macrophage.on("pointerdown",(ev)=>{
                this.sound.play("sfx_star");
                PIXI.animate.Animator.play(ev.currentTarget as Organism,"intro");
            });
        });

    }

    start(){
        // todo
    }

    update(){
        this.macrophageArray.forEach(macrophage => {
            macrophage.x+=macrophage.velocity.x;
            macrophage.y+=macrophage.velocity.y;
        });

        this.proteinArray.forEach(protein => {
            protein.x+=protein.velocity.x;
            protein.y+=protein.velocity.y;
        });

        // I didn't put in the hit test here but it would be the same as before
    }

    cleanup(){
        //to do
    }
}

interface Organism extends MovieClip {
    isHit:boolean;
    velocity:PIXI.Point;
}