<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Tạo tài khoản</h3>
      </div>
      <!--  -->
      <inputUser @getValue="valueInput" />
      <!--  -->
      <div class="line"></div>
      <!--  -->
      <div class="btn-action-group">
        <button
          class="btn-action btn-cancel"
          @click="handleBack"
          :disabled="loadingSave"
        >
          Hủy
        </button>
        <button class="btn-action btn-save" @click="handleSave">
          <span v-if="loadingSave"><a-icon type="loading" /></span>
          <span v-else>Lưu</span>
        </button>
      </div>
    </div>
  </adminLayout>
</template>

<script>
import inputUser from "../../../../components/admin/user/create/inputUser.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    inputUser,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      loadingSave: false,

      dataAccount: {
        image: "",
        fullname: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },

  methods: {
    handleBack() {
      this.$router.push({
        path: "/admin/user?user_id=" + this.getUserID,
      });
    },

    valueInput(value = {}) {
      this.dataAccount.fullname = value.fullname;
      this.dataAccount.email = value.email;
      this.dataAccount.password = value.password;
      this.dataAccount.image = value.image;
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
      if (!this.dataAccount.email && this.dataAccount.email.trim() == "") {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập email !",
        });
        return false;
      }
      return true;
    },

    async handleSave() {
      let check = await this.beforSave();
      if (check) {
        this.loadingSave = true;

        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/sign-up", {
          fullname: this.dataAccount.fullname,
          email: this.dataAccount.email,
          password: this.dataAccount.password,
          image: this.dataAccount.image,

          created_at: Date.now(),
        });
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({
              path: "/admin/user?user_id=" + this.getUserID,
            });
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
  },
  computed: {
    getUserID() {
      return this.$route.query.user_id;
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
