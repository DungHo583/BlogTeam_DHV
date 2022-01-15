<template>
  <adminLayout :loadPage="loading">
    <div class="card-container">Test</div>
  </adminLayout>
</template>

<script>
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
  },
  props: {
    // notifyAlert: String,
  },
  data() {
    return {
      loading: false,
      userID: null,
    };
  },

  mounted() {
    // this.userID = this.getUserID;
    // if (this.notifyAlert) {
    //   this.$notify({
    //     type: "success",
    //     title: "Thành công !",
    //     text: this.notifyAlert,
    //   });
    //   this.loading = false;
    // }
  },

  computed: {
    // getUserID() {
    //   return this.$route.query.user_id;
    // },
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>