// import axios from 'axios';

// //url주소로 axios.post가 날라간다. export한 것을 호출할 수 있다.
// function registerUser(userData) {
//   const url = 'http://localhost:3000/signup';
//   //return: axios의 결과가 promise여서 return 해줘야 비동기 동작을 수행할 수 있음
//   //userData: userData를 함수인자로 받아서 post로 같이 넘긴다.
//   return axios.post(url, userData);
// }

// export { registerUser };
import axios from 'axios';

function registerUser(userData) {
  return axios.post('http://localhost:3000/signup', userData);
}

export { registerUser };
