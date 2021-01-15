import {Game} from 'wgbh-springroll-game';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import BacteriaScene from './scenes/InternalBacteriaScene';
import ExternalScene from './scenes/External';
import LiveVirusScene from './scenes/LiveVirusScene';
import ProteinInjectScene from './scenes/ProteinInjectScene';
import LibraryExample from './scenes/LibraryExampleScene';
import AntibioticScene from './scenes/AntibioticScene';
import DeadVirusScene from './scenes/DeadVirusScene';


export default class TemplateGame extends Game{

    gameReady(){
        this.addScenes({
            title: TitleScene,
            game: GameScene,
            external:ExternalScene,
            bacteria: BacteriaScene,
            liveVirus: LiveVirusScene,
            antibiotic: AntibioticScene,
            proteinInject: ProteinInjectScene,
            deadVirus: DeadVirusScene,
            library:LibraryExample,      
            internal: BacteriaScene      
        });
        this.changeScene('title');
    }
}