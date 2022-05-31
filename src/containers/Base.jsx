import Names from '../components/Names';
import Buttons from '../containers/Buttons';
import Title from '../components/Title';
import CentralBox from '../containers/CentralBox'

export default function Base(){
    return(
        <div>
            <header className="App-header">
                <Title />
                <CentralBox />
                <Buttons />
            </header>
            <Names />
        </div>
    )
}