<script setup>
import HeadBrand from './header/Brand.header.vue'
import Search from './header/Search.header.vue'
import Notify from './header/Notify.header.vue'
import Setting from './header/Setting.header.vue'
import Profile from './header/Profile.header.vue'
import Toggle from './header/Toggle.header.vue'
</script>

<template>
<div class="app-header d-flex align-items-center">

  <!-- Toggle buttons start -->
    <Toggle/>
  <!-- Toggle buttons end -->

  <!-- App brand sm start -->
    <HeadBrand/>
  <!-- App brand sm end -->

  <!-- App header actions start -->
  <div class="header-actions">
    <Search/>
    <Notify/>
    <Setting/>
    <Profile/>
  </div>
  <!-- App header actions end -->

</div>
</template>

<style scoped>
</style>