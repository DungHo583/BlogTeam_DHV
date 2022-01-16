<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Thêm tags</h3>
      </div>
      <!--  -->
      <inputTags @getValue="valueInput" />
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
import inputTags from "~/components/admin/tags/create/inputTags.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    inputTags,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      dataTags: {
        title: "",
        description: "",
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
        path: "/admin/tags",
      });
    },

    valueInput(value = {}) {
      this.dataTags.title = value.title;
      this.dataTags.description = value.description;
    },

    beforSave() {
      if (
        !this.dataTags.title &&
        this.dataTags.title.trim() == ""
      ) {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập tag!",
        });
        return false;
      }
      return true;
    },

    async handleSave() {
      let check = await this.beforSave();
      if (check) {
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/tags/create", {
          title: this.dataTags.title,
          description: this.dataTags.description,
          created_at: Date.now(),
        });
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({ path: "/admin/tags" });
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
