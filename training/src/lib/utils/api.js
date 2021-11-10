import axios from 'axios';
const loginUrl = '/api/user/login';

const apiCall = async (userData) => {
  return axios
    .post(loginUrl, userData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export default apiCall;
