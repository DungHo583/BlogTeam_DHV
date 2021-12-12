<template>
  <div class="layout-container">
    <div class="title-cate">
      <h3 class="cate-title">Review công nghệ</h3>
    </div>
    <div class="body-cate">
      <listCate :titleCate="'Laptop'" />
    </div>
  </div>
</template>

<script>
import listCate from "~/components/category/components/listCate.vue";
export default {
  layout: "base",
  components: {
    listCate,
  },
};
</script>

<style lang="less" scoped>
.layout-container {
  padding-top: 25px;
  .title-cate {
    background-image: url(/images/bg-tech.jpg);
    display: flex;
    align-items: center;
    height: 200px;
    background-size: cover;
    background-position: center;
    .cate-title {
      margin-bottom: 0;
      margin-left: 7%;
      font-size: 28px;
      color: #fff;
      line-height: 40px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
}
</style>