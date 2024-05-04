<script setup>

</script>

<template>
  <ul class="profile-actions d-lg-flex d-none">
    <li>
      <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip-success" data-bs-title="Settings">
        <i class="bi bi-gear fs-4"></i>
      </a>
    </li>
    <li>
      <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip-success" data-bs-title="Profile">
        <i class="bi bi-person-square fs-4"></i>
      </a>
    </li>
    <li>
      <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip-success" data-bs-title="Notifications">
        <i class="bi bi-bell fs-4"></i>
        <span class="count-label"></span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
ul.profile-actions>li {
    border: 0;
}
</style>