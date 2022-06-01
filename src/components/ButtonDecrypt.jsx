import { decrypt } from '../helpers/decrypt'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ButtonEncrypt({
    text,
    rotation,
    language,
    setOutput,
}) {

    const notify = (error) => toast(`${error}!`);

    const onClickDecript = () => {
        decrypt(language === 'eng', text, rotation)
            .then((encrypted) => setOutput(encrypted))
            .catch((error) => notify(error))
    } 

    return (
        <div>
            <button className="button" onClick={onClickDecript}>Decrypt</button>
            <ToastContainer />
        </div>
    );
}