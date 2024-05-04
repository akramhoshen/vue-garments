<script setup>
import Brand from './Brand.vue';
import ProfileAction from './ProfileAction.vue';
import Dashboard from './menu/Dashboard.menu.vue';
import Buyer from './menu/Buyer.menu.vue';
import Country from './menu/Country.menu.vue';
import Order from './menu/Order.menu.vue';
import Merchandise from './menu/Merchandise.menu.vue';
import Bom from './menu/Bom.menu.vue';
import Purchase from './menu/Purchase.menu.vue';
import Inventory from './menu/Inventory.menu.vue';
import Vendor from './menu/Vendor.menu.vue';
import UOM from './menu/UOM.menu.vue';
import Department from './menu/Department.menu.vue';
import System from './menu/System.menu.vue';
import Logout from './menu/Logout.menu.vue';
</script>

<template>
  <nav id="sidebar" class="sidebar-wrapper">

<!-- App brand starts -->
    <Brand/>
<!-- App brand ends -->

<!-- Sidebar profile actions starts -->
    <ProfileAction/>
<!-- Sidebar profile actions ends -->

<!-- Sidebar menu starts -->
<div class="sidebarMenuScroll">
  <ul class="sidebar-menu">
    <Dashboard/>
    <Buyer/>
    <Country/>
    <Order/>
    <Merchandise/>
    <Bom/>
    <Purchase/>
    <Inventory/>
    <Vendor/>
    <UOM/>
    <Department/>
    <System/>
    <Logout/>
  </ul>
</div>
<!-- Sidebar menu ends -->

</nav>
</template>

<style scoped>

</style>