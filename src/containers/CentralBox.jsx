import InputText from '../components/InputText';
import InputRot from '../components/InputRot';
import InputLang from '../components/InputLang';
import OutputText from '../components/OutputText';


export default function CentralBox(){
    return(
        <div>
            <section className="App-Box">
                <InputText />
                <InputRot />
                <InputLang />
                <OutputText />
            </section>
        </div>
    )
}