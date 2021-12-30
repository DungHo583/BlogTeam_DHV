<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">Test</div>
  </adminLayout>
</template>

<script>
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
    };
  },

  mounted() {
    this.getUser();
  },

  methods: {
    checkToken() {
      this.checkRegister = window.localStorage.auth;
      if (this.checkRegister) {
        return true;
      }
      return false;
    },

    async getUser() {
      let check = await this.checkToken();
      if (check) {
        const url = process.env.API_BLOG;
        const response = await this.$axios.get(url + "/api/get-user", {
          headers: {
            Authorization: "Bearer " + window.localStorage.auth,
          },
        });
        if (response.data && response.data.success) {
          if (response.data.data.email == "admin@admin.com") {
            this.$notify({
              type: "success",
              title: "Thành công !",
              text: "Đăng nhập thành công !",
            });
            setTimeout(() => {
              this.$router.push({
                path: "/admin",
              });
              this.loading = false;
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
        console.log("token", api);
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>