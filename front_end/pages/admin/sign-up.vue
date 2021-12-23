<template>
  <div class="login-side">
    <h3 class="title-login">ADMIN</h3>
    <div class="box-form-login">
      <div class="title-form">
        <h3 class="text-title">Đăng ký</h3>
      </div>
      <div class="body-form">
        <div class="row-form">
          <a-input placeholder="Nhập email" class="input-form-login" />
        </div>
        <div class="row-form">
          <a-input-password placeholder="Mật khẩu mới" class="input-form-pass" />
        </div>
        <div class="row-form">
          <a-input-password placeholder="Nhập lại mật khẩu" class="input-form-pass" />
        </div>
        <div class="row-form">
          <a-button class="btn-signIn">Đăng ký</a-button>
        </div>
      </div>
      <div class="box-sign-up">
        <a href="javascript:;" class="text-signUp" @click="handleSignIn">Bạn đã có tài khoản ?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutLogin",
   methods: {
    handleSignIn() {
      this.$router.push({
        path: "/admin/login",
      });
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