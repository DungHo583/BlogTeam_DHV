<template>
  <div class="layout-base">
    <!-- start header -->
    <headerLayout />
    <!-- end header -->

    <!-- start content -->
    <div class="container-content">
      <Nuxt />
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
import headerLayout from "./header/header.vue"
import footerLayout from "./footer/footer.vue"
export default {
    components: {
        headerLayout,
        footerLayout
    }
};
</script>

<style lang="less" >

</style>