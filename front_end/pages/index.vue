<template>
  <div class="layout-container">
    <newsPost />
    <listPost />
  </div>
</template>

<script>
import newsPost from "~/components/homePage/newsPost.vue"
import listPost from "~/components/homePage/listPost.vue"
export default {
  layout: 'base',
  components: {
    newsPost,
    listPost
  }

}
</script>
