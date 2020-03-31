// https://stackoverflow.com/q/60941797/274677
import axios from 'axios';

const axios2 = axios.create();

axios2.interceptors.request.use(config => {
    throw '42';
}, error => {
    console.log('this never gets printed');
    throw '43';
});




axios2.get('www.google.com')
    .then(res=>console.log('res: '+res))
    .catch(err=>console.log('error: '+err));
