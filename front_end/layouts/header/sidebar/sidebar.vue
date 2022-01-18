<template>
  <div class="">
    <section class="widget">
      <div class="author-profile">
        <h2 class="title">About Author</h2>
        <div class="author-wrapper">
          <figure>
            <img
              class="author"
              src="https://templatesell.net/polite/wp-content/uploads/sites/3/2020/02/ava1.png"
            />
          </figure>

          <p>
            This is the author widget. You can add the author image and social
            media icons there. All the popular social media icons are there in
            this widgets. Try it now.
          </p>

          <div class="socials-icon">
            <a class="icon" href="http://www.facebook.com" target="_blank"
              ><a-icon type="facebook" :style="{ fontSize: '22px' }"
            /></a>

            <a class="icon" href="http://www.instagram.com" target="_blank"
              ><a-icon type="instagram" :style="{ fontSize: '22px' }"
            /></a>

            <a class="icon" href="http://www.twitter.com" target="_blank"
              ><a-icon type="twitter" :style="{ fontSize: '22px' }"
            /></a>

            <a class="icon" href="http://www.youtube.com" target="_blank"
              ><a-icon type="youtube" :style="{ fontSize: '22px' }"
            /></a>
          </div>

          <span class="author-sign">My Signature</span>
        </div>
      </div>
    </section>
    <section class="widget-post">
      <h2 class="widget-title">Featured Posts</h2>

      <listPost />
    </section>
    <div class="btn-signin">
      <a href="javascript:;" v-if="!checkUser">
        <span class="text-signin" @click="handleSignIn">
          Đăng nhập / Đăng ký
        </span>
      </a>
      <a href="javascript:;" v-else>
        <span class="text-signin" @click="handleLogout"> Đăng xuất </span>
      </a>
    </div>
  </div>
</template>

<script>
import listPost from "./listPost.vue";
export default {
  components: { listPost },
  data() {
    return {
      checkUser: false,
      user_id: null,
      checkRegister: null,
    };
  },
  mounted() {
    this.getUser();
  },

  methods: {
    handleSignIn() {
      this.$router.push({
        path: "/admin/sign-up",
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
        // console.log("token", response);
      }
    },
  },
};
</script>

<style lang="less">
.socials-icon {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .icon {
    margin: 0 5px;
  }
}
.author-sign {
  font-family: "Monsieur La Doulaise";
  font-size: 35px;
  padding: 20px 0;
}
.author-wrapper {
  text-align: center;
}
.author {
  width: 280px;
  height: 280px;
}
.title {
  margin: 0 0 15px;
  font-family: "Prata", serif;
  font-style: normal;
  font-weight: 400;
}
.widget-title {
  padding: 0;
  margin: 40px 0 20px;
  font-size: 18px;
  line-height: 1.3;
  text-transform: capitalize;
  color: #2f3235;
  background-color: #ffffff;

  font-family: "Prata", serif;
}
.widget_featured_thumbnail {
  position: relative;
  overflow: hidden;
  float: left;
  margin: 0 15px 0 0;
  border-radius: 100%;
}

.widget_featured_content {
  height: 80px;
  display: table-cell;
  vertical-align: middle;
}

.btn-signin {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text-signin {
    font-size: 18px;
    transition: all 0.3s ease;
  }
  .text-signin:hover {
    color: var(--color-hover);
  }
}
</style>
