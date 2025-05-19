import axios from 'axios';

const API = axios.create({ baseURL: 'https://attendence-login-1-o.onrender.com' });

export const login = async (username, password) => {
  try {
    const response = await API.post('/auth/login', { username, password });
    return response.data; // { token, role }
  } catch (error) {
    throw error.response.data.message;
  }
};

