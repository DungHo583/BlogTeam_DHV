<template>
  <adminLayout>
    <div class="card-container">
      <div class="title-card">
        <h3 class="text-title">Cập nhật bài viết</h3>
      </div>
      <!--  -->
      <updatePost :dataFetch="dataPost" @getValue="valueInput" />
      <!--  -->
      <div class="line"></div>
      <!--  -->
      <div class="btn-action-group">
        <button class="btn-action btn-cancel" @click="handleBack">Hủy</button>
        <button
          class="btn-action btn-save"
          @click="handleSave"
          :disabled="loadingSave"
        >
          <span v-if="loadingSave"><a-icon type="loading" /></span>
          <span v-else>Lưu</span>
        </button>
      </div>
    </div>
  </adminLayout>
</template>

<script>
import updatePost from "~/components/admin/post/update/updateCate.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    updatePost,
  },
  data() {
    return {
      loadingSave: false,
      dataFetchPost: {},
      dataPost: {
        thumbnail: "",
        title: "",
        short_desc: "",
        description: "",
        author: "",
        tag: "",
        category: "",
      },
      getIdPost: null,
    };
  },
  mounted() {
    this.getID();
    this.fetchPost();
  },

  methods: {
    getID() {
      this.getIdPost = this.$route.params.id;
    },

    handleBack() {
      this.$router.push({
        path: "/admin/post?user_id=" + this.getUserID,
      });
    },

    async fetchPost() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(
        url + "/api/get-post/" + this.getIdPost
      );
      if (response.data && response.data.success == true) {
        this.dataFetchPost = response.data.data;
        this.dataPost = {
          thumbnail: this.dataFetchPost.thumbnail,
          title: this.dataFetchPost.title,
          short_desc: this.dataFetchPost.short_desc,
          description: this.dataFetchPost.description,
          author: this.dataFetchPost.author,
          tag: this.dataFetchPost.tags,
          category: this.dataFetchPost.category,
        };
      }
    },

    valueInput(value = {}) {
      this.dataPost.title = value.title;
      this.dataPost.short_desc = value.short_desc;
      this.dataPost.description = value.description;
      this.dataPost.author = value.author;
      this.dataPost.thumbnail = value.thumbnail;
      this.dataPost.tag = value.tags;
      this.dataPost.category = value.category;
    },

    beforSave() {
      if (!this.dataPost.title && this.dataPost.title.trim() == "") {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập tiêu đề bài viết !",
        });
        return false;
      }
      return true;
    },

    async handleSave() {
      let check = await this.beforSave();
      if (check) {
        this.loadingSave = true;
        console.log("data push", this.dataPost);
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/post/create", {
          title: this.dataPost.title,
          thumbnail: this.dataPost.thumbnail,
          short_desc: this.dataPost.short_desc,
          description: this.dataPost.description,
          author: this.dataPost.author,
          category: this.dataPost.category,
          tag: this.dataPost.tag,
        });
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({
              path: "/admin/post?user_id=" + this.getUserID,
            });
          }, 1500);
        } else {
          this.$notify({
            type: "error",
            title: "Thất bại !",
            text: response.data.message,
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