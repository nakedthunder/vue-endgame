import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';

//플러그인을 실행하기위해서 초기화하기위해서 필요한 코드
Vue.use(VueRouter);

//인스턴스 export default 라우터의 인스턴스가 생성되면서
//라우팅 인스턴스가 밖으로 나가게하는게 export의 역할
export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
  ],
});
