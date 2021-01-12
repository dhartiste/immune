import {Game} from 'wgbh-springroll-game';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import InternalScene from './scenes/InternalScene';
import AntibioticScene from './scenes/AntibioticScene';

export default class TemplateGame extends Game{

    gameReady(){
        this.addScenes({
            title: TitleScene,
            game: GameScene,
            antibiotic:AntibioticScene,
            internal: InternalScene,            
        });
        this.changeScene('title');
    }
}