import ButtonEncrypt from '../components/ButtonEncrypt';
import ButtonDecrypt from '../components/ButtonDecrypt';

export default function Buttons({
    text,
    rotation,
    language,
    setOutput,
}){
    return(
        <div>
            <section className="App-buttons">
                <ButtonEncrypt
                    text={text}
                    rotation={rotation}
                    language={language}
                    setOutput={setOutput}
                />
                <ButtonDecrypt />
            </section>
        </div>
    )
}