import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

//플러그인을 실행하기위해서 초기화하기위해서 필요한 코드
Vue.use(VueRouter);

//인스턴스 export default 라우터의 인스턴스가 생성되면서
//라우팅 인스턴스가 밖으로 나가게하는게 export의 역할
export default new VueRouter({
  mode: 'history', //url의 #이 제거된다.
  routes: [
    //기본루트: 로그인
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // component: LoginPage, "코드스플리팅"
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    // 없는 페이지 나머지의 모든 url반응
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
