import {Game} from 'wgbh-springroll-game';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import External from './scenes/External';
import InternalScene from './scenes/InternalScene';
import ExternalScene from './scenes/External';

export default class TemplateGame extends Game{

    gameReady(){
        this.addScenes({
            title: TitleScene,
            game: GameScene,
            external:External,
            internal: InternalScene
        });
        //this.changeScene('external');
        this.changeScene('title');
    }
}