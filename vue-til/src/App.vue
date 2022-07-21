<template>
  <div>
    <header>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </header>
    <!-- url이 변경되었을때 페이지 컴포넌트가 뜨는 router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
