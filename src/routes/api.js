import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = async (username, password) => {
  try {
    const response = await API.post('/auth/login', { username, password });
    return response.data; // { token, role }
  } catch (error) {
    throw error.response.data.message;
  }
};
