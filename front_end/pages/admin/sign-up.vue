<template>
  <div class="login-side">
    <h3 class="title-login">ADMIN</h3>
    <div class="box-form-login">
      <div class="title-form">
        <h3 class="text-title">Đăng ký</h3>
      </div>
      <div class="body-form">
        <div class="row-form">
          <a-input
            placeholder="Nhập họ và tên"
            class="input-form-login"
            v-model="fullName"
          />
        </div>
        <div class="row-form">
          <a-input
            placeholder="Nhập email"
            class="input-form-login"
            v-model="email"
          />
        </div>
        <div class="row-form">
          <a-input-password
            placeholder="Mật khẩu mới"
            class="input-form-pass"
            v-model="password"
          />
        </div>
        <div class="row-form">
          <a-input-password
            placeholder="Nhập lại mật khẩu"
            class="input-form-pass"
            v-model="repeatPwd"
          />
        </div>
        <div class="row-form">
          <a-button class="btn-signIn" @click="handleSignUp">Đăng ký</a-button>
        </div>
      </div>
      <div class="box-sign-up">
        <a href="javascript:;" class="text-signUp" @click="handleSignIn">
          Bạn đã có tài khoản ?
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutLogin",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      repeatPwd: "",
    };
  },
  methods: {
    handleSignIn() {
      this.$router.push({
        path: "/admin/login",
      });
    },

    beforSignUp() {
      if (!this.fullName && this.fullName.trim() == "") {
        this.$notify({
          type: "error",
          title: "Lỗi !",
          text: "Không được để trống Họ và Tên !",
        });
        return false;
      }
      if (!this.email && this.email.trim() == "") {
        this.$notify({
          type: "error",
          title: "Lỗi !",
          text: "Kiểm tra lại Email !",
        });
        return false;
      }
      if (!this.password && this.password != this.repeatPwd) {
        this.$notify({
          type: "error",
          title: "Lỗi !",
          text: "Kiểm tra lại mật khẩu !",
        });
        return false;
      }
      return true;
    },

    async handleSignUp() {
      let check = await this.beforSignUp();
      if (check) {
        const url = process.env.API_BLOG;
        const api = await this.$axios.post(url + "/api/sign-in", {
          fullname: this.fullName,
          email: this.email,
          password: this.password,
          created_at: Date.now(),
        });
        if (api.data && api.data.success == true) {
          window.localStorage.setItem("auth", api.data.data.token);
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: api.data.message,
          });
          setTimeout(() => {
            if (api.data.data.role == 3) {
              this.$router.push({ path: "/" });
            } else {
              this.$router.push({ path: "/admin" });
            }
          }, 1500);
        } else {
          this.$notify({
            type: "error",
            title: "Thất bại !",
            text: api.data.message,
          });
        }
      }
      // console.log("data", data);
    },
  },
};
</script>

<style lang="less" scoped>
.login-side {
  width: 380px;
  height: max-content;
  padding: 0 10px;
  text-align: center;
  .title-login {
    font-size: 40px;
    color: #fff;
    font-weight: bold;
  }
  .box-form-login {
    margin-top: 30px;
    width: 100%;
    .title-form {
      margin-bottom: 20px;
      .text-title {
        font-size: 22px;
        font-weight: normal;
        color: #fff;
      }
    }
    .body-form {
      width: 100%;
      .row-form {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .input-form-login {
          height: 50px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid transparent !important;
          color: #fff;
          text-align: left;
          padding: 0 20px;
          transition: all 0.3s ease;
          border-radius: 40px;
        }
        .input-form-login:hover {
          background-color: transparent !important;
          border: 1px solid #fff !important;
        }
        .input-form-login:focus {
          background-color: transparent !important;
          border: 1px solid #fff !important;
        }
        .input-form-login::placeholder {
          color: #fff !important;
        }
        //
        .btn-signIn {
          height: 50px;
          width: 100%;
          border-radius: 40px;
          border: none;
          background: #fbceb5 !important;
          color: #000;
          font-size: 20px;
        }
        .btn-signIn:hover {
          opacity: 0.9;
        }
        .r {
          .text-forgot {
            margin-bottom: 0 !important;
            color: #fff;
            font-size: 15px;
          }
        }
      }
      .row-form:last-child {
        justify-content: space-between;
      }
    }
    .box-sign-up {
      margin-top: 10px;
      width: 100%;
      text-align: center;
      .text-signUp {
        color: #fff;
        font-size: 16px;
      }
      .text-signUp:hover {
        color: #fbceb5;
      }
    }
  }
}
</style>
<style>
.input-form-pass > .ant-input {
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid transparent !important;
  color: #fff;
  text-align: left;
  padding: 0 20px;
  transition: all 0.3s ease;
  border-radius: 40px;
}
.input-form-pass > .ant-input:hover {
  background-color: transparent !important;
  border: 1px solid #fff !important;
}
.input-form-pass > .ant-input:focus {
  background-color: transparent !important;
  border: 1px solid #fff !important;
}
.input-form-pass > .ant-input::placeholder {
  color: #fff !important;
}
.input-form-pass > .ant-input-suffix > .anticon {
  color: #fff;
}

.l > .ant-checkbox-wrapper > span {
  color: #fff;
  font-size: 15px;
}
.l > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner {
  background-color: transparent;
  border-color: #d9d9d9;
}
.l > .ant-checkbox-wrapper > .ant-checkbox:hover > .ant-checkbox-inner {
  border-color: #fbceb5 !important;
}
.l > .ant-checkbox-wrapper > .ant-checkbox:focus > .ant-checkbox-inner {
  border-color: #fbceb5 !important;
}
.l > .ant-checkbox-wrapper:hover > .ant-checkbox > .ant-checkbox-inner {
  border-color: #fbceb5 !important;
}
.l > .ant-checkbox-wrapper:focus > .ant-checkbox > .ant-checkbox-inner {
  border-color: #fbceb5 !important;
}
.l > .ant-checkbox-wrapper > .ant-checkbox-checked > .ant-checkbox-inner {
  background-color: #fbceb5 !important;
  border: 1px solid #fbceb5 !important;
}
.l
  > .ant-checkbox-wrapper
  > .ant-checkbox-checked
  > .ant-checkbox-inner::after {
  border-color: #000 !important;
}
</style>