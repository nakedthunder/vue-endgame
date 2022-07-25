<template>
  <div>
    <AppHeader></AppHeader>
    <!-- url이 변경되었을때 페이지 컴포넌트가 뜨는 router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
  //컴포넌츠를 임포트로 들고와서 등록을 해준다.
  components: {
    AppHeader,
  },
};
</script>

<style></style>
