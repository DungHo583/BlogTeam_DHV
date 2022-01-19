<template>
  <div class="content-header">
    <div class="content">
      <div class="left">
        <h3 class="text-title">Admin</h3>
      </div>
      <div class="right">
        <div class="content-user">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              <a-icon type="user" :style="{ fontSize: '30px' }" />
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0" @click="handleEdit(getUserID)">
                <a-icon type="profile" /> Profile
              </a-menu-item>

              <a-menu-divider />
              <a-menu-item key="1" @click="handleLogout"
                ><a-icon type="logout" /> Exit
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkUser: false,
    };
  },
  methods: {
    handleEdit(event) {
      this.$router.push({
        path: "/admin/user/update/" + event + "?user_id=" + this.getUserID,
      });
    },
    async handleLogout() {
      await window.localStorage.removeItem("auth");
      setTimeout(() => {
        this.checkUser = false;
        this.$router.go();
      }, 500);
      this.$router.push({
        path: "/",
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
.ant-dropdown-link {
  display: flex;
  align-items: center;
}
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
