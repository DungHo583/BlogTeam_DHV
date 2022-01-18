<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Cập nhật tài khoản</h3>
      </div>
      <!--  -->
      <updateUser :getAccount="dataAccount" @getValue="valueInput" />
      <!--  -->
      <div class="line"></div>
      <!--  -->
      <div class="btn-action-group">
        <button class="btn-action btn-cancel" @click="handleBack">Hủy</button>
        <button class="btn-action btn-save" @click="handleSave">Lưu</button>
      </div>
    </div>
  </adminLayout>
</template>

<script>
import updateUser from "~/components/admin/user/update/updateUser.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    updateUser,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      dataAccount: {
        fullname: null,
        email: null,
        image: null,
        password: null,
      },
      getIdAccount: null,
    };
  },
  mounted() {
    this.getID();
    this.fetchAccount();
  },

  methods: {
    handleBack() {
      this.$router.push({
        path: "/admin/user",
      });
    },

    async fetchAccount() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(
        url + "/api/get-account/" + this.getIdAccount
      );
      if (response.data && response.data.success == true) {
        this.dataAccount = {
          fullname: response.data.data.fullname,
          password: response.data.data.password,
          email: response.data.data.email,
          image: response.data.data.image,
        };
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      }
    },

    valueInput(value = {}) {
      this.dataAccount = {
        fullname: value.fullname,
        password: value.password,
        email: value.email,
        image: value.image,
      };
    },

    beforSave() {
      if (
        !this.dataAccount.fullname &&
        this.dataAccount.fullname.trim() == ""
      ) {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập tên tài khoản !",
        });
        return false;
      }
      return true;
    },

    async handleSave() {
      let check = await this.beforSave();
      if (check) {
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(
          url + "/api/account/update/" + this.getIdAccount,
          {
            fullname: this.dataAccount.fullname,
            email: this.dataAccount.email,
            password: this.dataAccount.password,
            image: this.dataAccount.image,
          }
        );
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({ path: "/admin/user" });
          }, 1500);
        } else {
          this.$notify({
            type: "error",
            title: "Thất bại !",
            text: api.data.message,
          });
        }
      }
    },

    getID() {
      this.getIdAccount = this.$route.params.id;
    },
  },
};
</script>

<style lang="less" scoped>
.title-card {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .text-title {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: bold;
  }
}

// style btn action
.btn-action {
  width: 115px;
  padding: 11px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  font-weight: bold;
  outline: none;
}
.btn-cancel {
  margin-right: 15px;
  color: #1d253b80;
  background: #fff;
  border: 1px solid #1d253b80;
}
.btn-cancel:hover {
  border: 1px solid #e14eca;
  color: #e14eca;
}

.btn-save {
  color: #fff;
  background: #e14ecab3;
  border: 1px solid #e14ecab3;
}

.btn-save:hover {
  background: #e14eca;
  border: 1px solid #e14eca;
}
</style>
