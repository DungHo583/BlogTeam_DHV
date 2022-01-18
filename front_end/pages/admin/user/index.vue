<template>
  <adminLayout :loadPage="loadingPage">
    <div class="card-container">
      <div class="title-card">
        <h3 class="text-title">Danh sách tài khoản</h3>
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
import tableCustom from "~/components/admin/user/tableCustom.vue";
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
      headerTable: [
        // {
        //   name: "Avatar",
        //   width: "70px",
        //   align: "left",
        // },
        {
          name: "Tên tài khoản",
          width: "100px",
          align: "left",
        },
        {
          name: "Mật khẩu",
          width: "50px",
          align: "left",
        },
        {
          name: "Role",
          width: "50px",
          align: "left",
        },
        {
          name: "Email",
          width: "50px",
          align: "left",
        },
        // {
        //   name: "Tạo lúc",
        //   width: "50px",
        //   align: "center",
        // },
      ],
      contentTable: [],
    };
  },
  watch: {
    contentTable() {
      this.fetchAccount();
    },
  },
  mounted() {
    this.fetchAccount();
  },

  methods: {
    handleCreate() {
      this.$router.push({
        path: "/admin/user/create?user_id=" + this.getUserID,
      });
    },

    async fetchAccount() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/list-user");
      if (response.data && response.data.success == true) {
        setTimeout(() => {
          this.loadingPage = false;
          this.contentTable = response.data.data;
        }, 1500);
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
