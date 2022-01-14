<template>
  <main class="main-body">
    <div class="loading-content" v-if="checkLoading">
      <a-icon type="loading" />
    </div>
    <div class="main-container" v-else>
      <!-- header admin -->
      <headerAdmin />
      <!-- content -->
      <div class="main-content">
        <div class="nav-content">
          <navAdmin />
        </div>
        <div class="body-content">
          <slot :notifyAlert="notifyText" :loadPage="checkLoading" />
        </div>
      </div>
    </div>
    <notifications class="notify" position="top right" />
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
  props: {
    loadPage: Boolean,
    userID: String,
  },
  data() {
    return {
      checkLoading: true,
      getUserId: null,
      notifyText: null,
    };
  },
  watch: {
    // loadPage(ev) {
    //   this.checkLoading = ev;
    // },
    userID() {
      this.getUserId = this.userID;
    },
    getUserId() {
      this.fetchUser();
    },
  },
  methods: {
    async fetchUser() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.post(url + "/api/check-user", {
        user_id: this.getUserId,
      });
      if (response.data && response.data.success) {
        if (response.data.data.role == 1 || response.data.data.role == 2) {
          // this.$notify({
          //   type: "success",
          //   title: "Thành công !",
          //   text: "Đăng nhập thành công !",
          // });
          this.notifyText = "Đăng nhập thành công !";
          setTimeout(() => {
            this.$router.push({
              path: "/admin?user_id=" + this.getUserId,
            });
            this.checkLoading = false;
          }, 1500);
        } else {
          this.$notify({
            type: "error",
            title: "Lỗi !",
            text: "Tài khoản này không có quyền truy cập !",
          });
          setTimeout(() => {
            this.$router.push({
              path: "/",
            });
          }, 1500);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main-body {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  .loading-content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    .anticon {
      font-size: 60px;
      color: #42b883;
    }
  }
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
        padding-bottom: 30px;
      }
      .body-content::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
      }
    }
  }
  .notify {
    // position: relative;
    z-index: 99999;
  }
}
</style>