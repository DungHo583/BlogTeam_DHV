<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Tạo tác giả</h3>
      </div>
      <!--  -->
      <inputAuthor @getValue="valueInput" />
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
import inputAuthor from "../../../../components/admin/author/create/inputAuthor.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    inputAuthor,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      dataAuthor: {
        name_author: "",
        short_desc: "",
        description: "",
        email_address: "",
        image: "",
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
        path: "/admin/author",
      });
    },

    valueInput(value = {}) {
      this.dataAuthor.name_author = value.name_author;
      this.dataAuthor.short_desc = value.short_desc;
      this.dataAuthor.description = value.description;
      this.dataAuthor.email_address = value.email_address;
      this.dataAuthor.image = value.image;
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
      if (
        !this.dataAuthor.email_address &&
        this.dataAuthor.email_address.trim() == ""
      ) {
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
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/author/create", {
          name_author: this.dataAuthor.name_author,
          short_desc: this.dataAuthor.short_desc,
          description: this.dataAuthor.description,
          email_address: this.dataAuthor.email_address,
          image: this.dataAuthor.image,

          created_at: Date.now(),
        });
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({ path: "/admin/author" });
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
