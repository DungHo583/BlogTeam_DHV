<template>
  <div class="login-side">
    <h3 class="title-login">ADMIN</h3>
    <div class="box-form-login">
      <div class="title-form">
        <h3 class="text-title">Đăng nhập</h3>
      </div>
      <div class="body-form">
        <div class="row-form">
          <a-input
            v-model="email"
            placeholder="Email"
            class="input-form-login"
          />
        </div>
        <div class="row-form">
          <a-input-password
            v-model="password"
            placeholder="Mật khẩu"
            class="input-form-pass"
          />
        </div>
        <div class="row-form">
          <a-button class="btn-signIn" @click="handleSignIn">
            Đăng nhập
          </a-button>
        </div>
        <div class="row-form">
          <div class="l">
            <a-checkbox v-model="saveAccount"> Nhớ tài khoản </a-checkbox>
          </div>
          <div class="r">
            <!-- <p class="text-forgot">Quên mật khẩu</p> -->
          </div>
        </div>
      </div>
      <div class="box-sign-up">
        <a href="javascript:;" class="text-signUp" @click="handleSignUp">
          Bạn chưa có tài khoản ?
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
      saveAccount: true,
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignUp() {
      this.$router.push({
        path: "/admin/sign-up",
      });
    },

    beforSignIn() {
      if (!this.email && this.email.trim() == "") {
        this.$notify({
          type: "error",
          title: "Lỗi !",
          text: "Kiểm tra lại Email !",
        });
        return false;
      }
      if (!this.password && this.password.trim() == "") {
        this.$notify({
          type: "error",
          title: "Lỗi !",
          text: "Kiểm tra lại mật khẩu !",
        });
        return false;
      }
      return true;
    },

    async handleSignIn() {
      let check = await this.beforSignIn();
      if (check) {
        const url = process.env.API_BLOG;
        const api = await this.$axios.post(url + "/api/sign-in", {
          email: this.email,
          password: this.password,
        });
        if (api.data && api.data.success == true) {
          window.localStorage.setItem("auth", api.data.data.token);
          console.log("auth", api.data.data);
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: api.data.message,
          });
          setTimeout(() => {
            if (api.data.data.role == 3) {
              this.$router.push({ path: "/" });
            } else {
              this.$router.push({
                path: "/admin?user_id=" + api.data.data._id,
              });
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