<template>
  <div class="header">
    <div class="logo">
      <img src="/images/logo.jpg" style="" />
    </div>
    <div class="navbar">
      <div class="sidebar">
        <label for="check" class="sidebar__btn">
          <a-icon type="align-left" :style="{ fontSize: '22px' }" />
        </label>
        <input id="check" hidden type="checkbox" class="sidebar__input" />
        <label for="check" class="sidebar__overlay"></label>
        <div class="sidebar__left">
          <div class="sidebar__left-header">
            <h1 class="sidebar__left-header-content">Blog Review</h1>
            <label for="check" class="sidebar__close">
              <a-icon
                :style="{ fontSize: '22px', color: '#eaeaec' }"
                type="close"
              />
            </label>
          </div>
          <div class="sidebar__left-list">
            <sidebar />
          </div>
        </div>
      </div>
      <div class="navMenu">
        <nav role="navigation" class="primary-navigation">
          <ul class="categories">
            <li>
              <NuxtLink to="/"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"> About </NuxtLink>
            </li>
            <li>
              <a href="javascript:;"> Categoris &dtrif;</a>
              <ul class="dropdown">
                <li>
                  <NuxtLink to="/category/tech"> Đồ công nghệ </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/category/trend"> Xu hướng công nghệ </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/category/review"> Review công nghệ </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/contact"> Contact </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="login">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            <a-icon
              type="user"
              :style="{ fontSize: '30px', color: '#595959' }"
            />
            <!-- <a-icon type="down" :style="{ color: '#595959' }" /> -->
          </a>
          <a-menu class="login-here" slot="overlay">
            <a-menu-item key="0" @click="handleSignIn" v-if="!checkUser">
              <a-icon type="double-right" /> Đăng nhập
            </a-menu-item>

            <a-menu-divider v-if="!checkUser" />
            <a-menu-item key="1" @click="handleSignUp" v-if="!checkUser"
              ><a-icon type="double-right" /> Đăng ký
            </a-menu-item>

            <a-menu-item key="0" @click="handleAdmin" v-if="checkUser"
              ><a-icon type="double-right" /> Admin
            </a-menu-item>
            <a-menu-divider v-if="checkUser" />
            <a-menu-item key="1" @click="handleLogout" v-if="checkUser"
              ><a-icon type="double-right" /> Đăng xuất
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar/sidebar.vue";
export default {
  components: { sidebar },
  data() {
    return {
      checkUser: false,
      checkRegister: null,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    handleSignUp() {
      this.$router.push({
        path: "/admin/sign-up",
      });
    },
    handleSignIn() {
      this.$router.push({
        path: "/admin/login",
      });
    },
    handleAdmin() {
      this.$router.push({
        path: "/admin?user_id=" + this.getUserID,
      });
    },
    async handleLogout() {
      await window.localStorage.removeItem("auth");
      setTimeout(() => {
        this.checkUser = false;
        this.$router.go();
      }, 500);
    },

    checkToken() {
      this.checkRegister = window.localStorage.auth;
      if (this.checkRegister) {
        this.checkUser = true;
        return true;
      }
      return false;
    },
    async getUser() {
      let check = await this.checkToken();
      console.log("check", check);
      if (check) {
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/check-user", {
          headers: {
            Authorization: "Bearer " + window.localStorage.auth,
          },
        });
        console.log("token", response);
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
.login-here {
  margin-top: 20px;
}
.header {
  position: relative;
  z-index: 9999;
  align-items: center;
  border-bottom: 1px solid #eaeaec;
}
.sidebar {
  flex: 1;
}
.navMenu {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
}
.logo {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eaeaec;
}
.sidebar__left-header {
  background-color: black;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  margin-bottom: 30px;
}
.categories {
  padding: 0;
}
.sidebar__left-header-content {
  color: white;
  // padding-left: 30px;
  font-family: "Muli", sans-serif;
  margin: 0;
}
.navbar {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}
.sidebar__btn:hover {
  color: #3ca0e7;
}
.sidebar__btn {
  width: 35px;
  height: 35px;
  z-index: 999;
  cursor: pointer;
}
.sidebar__overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 320px;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
  animation: fadeIn linear 0.2s;
}
.sidebar__left {
  position: fixed;

  top: 0;
  width: 320px;
  left: 0;
  height: 100%;
  max-width: 100%;
  visibility: visible;
  color: black;
  background: #fff;
  transform: translateX(-100%);
  transition: transform linear 0.2s, opacity linear 0.2s;
  opacity: 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.sidebar__left::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.sidebar__left-list {
  display: block;
  padding: 8px 20px;
}
.sidebar__close {
  // position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  transition: 0.3s;
  cursor: pointer;
  border: none;
  background: #ffffff1a;
  align-items: center;
  display: flex;

  justify-content: center;
}
.sidebar__close:hover {
  background: #4f4f50;
}
.sidebar__input:checked ~ .sidebar__overlay {
  display: block;
}
.sidebar__input:checked ~ .sidebar__left {
  transform: translateX(0);

  opacity: 1;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
nav {
  &.primary-navigation {
    display: flex;
    text-align: center;
    font-size: 16px;
    align-content: center;
    justify-content: space-between;
    ul {
      margin: 0;
    }
    ul li {
      list-style: none;
      display: inline-block;
      padding-right: 30px;
      position: relative;
      text-decoration: none;
      text-align: center;
    }

    li a {
      color: black;
    }

    li a:hover {
      color: #3ca0e7;
    }

    li:hover {
      cursor: pointer;
    }

    ul li ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;

      display: flex;
      background: white;
    }

    ul li:hover > ul,
    ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
      min-width: 250px;
      text-align: left;
      padding-top: 30px;
      padding-left: 20px;
      box-shadow: 0px 3px 5px -1px #ccc;
      border-radius: 15px;
    }

    ul li ul li {
      clear: both;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      border-style: none;
    }

    ul li ul li a:hover {
      padding-left: 10px;
      border-left: 1px solid #3ca0e7;
      transition: all 0.3s ease;
    }
  }
}

a {
  text-decoration: none;

  &:hover {
    color: #3ca0e7;
  }
}

ul li ul li a {
  transition: all 0.5s ease;
}
</style>
