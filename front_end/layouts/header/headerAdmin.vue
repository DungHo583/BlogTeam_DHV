<template>
  <div class="content-header">
    <div class="content">
      <div class="left">
        <h3 class="text-title">Admin</h3>
      </div>
      <div class="right">
        <div class="content-user">content right</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content-header {
  height: 80px;
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      .text-title {
        margin-bottom: 0;
      }
    }
    // .right {
    // }
  }
}
</style>