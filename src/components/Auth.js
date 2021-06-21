const CryptoJS = require("crypto-js");

async function getAuth(){

    const computedHash = CryptoJS.HmacMD5(`https://sandbox-authservice.priaid.ch/login`, password);
    const computedHashString = computedHash.toString(CryptoJS.enc.Base64);
    const response = await fetch(`https://sandbox-authservice.priaid.ch/login`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${user_id}:${computedHashString}`
        }
    }).then(data => data.json()).catch(error => error);

    return response.Token ;
}

export default getAuth;