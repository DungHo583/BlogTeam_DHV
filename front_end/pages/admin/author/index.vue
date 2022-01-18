<template>
  <adminLayout>
    <div class="card-container">
      <div class="title-card">
        <h3 class="text-title">Danh sách tác giả</h3>
        <button class="btn-create" @click="handleCreate">
          <a-icon type="plus" /> Thêm
        </button>
      </div>
      <!--  -->
      <tableCustom
        :header="headerTable"
        :content="contentTable"
        :loadingTable="loadingTable"
        @reloadTable="reloadFetchData"
      />
    </div>
  </adminLayout>
</template>

<script>
import tableCustom from "~/components/admin/author/tableCustom.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    tableCustom,
  },
  data() {
    return {
      checkRegister: null,
      loadingPage: true,
      loadingTable: false,
      headerTable: [
        {
          name: "Tên tác giả",
          width: "150px",
          align: "left",
        },
        {
          name: "Mô tả ngắn",
          width: "150px",
          align: "left",
        },
        {
          name: "Email",
          width: "120px",
          align: "left",
        },
        {
          name: "Tạo lúc",
          width: "120px",
          align: "center",
        },
      ],
      contentTable: [],
    };
  },
  watch: {},
  mounted() {
    this.$emit("pagePath", "/admin/author");

    this.fetchAuthor();
  },

  methods: {
    handleCreate() {
      this.$router.push({
        path: "/admin/author/create?user_id=" + this.getUserID,
      });
    },

    async fetchAuthor() {
      this.loadingTable = true;

      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/author");
      if (response.data && response.data.success == true) {
        this.contentTable = response.data.data;

        setTimeout(() => {
          this.loadingTable = false;
        }, 1500);
      }
    },
    reloadFetchData(event) {
      if (event == true) {
        this.fetchAuthor();
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
