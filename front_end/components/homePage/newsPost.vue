<template>
  <div class="newpost">
    <div>
      <carousel :per-page="1" :mouse-drag="false" :navigationEnabled="true">
        <slide v-for="item in postList4" :key="item.id">
          <a-row class="newpost-img-wrap">
            <a-col :span="14">
              <div
                :style="{ backgroundImage: `url(${item.thumbnail})` }"
                class="box-thumbnail"
              ></div>
              <!-- <img :src="item.thumbnail" alt="" class="newpost-img" /> -->
            </a-col>
            <a-col :span="10">
              <div class="box-content-new">
                <div class="content-new-post">
                  <div class="box-tags">
                    <a class="newpost-tag" href="javascript:;">
                      {{ item.tag }}
                    </a>
                  </div>
                  <a @click="handleAccess(item.id)" class="post-title">
                    {{ item.title }}
                  </a>
                  <div class="box-time-created">
                    <span class="newpost-created">{{ item.createdAt }}</span>
                  </div>
                  <div class="box-post-des">
                    <p class="newpost-descriptions">{{ item.descriptions }}</p>
                  </div>
                  <div class="btn-readmore">
                    <a class="newpost-readmore">Read More </a>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </slide>
      </carousel>
    </div>
    <div class="newpost-list">
      <a-row :gutter="30">
        <a-col :span="8" v-for="item in postList4" :key="item.id">
          <div class="content-list">
            <div class="item-list">
              <div
                class="thumbnail-item"
                :style="{ backgroundImage: `url(${item.thumbnail})` }"
              ></div>
              <div class="content-item">
                <div class="tags-item">
                  <a href="" class="text-tags">{{ item.tag }}</a>
                </div>
                <a @click="handleAccess(item.id)" class="post-title">{{
                  item.title
                }}</a>
                <span class="time-post-item">
                  <p class="text-day">{{ item.createdAt }}</p>
                  <p class="name-author">By {{ item.author }}</p>
                </span>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import newpost from "~/api/postList.json";
export default {
  data() {
    return {
      postList4: newpost.postList4,
      dataImg: { backgroundImage: "url(/images/dapxe.jpg)" },
    };
  },
  methods: {
    handleAccess(idPost) {
      this.$router.push({
        path: "/category/detail/" + idPost + "?user_id=" + this.getUserID,
      });
    },
  },
  computed: {
    getUserID() {
      return this.$route.query.user_id;
    },
  },
};
</script>

<style lang="less" scoped>
.newpost {
  padding-bottom: 25px;
}

.box-thumbnail {
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center;
}
.box-time-created {
  margin: 15px 0;
  .newpost-created {
    color: var(--color-time);
  }
}

.newpost-img-wrap {
  height: 450px;
  .ant-col {
    height: 100% !important;
  }
}

.box-content-new {
  width: 100%;
  height: 100%;
  .content-new-post {
    height: 100%;
    width: 100%;
    padding: 20px 70px;
    background: #fafafa;
  }
}

.box-tags {
  padding: 20px 0;
  .newpost-tag {
    color: var(--color-hover);
    font-size: 14px;
    line-height: normal;
  }
}

.newpost-author {
  margin-right: 20px;
}
.newpost-title {
  font-size: 16px;
  font-style: normal;
  line-height: 1.2;
  color: #2f3235;
  font-size: 24px;
}
.box-post-des {
  .newpost-descriptions {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7;
    color: var(--color-text);
    margin: 0 !important;
  }
}
.btn-readmore {
  margin-top: 20px;
  .newpost-readmore {
    font-size: 16px;
    color: #000;
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
  .newpost-readmore:hover {
    color: var(--color-hover);
    text-decoration: underline;
  }
}

.content-list {
  width: 100%;
  .item-list {
    width: 100%;
    margin-bottom: 5px;
    .thumbnail-item {
      width: 100%;
      height: 225px;
      background-size: cover;
      background-position: center;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .content-item {
      padding: 15px;
      .tags-item {
        margin: 0px 0px 5px;
        font-size: 12px;
        color: #d42929;
      }
      .post-title {
        margin: 10px 0 15px;
        font-size: 20px;
      }
      .time-post-item {
        margin: 10px 0;
        display: flex;
        p {
          font-size: 12px;
          font-style: normal;
        }
        .text-day {
          font-size: 12px;
          margin-right: 10px;
        }
      }
    }
  }
}
.newpost-list {
  padding-top: 40px;
}
</style>

<style lang="less">
.newpost {
  div {
    .VueCarousel {
      .VueCarousel-navigation {
        position: absolute;
        width: 140px;
        bottom: 0;
        left: 0;
        height: 70px;

        button {
          height: 70px;
          width: 70px;
          margin: 0 !important;
          transform: none !important;
          background-color: #fff !important;
          color: #000;
          transition: all 0.3s ease-in;
          top: 0 !important;
          outline: none;
        }
        button:hover {
          background-color: #000 !important;
          color: #fff;
        }
        button:focus {
          outline: none !important;
        }
      }
      .VueCarousel-pagination {
        position: absolute;
        width: max-content !important;
        bottom: 20px;
        left: 50% !important;
        .VueCarousel-dot-container {
          margin-top: 0 !important;
          button {
            margin-top: 0 !important;
          }
        }
      }
    }
  }
}
</style>