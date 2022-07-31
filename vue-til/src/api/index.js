import axios from 'axios';

const instance = axios.create({
  //baseURL: 'http://localhost:3000/',
  baseURL: process.env.VUE_APP_API_URL,
});

//회원가입
function registerUser(userData) {
  //return: axios의 결과가 promise여서 return 해줘야 비동기 동작을 수행할 수 있음
  //userData: userData를 함수인자로 받아서 post로 같이 넘긴다.
  return instance.post('signup', userData);
}
//로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
