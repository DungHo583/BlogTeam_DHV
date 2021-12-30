<template>
  <div class="nav-admin">
    <div class="title-menu">
      <h3 class="text-title">Blog Team</h3>
    </div>
    <div class="hr-line"></div>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Dashboard</span>
      </a-menu-item>
      <!--  -->
      <a-menu-item key="2">
        <a-icon type="folder" />
        <span>Danh mục</span>
      </a-menu-item>
      <!--  -->
      <a-menu-item key="3">
        <a-icon type="file-text" />
        <span>Bài viết</span>
      </a-menu-item>
      <!--  -->
      <a-menu-item key="4">
        <a-icon type="form" />
        <span>Tác giả</span>
      </a-menu-item>
      <!--  -->
      <a-menu-item key="5">
        <a-icon type="snippets" />
        <span>Thẻ tag</span>
      </a-menu-item>
      <!--  -->
      <a-menu-item key="6">
        <a-icon type="user" />
        <span>Tài khoản</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.nav-admin {
  height: 100%;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.15);
  width: 230px;
}
</style>
<style lang="less">
.nav-admin {
  .ant-menu {
    height: calc(100% - 70px);
    background: linear-gradient(0deg, #389466 0%, #42b883 100%);
    color: rgba(255, 255, 255, 0.8);
    .ant-menu-item {
      margin-top: 10px;
      margin-bottom: 15px;
    }
    .ant-menu-item:last-child {
      margin-bottom: 0;
    }
    .ant-menu-item::after {
      border-color: #fff;
    }
    .ant-menu-item-selected {
      color: #fff;
      background-color: transparent;
    }
    .ant-menu-item-active {
      color: #fff;
    }
  }
  .title-menu {
    height: 70px;
    display: flex;
    align-items: center;
    background: #42b883;
    padding: 8px 12px 16px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .text-title {
      margin-bottom: 0;
      font-weight: normal;
      color: #fff;
    }
  }
  .hr-line {
    border-top: 1px solid #fff;
    width: calc(100% - 24px);
    padding: 0 24px;
  }
}
</style>