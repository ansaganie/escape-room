import axios from 'axios';
import { AXIOS_DEFAULT_CONFIG } from '../constants';

const api = axios.create(AXIOS_DEFAULT_CONFIG);

export default api;
