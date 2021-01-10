import {Game} from 'wgbh-springroll-game';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import InternalScene from './scenes/InternalScene';

export default class TemplateGame extends Game{

    gameReady(){
        this.addScenes({
            title: TitleScene,
            game: GameScene,
            internal: InternalScene
            
        });
        this.changeScene('title');
    }
}