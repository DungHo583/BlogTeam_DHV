<template>
  <div class="nav-admin">
    <div class="title-menu">
      <h3 class="text-title" @click="backToHome">Blog Team</h3>
    </div>
    <div class="menu-admin">
      <div
        class="item-menu-admin"
        v-for="item in menuList"
        :key="item.key"
        :class="{
          active: item.route == activePath,
        }"
        @click="pushRouter(item.route)"
      >
        <a-icon :type="item.icon" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigation: "",
      menuDefault: "",
      menuList: [
        {
          key: "admin",
          icon: "pie-chart",
          name: "Dashboard",
          route: "/admin",
        },
        {
          key: "category",
          icon: "folder",
          name: "Danh mục",
          route: "/admin/category",
        },
        {
          key: "post",
          icon: "file-text",
          name: "Bài viết",
          route: "/admin/post",
        },
        {
          key: "author",
          icon: "form",
          name: "Tác giả",
          route: "/admin/author",
        },
        {
          key: "tags",
          icon: "snippets",
          name: "Thẻ tag",
          route: "/admin/tags",
        },
        {
          key: "user",
          icon: "user",
          name: "Tài khoản",
          route: "/admin/user",
        },
      ],
      activePath: "",
    };
  },
  mounted() {
    this.activePath = this.$route.path;
  },
  methods: {
    pushRouter(path) {
      this.menuDefault = path;
      this.$emit("route", this.menuDefault);
    },
    backToHome() {
      this.$router.push({
        path: "/?user_id=" + this.getUserID,
      });
    },
  },

  computed: {
    getUserID() {
      return this.$route.query.user_id;
    },
  },
};
</script>

<style lang="less" scoped>
.nav-admin {
  height: 100%;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.15);
  width: 230px;
  background: linear-gradient(0deg, #389466 0%, #42b883 100%);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  .title-menu {
    cursor: pointer;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 8px 12px 16px;
    .text-title {
      margin-bottom: 0;
      font-weight: normal;
      color: #fff;
    }
  }
  .menu-admin {
    width: 100%;
    border-top: 1px solid #fff;
    padding-top: 20px;
    .item-menu-admin {
      padding: 20px 12px 20px 20px;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      .anticon {
        color: rgba(255, 255, 255, 0.8);
        margin-right: 10px;
        font-size: 16px;
      }
      span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .item-menu-admin:hover {
      .anticon {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
    .active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
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

  .hr-line {
    border-top: 1px solid #fff;
    width: calc(100% - 24px);
    padding: 0 24px;
  }
}
</style>
