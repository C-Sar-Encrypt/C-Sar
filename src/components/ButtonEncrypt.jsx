import { encrypt } from '../helpers/encrypt'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ButtonEncrypt({
    text,
    rotation,
    language,
    setOutput,
}) {

    const notify = (error) => toast(`${error}!`);

    const onClickEncript = () => {
        encrypt(language === 'eng', text, rotation)
            .then((encrypted) => setOutput(encrypted))
            .catch((error) => notify(error))
    } 

    return (
        <div>
            <button className="button" onClick={onClickEncript}>Encrypt</button>
            <ToastContainer />
        </div>
    );
}