<script setup>
import { ref, onMounted } from 'vue';
import { Cookie } from '@/utils/cookie.js';
import Master from '@/views/Master.vue'
import Login from './views/Login.vue';

const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = Cookie.getCookie('token') !== '';
});
</script>

<template>
  <div>
    <!-- if user logged in -->
    <div v-if="isLoggedIn">
      <Master />
    </div>
    <!-- Otherwise login page -->
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<style scoped>

</style>
<style>
.main-container {
  background: #28256d!important;
}
a.router-link-active {
  color: #fff!important;
  background: #383588!important;
  border-left-color: #d63384!important;
}
.my-primary-btn {
  background: #28256d;
  border-color: #28256d;
  font-weight: 500;
  font-size: 14px;
}
.my-primary-btn:hover {
  background: #28256d;
  border-color: #28256d;
}
</style>
