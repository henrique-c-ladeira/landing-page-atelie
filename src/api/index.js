import axios from 'axios';

const api = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/ateliedepropaganda/register/1.0.0',
});

export const signUpRequest = async (body) => {
  try {
    await api.post('/costumer', body);
    return true;
  } catch (err) {
    return false;
  }
};

export default api;
