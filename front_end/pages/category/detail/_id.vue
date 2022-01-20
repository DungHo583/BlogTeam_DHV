<template>
  <div class="layout-container">
    <h3 class="title-post-detail">{{ postDetail.title }}</h3>
    <span class="time-detail">{{
      postDetail.created_at | formatDate("dd/mm/yyyy hh:MM")
    }}</span>
    <div class="body-content-post">
      <div class="thumbnail-detail">
        <img :src="postDetail.thumbnail" alt="" />
      </div>
      <div class="content-detail">
        <p class="text-detail">
          {{ postDetail.description }}
        </p>
      </div>
    </div>
  </div>
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
  data() {
    return {
      getIdCate: "",
      postDetail: {},
    };
  },
  mounted() {
    this.getID();
    this.fetchCatePost();
  },
  methods: {
    getID() {
      this.getIdCate = this.$route.params.id;
    },

    async fetchCatePost() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(
        url + "/api/get-post/" + this.getIdCate
      );
      if (response.data && response.data.success == true) {
        this.postDetail = response.data.data;
        console.log("data post ---------", response.data.data);
      }
    },
  },
  computed: {
    getUserID() {
      return this.$route.query.user_id;
    },
  },
};
</script>