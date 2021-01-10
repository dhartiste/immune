import {Tween} from 'wgbh-springroll-game';

export default class Utils {
    static getDegreeToRadian(n:number) {
      return n * (Math.PI/180);
    }

    static getRandomNumber(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }
   
    static getRandomInt(min:number,max:number){
       return Math.floor(Math.random()*(max-min+1)+min );
    }
    static shuffleArray(o:Array<any>){
      let lastItem = o[o.length-1];        
      const newArr = o.slice();
      for (let i = newArr.length - 1; i > 0; i--) {
          const rand = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      //make sure first item of newly shuffled array isn't the same as the last item before shuffle
      const indx = Utils.getRandomInt(1,newArr.length-1);
      if(newArr[0] === lastItem) { 
          newArr.splice(0,1);
          newArr.splice(indx-1,0,lastItem);
      }
      
      return newArr;
    }

    static simpleButton = (mc: PIXI.animate.MovieClip | PIXI.Sprite, isActive:boolean = true)=>
    {
        mc.interactive = isActive;
        mc.buttonMode = isActive;
    }

    static buttonize = (mc: PIXI.animate.MovieClip, isActive:boolean = true)=>
    {
        mc.interactive = isActive;

        try {
            mc.buttonMode = isActive;
            mc.gotoAndStop(0);
            mc.on('pointerover', (ev:PIXI.interaction.InteractionEvent) => {
                (ev.currentTarget as PIXI.animate.MovieClip).gotoAndStop(1);
            } );
            mc.on('pointerout', (ev:PIXI.interaction.InteractionEvent) => {
                (ev.currentTarget as PIXI.animate.MovieClip).gotoAndStop(0);
            } );
            mc.on('pointerdown', (ev:PIXI.interaction.InteractionEvent) => {
                (ev.currentTarget as PIXI.animate.MovieClip).gotoAndStop(2); 
            } );
            mc.on('pointerup', (ev:PIXI.interaction.InteractionEvent) => {
                (ev.currentTarget as PIXI.animate.MovieClip).gotoAndStop(0);
            } );
            mc.on('pointerupoutside', (ev:PIXI.interaction.InteractionEvent) => {
                (ev.currentTarget as PIXI.animate.MovieClip).gotoAndStop(0);
            } );

        } catch (e) {
            console.warn(mc.name + " is not a MovieClip , error: " + e );
        } 
    }

    static capitalize(word:string) 
    {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    static pulseIcon = (mc:PIXI.animate.MovieClip | PIXI.Sprite, isActive:boolean=true, loop:number=0, scale:number = 1.4, speed:number=500, shrinktostart:boolean=false) => {

        //take mc/sprite's original scale into account
        let origScaleX:number = mc.scale.x;
        let origScaleY:number = mc.scale.y;
        let toScale:number = scale;
  
        if (!isActive)
        {
            Tween.removeTweens(mc.scale);
  
            mc.scale.x = origScaleX;
            mc.scale.y = origScaleY;
  
            return;
        }
  
        let width:number = mc.width;
        let height:number = mc.height;
  
        if (shrinktostart) {
            mc.scale.x = 0;
            mc.scale.y = 0;
        }
  
        Tween.get(mc.scale, {override:true, loop: loop})
        .to({x:origScaleX*toScale, y:origScaleY*toScale}, speed, 'quadOut')
        .to({x:origScaleX*1.0, y:origScaleY*1.0}, speed, 'quadIn');
    }
  
    // rock back and forth
    static wiggleRock(item: PIXI.DisplayObject, unlimited: boolean = false): Tween {
        let amount: number = Math.PI * 0.1;

        // just a few a shakes
        if (!unlimited) {
            let twObj = Tween.get(item, { override: true }).to({ rotation: amount }, 100, 'sineOut');
            for (let i: number = 0; i < 2; i++) {
                twObj.to({ rotation: -amount }, 200, 'sineInOut').to({ rotation: amount }, 200, 'sineInOut');
            }
            return twObj.to({ rotation: 0 }, 100, 'sineIn');
        }
        // keep going!
        else {
            return Tween.get(item, { override: true, loop: Infinity })
                .to({ rotation: amount }, 200, 'sineOut')
                .to({ rotation: -amount }, 400, 'sineInOut')
                .to({ rotation: 0 }, 200, 'sineIn');
        }
    }

    static consoleLog (message?: any, ...optionalParams: any[]):void {
        return;
        console.log(message, optionalParams);
    }
}