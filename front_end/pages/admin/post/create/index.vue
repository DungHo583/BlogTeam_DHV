<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Tạo bài viết</h3>
      </div>
      <!--  -->
      <inputCate @getValue="valueInput" @getSelected="valueSelect" />
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
import inputCate from "~/components/admin/post/create/inputCate.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    inputCate,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      dataCate: {
        name: "",
        short_desc: "",
        description: "",
      },
      author: null,
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
        path: "/admin/category",
      });
    },

    valueSelect(event) {
      this.author = event;
    },

    valueInput(value = {}) {
      this.dataCate.name = value.name;
      this.dataCate.short_desc = value.short_desc;
      this.dataCate.description = value.description;
    },

    beforSave() {
      if (!this.dataCate.name && this.dataCate.name.trim() == "") {
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
        const url = process.env.API_BLOG;
        const response = await this.$axios.post(url + "/api/post/create", {
          title: this.dataCate.name,
          short_desc: this.dataCate.short_desc,
          description: this.dataCate.description,
          created_at: Date.now(),
        });
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({ path: "/admin/category" });
          }, 1500);
        } else {
          this.$notify({
            type: "error",
            title: "Thất bại !",
            text: api.data.message,
          });
        }

        // this.$notify({
        //   type: "success",
        //   title: "Thành công !",
        //   text: "Lưu danh mục thành công !",
        // });
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