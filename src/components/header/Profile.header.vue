<script setup>

</script>

<template>
<div class="dropdown ms-3">
    <a id="userSettings" class="dropdown-toggle d-flex py-2 align-items-center ps-3 border-start" href="#!"
      role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="d-none d-md-block me-2">Akram</span>
      <img src="/assets/images/profile-img.jpg" class="rounded-circle img-3x" alt="Bootstrap Gallery" />
    </a>
    <div class="dropdown-menu dropdown-menu-end shadow">
      <a class="dropdown-item d-flex align-items-center" href="profile.html"><i
          class="bi bi-person fs-4 me-2"></i>Profile</a>
      <a class="dropdown-item d-flex align-items-center" href="settings.html"><i
          class="bi bi-gear fs-4 me-2"></i>Account Settings</a>
      <a class="dropdown-item d-flex align-items-center" href="login.html"><i
          class="bi bi-escape fs-4 me-2"></i>Logout</a>
    </div>
  </div>
</template>

<style scoped>
</style>