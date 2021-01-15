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

   sceneEnded(currentAct:number, organism: string, choice:string) {
      // to do
      // switch to currect scene based on current act and choice
      // update current act
      this.gameData.currentAct++;
      if (currentAct===1){
         // to do - change to specific internal scene based on organism
         this.changeScene("internal");
      }
      if (organism === 'bacteria') {
         if (currentAct===2) {
            this.changeScene('external');
         }
         if (currentAct===3) {
            if(choice==='left') {
               this.changeScene('antibiotic');
            }
            if(choice==='right') {
               currentAct=6;
            }
         }
         if (currentAct===4) {
            // to do - change to specific internal scene for Act 5
               this.changeScene('internal');
            
         }
         if (currentAct===5) {
            // to do - change to sick to healthy
            this.changeScene('external');
         }
         if (currentAct===6) {
            this.changeScene('game');
         }

      }
      if (organism === 'virus_alive') {
         if (currentAct===2) {
            this.changeScene('external');
         }
         if (currentAct===3) {
            // to do - change to sick to healthy
            this.changeScene('external');
         }
         if (currentAct===4) {
            this.changeScene('game');
         }
      }
      if (organism === 'protein') {
         if (currentAct===2) {
            this.changeScene('external');
         }
         if (currentAct===3) {
            if(choice==='left') {
               // to do - expose to bacteria scene
               this.changeScene('antibiotic');
            }
            if(choice==='game') {
               currentAct=6;
            }
         }
         if (currentAct===4) {
            // to do - change to specific internal scene for Act 5
               this.changeScene('internal');
         }
         if (currentAct===5) {
            // to do - change to specific external scene for Act 6
            this.changeScene('external');
         }
         if (currentAct===6) {
            this.changeScene('game');
         }

      }
      if (organism === 'virus_attenuated') {
         if (currentAct===2) {
            this.changeScene('external');
         }
         if (currentAct===3) {
            if(choice==='left') {
               // to do - expose to virus scene
               this.changeScene('antibiotic');
            }
            if(choice==='game') {
               currentAct=6;
            }
         }
         if (currentAct===4) {
            // to do - change to specific internal scene for Act 5
               this.changeScene('internal');
         }
         if (currentAct===5) {
            // to do - change to specific external scene for Act 6
            this.changeScene('external');
         }
         if (currentAct===6) {
            this.changeScene('game');
         }
      }
      if (organism === 'virus_dead') {
         if (currentAct===2) {
            this.changeScene('external');
         }
         if (currentAct===3) {
            if(choice==='left') {
               // to do - second virus scene
               this.changeScene('antibiotic');
               this.gameData.virusHalfVaccinated = true;
            }
            if(choice==='game') {
               // to do - change to expose to virus scene
               this.changeScene('antibiotic');
            }
         }
         if (currentAct===4) {
            if(this.gameData.virusHalfVaccinated===true) {
               // to do - internal scene if child is vaccinated
               this.changeScene('internal');
            } 
            else {
               // to do - internal scene if child not vaccinated
               this.changeScene('internal');
            }
         }
         if (currentAct===5) {
            if(this.gameData.virusHalfVaccinated===true) {
               // to do - change to external scene if child is vaccinated
               if(choice==="left") {
                  this.changeScene('external');
               }
               if(choice==="right") {
                  this.changeScene('game');
               }
            }
            else {
               // to do - change to external scene if child not vaccinated
               this.changeScene('game');
            }
         }
         if (currentAct===6) {
            // to do - change to expose to virus scene
            this.changeScene('antibiotic');
         }
         if (currentAct===7) {
            // to do - change to internal scene for this specific instance
            this.changeScene('internal');
         }
         if (currentAct===8) {
            // to do - sick to healthy
            this.changeScene('external');
         }
         if (currentAct===9) {
            this.changeScene('game')
         }

      }
      
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
            currentChoiceIndex : -1,
            buttonChoice : 'none',
            virusHalfVaccinated : false,
         };
      }
      return this.dataStore.gameData;
   }
   

   // **************************
   // END GETTERS AND SETTERS
   // **************************

}

export type MicroOrganism = 'none' | 'bacteria' | 'protein'| 'virus_alive' | 'virus_dead' | 'virus_attenuated';
export type patientChange = 'healthyToSick' | 'sickToBed' | 'bedToHealthy';
export type Choice = 'left' | 'right';

export interface GameData {
   currentChoice : MicroOrganism;
   currentChoiceIndex : number;
   currentAct : number;
   completedOrgs: boolean[];
   externalLabels:patientChange;
   buttonChoice : Choice;
   virusHalfVaccinated : boolean;
}