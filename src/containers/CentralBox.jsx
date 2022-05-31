import InputText from '../components/InputText';
import InputRot from '../components/InputRot';
import InputLang from '../components/InputLang';
import OutputText from '../components/OutputText';
import { useEffect } from 'react';


export default function CentralBox({
    text,
    setText,
    rotation,
    setRotation,
    language,
    setLanguage,
    output,
})
{
    useEffect(() => console.log('central', {
        text,
        rotation,
        language,
        output
    }), [])
    return(
        <div>
            <section className="App-Box">
                <InputText
                    text={text}
                    setText={setText}
                />
                <InputRot
                    rotation={rotation}
                    setRotation={setRotation}
                />
                <InputLang
                    language={language}
                    setLanguage={setLanguage}
                />
                <OutputText output={output}/>
            </section>
        </div>
    )
}