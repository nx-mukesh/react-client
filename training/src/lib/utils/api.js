import axios from 'axios';
const loginUrl = '/api/user/login';


const apiCall = (userData) => {
  axios.post(loginUrl, userData).then((response)=>{
    console.log(response)
    return response
  }).catch((error)=>{
    console.log(error)
    return error
  })
}