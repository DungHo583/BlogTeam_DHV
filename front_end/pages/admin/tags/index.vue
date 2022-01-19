<template>
  <adminLayout>
    <div class="card-container">
      <div class="title-card">
        <h3 class="text-title">Danh sách tags</h3>
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
import tableCustom from "~/components/admin/tags/tableCustom.vue";
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
    tableCustom,
  },
  data() {
    return {
      loadingTable: false,
      headerTable: [
        {
          name: "Tags",
          width: "150px",
          align: "left",
        },
        {
          name: "Mô tả",
          width: "150px",
          align: "left",
        },
        {
          name: "Thời gian tạo",
          width: "120px",
          align: "center",
        },
      ],
      contentTable: [],
    };
  },
  mounted() {
    this.fetchTag();
  },

  methods: {
    handleCreate() {
      this.$router.push({
        path: "/admin/tags/create?user_id=" + this.getUserID,
      });
    },

    async fetchTag() {
      this.loadingTable = true;
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/tags");
      if (response.data && response.data.success == true) {
        this.contentTable = response.data.data;
        setTimeout(() => {
          this.loadingTable = false;
        }, 1500);
      }
    },

    reloadFetchData(event) {
      if (event == true) {
        this.fetchTag();
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
