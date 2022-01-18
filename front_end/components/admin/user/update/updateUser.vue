<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tên tài khoản:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập tên tài khoản ..."
            v-model="nameAccount"
            @input="changeName"
          />
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Email:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập email ..."
            v-model="emailAccount"
            @input="changeEmail"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Password:</h3>
          </div>
          <a-input-password
            type="password"
            class="input-group"
            placeholder="Nhập password ..."
            v-model="passAccount"
            @input="changePass"
          />
        </div>
      </div>
      <!--  -->
      <!-- <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Image:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập image ..."
            v-model="imageAccount"
            @input="changeImage"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["getAccount"],
  mounted() {
    this.getPropsAccount();
  },
  data() {
    return {
      nameAccount: "",
      emailAccount: "",
      passAccount: "",
      imageAccount: "",

      waitInput: null,
      dataAccount: {
        image: "",
        fullname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    changeName() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataAccount.fullname = this.nameAccount;
        this.$emit("getValue", this.dataAccount);
      }, 500);
    },
    changeEmail() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataAccount.email = this.emailAccount;
        this.$emit("getValue", this.dataAccount);
      }, 500);
    },
    changePass() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataAccount.password = this.passAccount;
        this.$emit("getValue", this.dataAccount);
      }, 500);
    },
    changeImage() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataAccount.image = this.imageAccount;
        this.$emit("getValue", this.dataAccount);
      }, 500);
    },
    async getPropsAccount() {
      this.nameAccount = this.getAccount.fullname;
      this.imageAccount = this.getAccount.image;
      this.passAccount = this.getAccount.password;
      this.emailAccount = this.getAccount.email;

      this.dataAccount = await {
        nameAccount: this.getAccount.fullname,
        imageAccount: this.getAccount.image,
        passAccount: this.getAccount.password,
        emailAccount: this.getAccount.email,
      };
      this.$emit("getValue", this.dataAccount);
    },
  },
};
</script>

<style lang="less" scoped>
.form-group {
  width: 100%;
}
.row-form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  .l {
    width: 48%;
  }
  .r {
    width: 48%;
  }
}

.row-form-item:last-child {
  margin-bottom: 0;
}

.form-input-group {
  width: 100%;
  .title-input {
    margin-bottom: 5px;
    .text-title {
      font-size: 16px;
    }
  }
  .input-group {
    padding: 10px 18px;
    color: #222a42;
    border: 1px solid #1d253b80;
    border-radius: 10px;
    width: 100%;
    outline: none;
  }

  .input-group:hover {
    border-color: #e14eca;
  }

  .input-group:focus {
    border-color: #e14eca;
  }

  .area-group {
    padding: 10px 18px;
    color: #222a42;
    border: 1px solid #1d253b80;
    border-radius: 10px;
    width: 100%;
    outline: none;
  }

  .area-group:hover {
    border-color: #e14eca;
  }

  .area-group:focus {
    border-color: #e14eca;
  }
}
</style>
