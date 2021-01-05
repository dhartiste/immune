import { Scene, AssetList, Tween } from 'wgbh-springroll-game';

export default class TitleScene extends Scene {

    
    private btnPink: PIXI.Sprite;

    preload():AssetList{
        return [
            
            {type:'image', id:'btn_pink', path:'img/btn_pink.png'},
            
        ];
    }

    setup(){
        let i:number;
        const background = new PIXI.Graphics();
        background.beginFill(0xDDDDDD);
        background.drawRect(0, 0, 1624, 750);
        background.endFill();
        this.addChild(background);

        
        this.btnPink = new PIXI.Sprite(this.cache.images.btn_pink);
    


        // recipe for an object that has interactivity and two states

        /*
            0. load 2 gfx, states: off and pressed
            1. make a container
            2. add the 2 gfx to the container
            3. put the interactivity on the container (instead of on Sprite)
            4. toggle the vis of the gfx on user input
            5. add click sound
        */

        // let c:PIXI.Container;
        // c.addChild(this.btnPink);

        //////


        
        this.btnPink.y = 500;
        this.btnPink.x = 500;
        
        this.addChild(this.btnPink);

        this.btnPink.once("pointerdown",()=>{
            // todo
            console.log("Pink button pressed");
            this.changeScene("game");
        });
       

        // this.simpleButton(this.btnPink);
        // this.simpleButton(this.btnYellow);
        // this.simpleButton(this.btnBlue);

        this.resize();
    }

    start(){



        this.btnPink.buttonMode = true;
        this.btnPink.interactive = true;
        



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