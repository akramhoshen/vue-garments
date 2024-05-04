<script>
  import { getCurrentPath } from '@/utils/routerUtils';
  
  export default {
    data() {
      return {
        currentPath: getCurrentPath()
      };
    }
  };
</script>

<template>
    <div class="app-hero-header d-flex align-items-start">
      <ol class="breadcrumb d-none d-lg-flex align-items-center">
        <li class="breadcrumb-item">
          <i class="bi bi-house"></i>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="breadcrumb-item" aria-current="page">{{ currentPath }}</li>
      </ol>
    </div>
</template>

<style scoped>
li.breadcrumb-item a {
    background: transparent!important;
    color: #2c3e50!important;
    border: none!important;
}
</style>