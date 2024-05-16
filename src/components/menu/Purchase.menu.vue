<script setup>

</script>

<template>
  <li class="treeview">
      <a href="#">
        <i class="bi bi-bag"></i>
        <span class="menu-text">Purchase</span>
      </a>
      <ul class="treeview-menu">
              <li>
                <RouterLink :to="{ name: 'Create Purchase'}">Create Purchase</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'Manage Purchase'}">Purchase</RouterLink>
              </li>
              <!-- <li>
                <a href="#">Purchase Details</a>
              </li> -->
              <li>
                <a href="#">Purchase Status</a>
              </li>
              
            </ul>

    </li>
</template>

<style scoped>
</style>