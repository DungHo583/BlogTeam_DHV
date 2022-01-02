<template>
  <adminLayout :loadPage="loading">
    <div class="card-container" v-if="!loading">User</div>
  </adminLayout>
</template>

<script>
import adminLayout from "~/layouts/adminLayout";

export default {
  components: {
    adminLayout,
  },
  data() {
    return {
      checkRegister: null,
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },

  methods: {
  },
};
</script>

<style lang="less" scoped>
</style>