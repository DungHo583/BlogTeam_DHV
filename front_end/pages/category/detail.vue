<template>
    <div class="layout-container">
      Đây là content left
    <commentPost />
    </div>
</template>
  

<script>
import newsPost from "~/components/homePage/newsPost.vue"
import listPost from "~/components/homePage/listPost.vue"
import commentPost from "~/components/homePage/commentPost.vue"
export default {
  layout: 'baseDetail',
  components: {
    newsPost,
    listPost,
    commentPost
  }

}
</script>
