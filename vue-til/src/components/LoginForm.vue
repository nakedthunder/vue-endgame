<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from 'axios';
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      //input이 필요함 v-model연동
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };

      //여기서 axios.post는 뭘까
      //1. userData객체를 넘기고 loginUser만듬 api에 호출을 해야한느데
      axios.post();
    },
  },
};
</script>

<style></style>
