<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input ud="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <!-- submit 이벤트 -->
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      //form value
      username: '',
      password: '',
      nickname: '',
      //log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('폼 제출');
      //userData객체를 넘겨줌
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      //registerUser(userData);
      const { data } = await registerUser(userData);
      console.log(data.username);
      //로그메세지 + ES6 백틱
      this.logMesage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      //타입이 없으므로 null도 가능하지만 견고한건 null
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
