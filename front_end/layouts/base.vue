<template>
  <div class="layout-base">
    <!-- start header -->
    <headerLayout />
    <!-- end header -->

    <!-- start content -->
    <div class="container-content" :class="{ bgDetail: bgFa }">
      <Nuxt />
      <slot />
    </div>
    <!-- end content -->

    <!-- start footer -->
    <footerLayout />
    <!-- end footer -->
    <!-- notify -->
    <notifications position="top right" />
  </div>
</template>

<script>
import headerLayout from "./header/header.vue";
import footerLayout from "./footer/footer.vue";
export default {
  components: {
    headerLayout,
    footerLayout,
  },
  props: {
    bgFa: Boolean,
  },
};
</script>

<style lang="less" >
.bgDetail {
  background: #fafafa !important;
}
</style>