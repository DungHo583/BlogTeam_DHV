<template>
  <div class="">
    <a-row :gutter="30">
      <a-col :span="8">
        <div class="content-list">
          <div class="item-list" v-for="item in postList" :key="item.id">
            <div class="thumbnail-item">
              <img :src="item.thumbnail" alt="" />
            </div>
            <div class="content-item">
              <div class="tags-item">
                <a
                  href=""
                  class="text-tags"
                  v-for="tags in item.tags"
                  :key="tags.id"
                  >{{ tags.name }}</a
                >
              </div>
              <a @click="handleAccess(item.id)" class="post-title">{{ item.title }}</a>
              <p class="text-des">{{ item.descriptions }}</p>
              <span class="time-post-item">
                <p class="text-day">{{ item.createdAt }}</p>
                <p class="name-author">By {{ item.author }}</p>
              </span>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="content-list">
          <div class="item-list" v-for="item2 in postList2" :key="item2.id">
            <div class="thumbnail-item">
              <img :src="item2.thumbnail" alt="" />
            </div>
            <div class="content-item">
              <div class="tags-item">
                <a
                  href=""
                  class="text-tags"
                  v-for="tags in item2.tags"
                  :key="tags.id"
                  >{{ tags.name }}</a
                >
              </div>
              <a @click="handleAccess(item2.id)" class="post-title">{{ item2.title }}</a>
              <p class="text-des">{{ item2.descriptions }}</p>
              <span class="time-post-item">
                <p class="text-day">{{ item2.createdAt }}</p>
                <p class="name-author">By {{ item2.author }}</p>
              </span>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="content-list">
          <div class="item-list" v-for="item3 in postList3" :key="item3.id">
            <div class="thumbnail-item">
              <img :src="item3.thumbnail" alt="" />
            </div>
            <div class="content-item">
              <div class="tags-item">
                <a
                  href=""
                  class="text-tags"
                  v-for="tags in item3.tags"
                  :key="tags.id"
                  >{{ tags.name }}</a
                >
              </div>
              <a @click="handleAccess(item3.id)" class="post-title">{{ item3.title }}</a>
              <p class="text-des">{{ item3.descriptions }}</p>
              <span class="time-post-item">
                <p class="text-day">{{ item3.createdAt }}</p>
                <p class="name-author">By {{ item3.author }}</p>
              </span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import dataList from "~/api/postList.json";
export default {
  data() {
    return {
      postList: dataList.postList,
      postList2: dataList.postList2,
      postList3: dataList.postList3,
    };
  },
  watch: {},
  methods: {
    handleAccess(idPost) {
      this.$router.push({
        path: '/category/detail?id=' + idPost,
      })
    }
  },
};
</script>

<style lang="less" scoped>
.content-list {
  width: 100%;
  .item-list {
    width: 100%;
    margin-bottom: 40px;
    .thumbnail-item {
      width: 100%;
      height: auto;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .content-item {
      padding: 20px 15px 0 15px;
      .tags-item {
        font-size: 12px;
        color: #d42929;
      }
      .post-title {
        margin: 10px 0 15px;
      }
      .time-post-item {
        margin: 20px 0;
        display: flex;
        p {
          font-size: 14px;
          font-style: normal;
        }
        .text-day {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>