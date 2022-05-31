import {useState, useEffect} from 'react';
import { encrypt } from '../helpers/encrypt'

export default function ButtonEncrypt({
    text,
    rotation,
    language,
    setOutput,
}) {
    const onClickEncript = () => {
        encrypt(language === 'eng', text, rotation)
            .then((encrypted) => setOutput(encrypted))
            .catch(console.warn)
    }

    return (
        <div>
            <button name="encrypt" className="button" onClick={onClickEncript}>Encrypt</button>
        </div>
    );
}