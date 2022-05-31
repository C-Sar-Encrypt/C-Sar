import backend from '../env';
import {useState, useEffect} from 'react';

export default function ButtonEncrypt(props) {

    /*const text = props.text;
    const rot = props.rotation;
    const lang = props.language;*/

    const text = 'Holis';
    const rot = 3;
    const lang = 'spanish';

    const [output, setOutput] = useState('Encrypt or Decrypt your messages!');

    const encryptSpanish = () => {

        fetch(`${backend}/encrypt/esp`,{
            method: 'POST',
            body: JSON.stringify({ 
                "text" : text, 
                "base" : rot
            }),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then((response) =>response.json())
        .then((result) => {
            setOutput(result.encrypt);
        })
        .catch((err) => console.log(err));
    };

    const encryptEnglish = () => {

        fetch(`${backend}/encrypt/eng`,{
            method: 'POST',
            body: JSON.stringify({ 
                "text" : text, 
                "base" : rot
            }),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then((response) => response.json())
        .then((result) => {
            setOutput(result.encrypt);
        })
        .catch((err) => console.log(err.error));
    };

    const onClickEncript = (lang) => {
        (lang === 'spanish') ? encryptSpanish() : encryptEnglish();
    }

    useEffect(() => {
        console.log(output);
    }, [output])

    return (
        <div>
            <button name="encrypt " className="button" onClick={() => onClickEncript(lang)}>Encrypt</button>
        </div>
    );
}