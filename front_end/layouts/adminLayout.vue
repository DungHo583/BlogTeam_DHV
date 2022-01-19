<template>
  <main class="main-body">
    <div class="main-container">
      <!-- header admin -->
      <headerAdmin />
      <!-- content -->
      <div class="main-content">
        <div class="nav-content">
          <navAdmin @route="pathRoute" />
        </div>
        <div class="body-content">
          <slot @pagePath="pathSlot" />
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
  data() {
    return {
      checkLoading: true,
      routePage: "",
      nextPage: false,
      checkLoadingAdmin: true,
      checkPathUser: "",
    };
  },
  watch: {},
  mounted() {
    this.fetchUser();
  },
  methods: {
    pathSlot(event) {
      this.routePage = event;
      if (this.nextPage) {
        this.pushPage(this.routePage);
      }
    },

    pathRoute(event) {
      this.routePage = event;
      if (this.nextPage) {
        this.pushPage(this.routePage);
      }
    },

    pushPage(route) {
      this.$router.push({
        path: route + "?user_id=" + this.getUserID,
      });
    },

    checkPath() {
      this.checkPathUser = this.$route.query.user_id;
      if (this.checkPathUser) {
        return true;
      } else {
        return false;
      }
    },

    async fetchUser() {
      let checkUser = await this.checkPath();
      if (checkUser) {
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/check-user", {
          user_id: this.getUserID,
        });
        if (response.data && response.data.success) {
          if (response.data.data.role == 1 || response.data.data.role == 2) {
            if (this.routePage == "/admin") {
              this.$notify({
                title: "Thành công",
                text: "Truy cập quản trị thành công !",
                type: "success",
              });
            }
            this.nextPage = true;
          } else {
            this.$notify({
              title: "Thất bại",
              text: "Tài khoản này không có quyền truy cập !",
              type: "error",
            });
            setTimeout(() => {
              this.$router.push({
                path: "/",
              });
            }, 1500);
          }
        } else {
          this.$notify({
            title: "Thất bại",
            text: "Tài khoản này không có quyền truy cập !",
            type: "error",
          });
          setTimeout(() => {
            this.$router.push({
              path: "/",
            });
          }, 1500);
        }
      } else {
        this.$notify({
          title: "Thất bại",
          text: "Tài khoản này không có quyền truy cập !",
          type: "error",
        });
        setTimeout(() => {
          this.$router.push({
            path: "/",
          });
        }, 1500);
      }
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
.main-body {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  .main-container {
    width: 100%;
    height: 100%;
    border-top: 2px solid #42b883;
    background-color: #f5f6fa;
    position: relative;
    .main-content {
      width: 100%;
      display: flex;
      padding: 0 30px 0 20px;
      position: relative;
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
