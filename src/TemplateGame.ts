import {Game} from 'wgbh-springroll-game';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import External from './scenes/External';
import BacteriaScene from './scenes/InternalBacteriaScene';
import ExternalScene from './scenes/External';
import LiveVirusScene from './scenes/LiveVirusScene';
import ProteinInjectScene from './scenes/ProteinInjectScene';
import LibraryExample from './scenes/LibraryExampleScene';
import AntibioticScene from './scenes/AntibioticScene';


export default class TemplateGame extends Game{

    gameReady(){
        this.addScenes({
            title: TitleScene,
            game: GameScene,
            external:External,
            bacteria: BacteriaScene,
            liveVirus: LiveVirusScene,
            antibiotic: AntibioticScene,
            proteinInject: ProteinInjectScene,
            internal: InternalScene,
            library:LibraryExample         

        });
        //this.changeScene('external');
        this.changeScene('library');
    }
}