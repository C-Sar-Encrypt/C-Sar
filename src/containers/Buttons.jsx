import ButtonEncrypt from '../components/ButtonEncrypt';
import ButtonDecrypt from '../components/ButtonDecrypt';

export default function Buttons(){
    return(
        <div>
            <section className="App-buttons">
                <ButtonEncrypt />
                <ButtonDecrypt />
            </section>
        </div>
    )
}