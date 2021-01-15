import {Game} from 'wgbh-springroll-game';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
<<<<<<< Updated upstream
=======
import External from './scenes/External';
import BacteriaScene from './scenes/InternalBacteriaScene';
import ExternalScene from './scenes/External';
import LiveVirusScene from './scenes/LiveVirusScene';
import ProteinInjectScene from './scenes/ProteinInjectScene';
import LibraryExample from './scenes/LibraryExampleScene';
import AntibioticScene from './scenes/AntibioticScene';
import DeadVirusScene from './scenes/DeadVirusScene';

>>>>>>> Stashed changes

export default class TemplateGame extends Game{

    gameReady(){
        this.addScenes({
            title: TitleScene,
<<<<<<< Updated upstream
            game: GameScene
            
        });
        this.changeScene('title');
=======
            game: GameScene,
            external:External,
            bacteria: BacteriaScene,
            liveVirus: LiveVirusScene,
            antibiotic: AntibioticScene,
            proteinInject: ProteinInjectScene,
            library: LibraryExample, 
            deadVirus: DeadVirusScene,      

        });
        //this.changeScene('external');
        this.changeScene('game');
>>>>>>> Stashed changes
    }
}