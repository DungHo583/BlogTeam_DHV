<template>
  <layout :bgFa="bgLayout">
    <div class="layout-container">
      <div class="title-cate">
        <h3 class="cate-title">Review công nghệ</h3>
      </div>
      <div class="body-cate">
        <listCate :listPost="listPost" />
      </div>
    </div>
  </layout>
</template>

<script>
import listCate from "~/components/category/components/listCate.vue";
import layout from "~/layouts/base.vue";
export default {
  components: {
    listCate,
    layout,
  },
  data() {
    return {
      bgLayout: true,
      listPost: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.post(url + "/api/post-cate", {
        _id: "61e7ae5bb0441d335b549d44",
      });
      if (response.data && response.data.success == true) {
        this.listPost = response.data.data;
        // this.contentTable = response.data.data;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.layout-container {
  padding-top: 25px;
  .title-cate {
    display: flex;
    align-items: center;
    justify-content: center;
    .cate-title {
      margin-bottom: 0;
      font-size: 28px;
      color: var(--color-title);
      line-height: 40px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
}
</style>