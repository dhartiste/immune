import {Scene, Tween, PauseableTimer} from 'wgbh-springroll-game';
import { MovieClip } from 'pixi-animate';
import { PointLike } from 'pixi.js';
import { MICROORGANISM_INDEX } from '../helpers/Const';

export default class BaseScene extends Scene {

   protected resize_elements:Array<{mc:MovieClip | PIXI.Sprite,x:number,iDir:number}> = new Array();
   addResizeElement = (mc:MovieClip | PIXI.Sprite, iDir:number=1) =>
   {
       this.resize_elements.push({mc:mc, x:mc.x, iDir:iDir});

       // mc: the object you want to place
       // x: derived initial x position of the object
       // iDir: Left or Right side. -1 for right, 1 for left
   }
   resize(width:number,height:number,offset:PointLike){

      this.resize_elements.forEach((item) => {
         item.mc.x = item.x + item.iDir * this.stageManager.viewFrame.value.left;
      });
      super.resize(width,height,offset);
   }

   // **************************
   // GETTERS AND SETTERS
   // **************************

   get gameData():GameData{
      if(!this.dataStore.gameData){
         this.dataStore.gameData = {
            currentChoice: 'none',
            currentAct : 0,
            completedOrgs : [false,false,false,false,false],
            currentChoiceIndex : -1
         };
      }
      return this.dataStore.gameData;
   }

   // **************************
   // END GETTERS AND SETTERS
   // **************************

}

export type MicroOrganism = 'none' | 'bacteria' | 'protein'| 'liveVirus' | 'deadVirus' | 'attenuateVirus';

export interface GameData {
   currentChoice : MicroOrganism;
   currentChoiceIndex : number;
   currentAct : number;
   completedOrgs: boolean[];
}