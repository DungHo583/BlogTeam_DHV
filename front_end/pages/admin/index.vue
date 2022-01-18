<template>
  <adminLayout>
    <div class="loading-content" v-if="checkLoadingAdmin">
      <a-icon type="loading" />
    </div>
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
      checkLoadingAdmin: true,
    };
  },

  mounted() {
    this.$emit("pagePath", "/admin");
    setTimeout(() => {
      this.checkLoadingAdmin = false;
    }, 1500);
  },

  computed: {
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>