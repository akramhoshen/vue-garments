<script setup>
import { onMounted } from 'vue';
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { initializeJS } from '@/utils/globalInit.js';

onMounted(() => {
  initializeJS();
});
</script>

<template>
  <div class="page-wrapper">
    <!-- Main container start -->
    <div class="main-container">
      <!-- Sidebar wrapper start -->
      <SideBar/>
      <!-- Sidebar wrapper end -->

      <!-- App container starts -->
      <div class="app-container">
        <!-- App header starts -->
        <Header/>
        <!-- App header ends -->

        <!-- App body starts -->
        <RouterView />
        <!-- App body ends -->

        <!-- App footer start -->
        <Footer/>
        <!-- App footer end -->
      </div>
      <!-- App container ends -->
    </div>
    <!-- Main container end -->
  </div>
</template>

<style scoped>

</style>
