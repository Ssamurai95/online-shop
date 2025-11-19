// axios API configuration
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-backend-url/api', // Replace with your backend URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;