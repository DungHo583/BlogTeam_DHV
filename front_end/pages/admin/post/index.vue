<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">
      <div class="title-card">
        <h3 class="text-title">Danh sách bài viết</h3>
        <button class="btn-create" @click="handleCreate">
          <a-icon type="plus" /> Thêm
        </button>
      </div>
      <!--  -->
      <tableCustom :header="headerTable" :content="contentTable" />
    </div>
  </adminLayout>
</template>

<script>
import tableCustom from "~/components/admin/post/tableCustom.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    tableCustom,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
      headerTable: [
        {
          name: "Tiêu đề bài viết",
          width: "200px",
          align: "left",
        },
        {
          name: "Mô tả ngắn",
          width: "200px",
          align: "left",
        },
        {
          name: "Tác giả",
          width: "200px",
          align: "right",
        },
        {
          name: "Tạo lúc",
          width: "150px",
          align: "center",
        },
      ],
      contentTable: [],
    };
  },
  watch: {
    contentTable() {
      this.fetchCategory();
    },
  },
  mounted() {
    this.fetchCategory();
  },

  methods: {
    handleCreate() {
      this.$router.push({
        path: "/admin/post/create",
      });
    },

    async fetchCategory() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/posts");
      if (response.data && response.data.success == true) {
        setTimeout(() => {
          this.loading = false;
          this.contentTable = response.data.data;
        }, 1500);
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

// style btn create
.btn-create {
  padding: 4px 20px;
  border: 2px solid #000;
  border-radius: 5px;
  color: #000;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  .anticon {
    margin-right: 10px;
  }
}
.btn-create:hover {
  border-color: #42b883;
  color: #42b883;
}
</style>