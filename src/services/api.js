import axios from 'axios';

export const instance = await axios.create({ baseURL: 'http://localhost:8080/people' });
