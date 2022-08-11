import axios from 'axios';
import store from '../store';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  //HTTP헤더에 이미 정의되어있는 스팩
  //요청을 할때마다 수행이 되서 값이 붙어서 간다.
  headers: {
    Authorization: 'store.state.token',
  },
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
