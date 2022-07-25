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
    <button type="submit">login</button>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      //key:value
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('폼 제출');
      //userData객체를 넘겨줌
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      registerUser(userData);
    },
  },
};
</script>

<style></style>
