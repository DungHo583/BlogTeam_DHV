<template>
  <div class="layout-base">
    <!-- start header -->
    <headerLayout />
    <!-- end header -->

    <!-- start content -->
    <div class="container-content">
      <div class="layout-grid-detail">
        <a-row :gutter="30">
          <a-col :span="16">
            <Nuxt />
          </a-col>
          <a-col :span="8">
            <div class="follow-tab">
              <followtab />
            </div>
            <div class="search-tab">
              <searchTab />
            </div>
            <div class="posts-tab">
              <postTab />
            </div>
            <div class="recent-tab">
              <recentPosts />
            </div>
            <div class="follow-tab">
              <follow />
            </div>
            <div class="categories-tab"><categories /></div>
            <div class="subscribe-tab"><subscribeTab /></div>
          </a-col>
        </a-row>
        <relatedPost />
      </div>
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
import followtab from "./header/components/followTab.vue";
import searchTab from "./header/components/searchTab.vue";
import postTab from "./header/components/postTab.vue";
import recentPosts from "./header/components/recentPosts.vue";
import follow from "./header/components/follow.vue";
import categories from "./header/components/categoriesTab.vue";
import subscribeTab from "./header/components/subscribeTab.vue";
import relatedPost from "./component/relatedPost.vue";
export default {
  components: {
    headerLayout,
    footerLayout,
    followtab,
    searchTab,
    postTab,
    recentPosts,
    follow,
    categories,
    subscribeTab,
    relatedPost,
  },
};
</script>

<style lang="less">
.layout-grid-detail {
  width: 1170px;
  margin: 0 auto;
}
.follow-tab {
  margin-bottom: 40px;
}
.search-tab {
  margin-bottom: 40px;
}
.posts-tab {
  margin-bottom: 40px;
}
.recent-tab {
  margin-bottom: 40px;
}
.categories-tab {
  margin-bottom: 40px;
}
</style>
