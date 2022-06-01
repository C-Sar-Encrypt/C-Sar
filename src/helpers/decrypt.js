import backend from '../env';

export const decrypt = (
    isEnglish,
    text,
    rot,
) => new Promise((resolve, reject) => {
    fetch(`${backend}/decrypt/${isEnglish ? 'eng' : 'esp'}`, {
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
            return ('decrypt' in result) ? resolve(result.decrypt) : reject(result.error)
        })
        .catch(reject);
});
