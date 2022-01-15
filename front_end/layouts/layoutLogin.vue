<template>
  <div class="view-login">
    <div class="layout-login">
      <div class="form-login">
        <Nuxt />
      </div>
    </div>
    <!-- notify -->
    <notifications position="top right" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.view-login {
  width: 100%;
  height: 100vh;
  .layout-login {
    width: 100%;
    height: 100%;
    background-image: url(/images/bg-login.webp);
    background-size: cover;
    background-position: center;
    .form-login {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>