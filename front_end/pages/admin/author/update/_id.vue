<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Cập nhật tác giả</h3>
      </div>
      <!--  -->
      <updateAuthor :getAuthor="dataAuthor" @getValue="valueInput" />
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
          <span> Lưu</span>
        </button>
      </div>
    </div>
  </adminLayout>
</template>

<script>
import updateAuthor from "~/components/admin/author/update/updateAuthor.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    updateAuthor,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      loadingSave: false,

      dataAuthor: {
        name_author: null,
        short_desc: null,
        description: null,
        email_address: null,
        image: null,
      },
      getIdAuthor: null,
    };
  },
  mounted() {
    this.getID();
    this.fetchAuthor();
  },

  methods: {
    handleBack() {
      this.$router.push({
        path: "/admin/author?user_id=" + this.getUserID,
      });
    },

    async fetchAuthor() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(
        url + "/api/get-author/" + this.getIdAuthor
      );
      if (response.data && response.data.success == true) {
        this.dataAuthor = {
          name_author: response.data.data.name_author,
          short_desc: response.data.data.short_desc,
          description: response.data.data.description,
          email_address: response.data.data.email_address,
          image: response.data.data.image,
        };
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      }
    },

    valueInput(value = {}) {
      this.dataAuthor = {
        name_author: value.name_author,
        short_desc: value.short_desc,
        email_address: value.email_address,
        description: value.description,
        image: value.image,
      };
    },

    beforSave() {
      if (
        !this.dataAuthor.name_author &&
        this.dataAuthor.name_author.trim() == ""
      ) {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập tên tác giả !",
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
        const response = await this.$axios.post(
          url + "/api/author/update/" + this.getIdAuthor,
          {
            name_author: this.dataAuthor.name_author,
            short_desc: this.dataAuthor.short_desc,
            description: this.dataAuthor.description,
            email_address: this.dataAuthor.email_address,
            image: this.dataAuthor.image,
          }
        );
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({
              path: "/admin/author?user_id=" + this.getUserID,
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

    getID() {
      this.getIdAuthor = this.$route.params.id;
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
