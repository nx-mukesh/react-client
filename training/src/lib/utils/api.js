// import React from 'react';
import axios from 'axios';

const callApi = () => {
  const url = 'https://express-training.herokuapp.com/api/user/login';
  const data = axios
    .get(url)
    .then((res) => console.log(res))
    .catch((errors) => {
      console.log(errors);
    });
  console.log(data);
};

callApi();
