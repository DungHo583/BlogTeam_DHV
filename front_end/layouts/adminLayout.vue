<template>
  <main class="main-body">
    <div class="main-container">
      <!-- header admin -->
      <headerAdmin />
      <!-- content -->
      <div class="main-content">
        <div class="nav-content">
          <navAdmin />
        </div>
        <div class="body-content">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import headerAdmin from "./header/headerAdmin.vue";
import navAdmin from "./component/navigationAdmin.vue";

export default {
  components: {
    headerAdmin,
    navAdmin,
  },
};
</script>

<style lang="less" scoped>
.main-body {
  width: 100%;
  height: 100vh;
  .main-container {
    width: 100%;
    height: 100%;
    border-top: 2px solid #42b883;
    background-color: #f5f6fa;
    .main-content {
      width: 100%;
      display: flex;
      padding: 0 30px 0 20px;
      .nav-content {
        width: max-content;
        height: calc(100vh - 82px);
      }
      .body-content {
        width: calc(100% - 230px);
        height: calc(100vh - 82px);
        overflow-y: scroll;
        padding-left: 30px;
      }
      .body-content::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
      }
    }
  }
}
</style>