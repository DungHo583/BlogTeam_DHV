<template>
  <div class="layout-container">
    <newsPost />
    <listPost />
  </div>
</template>

<script>
import newsPost from "~/components/homePage/newsPost.vue";
import listPost from "~/components/homePage/listPost.vue";
export default {
  layout: "base",
  components: {
    newsPost,
    listPost,
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    // fetchData() {
    //   this.$axios.$get("/api/category").then((res) => {
    //     if (res.success) {
    //       console.log("data", res.data);
    //     }
    //   });
    // },
  },
};
</script>
