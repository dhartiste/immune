/// <reference types='pixi-sound' />
/// <reference types='pixi-animate' />
/// <reference types='springroll' />
import 'pixi.js';
import 'pixi-sound';
import 'pixi-animate';
import TemplateGame from './TemplateGame';
import * as Transition from './assets/Transition';
import { CONFIG } from './config/config';


const game = new TemplateGame({
    containerID: 'content',
    width:1624,
    height:750,
    altWidth:1050,
    transition: Transition.stage,
    

    

    
    springRollConfig: {
        features: {
            vo:true,
            sfx:true,
            music:true,
            captions:true
        }
    }
});

//for accessing game from the console at runtime:
(window as any).game = game;