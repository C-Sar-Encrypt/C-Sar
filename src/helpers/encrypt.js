import backend from '../env';

export const encrypt = (
    isEnglish,
    text,
    rot,
) => new Promise((resolve, reject) => {
    fetch(`${backend}/encrypt/${isEnglish ? 'eng' : 'esp'}`, {
        method: 'POST',
        body: JSON.stringify({
            "text": text,
            "base": rot
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then((response) => response.json())
        .then((result) => {
            return ('encrypt' in result) ? resolve(result.encrypt) : reject(result.error)
        })
        .catch(reject);
});
