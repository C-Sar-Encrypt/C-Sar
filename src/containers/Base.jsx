import React, {useEffect, useState} from 'react';
import Names from '../components/Names';
import Buttons from '../containers/Buttons';
import Title from '../components/Title';
import CentralBox from '../containers/CentralBox'

export default function Base() {
    const [text, setText] = useState('');
    const [rotation, setRotation] = useState(3);
    const [language, setLanguage] = useState('eng');
    const [output, setOutput] = useState('Encrypt or Decrypt your messages!');

    useEffect(() => console.log({
        output
    }), [output])

    return(
        <div>
            <header className="App-header">
                <Title />
                <CentralBox
                    text={text}
                    setText={setText}
                    rotation={rotation}
                    setRotation={setRotation}
                    language={language}
                    setLanguage={setLanguage}
                    output={output}
                />
                <Buttons
                    text={text}
                    rotation={rotation}
                    language={language}
                    setOutput={setOutput}
                />
            </header>
            <Names />
        </div>
    )
}