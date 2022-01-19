<template>
  <div class="layout-container">Đây là content left</div>
</template>

<script>
import newsPost from "~/components/homePage/newsPost.vue";
import listPost from "~/components/homePage/listPost.vue";
export default {
  layout: "baseDetail",
  components: {
    newsPost,
    listPost,
  },
};
</script>