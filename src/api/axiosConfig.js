import axios from 'axios';

export default axios.create({
    baseURL:'http://3.137.178.136:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
