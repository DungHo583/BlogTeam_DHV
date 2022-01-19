<template>
  <div class="list-cate">
    <div class="body-list-cate">
      <a-row :gutter="[30, 30]" class="row-orther-post">
        <a-col :span="8" class="col-orther-post">
          <div class="card-post-orther">
            <div class="thumbnail-inner-card">
              <img class="thumbnail-inner" src="" alt="" />
            </div>
            <div class="content-inner-card">
              <p class="text-time">Tháng 9, 2021</p>
              <h3 class="title-card">Can a Smoothie ....</h3>
              <div class="content-text">
                <p class="text-desc">
                  Most of us would agree – mornings are hectic. Getting yourself
                  and possibly others ready for the day ahead may...
                </p>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="8"></a-col>
        <a-col :span="8"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import dataSlide from "~/api/slideTechProd.json";
export default {
  props: {
    titleCate: String,
  },
  data() {
    return {
      listProd: dataSlide.list,
    };
  },
};
</script>

<style lang="less" scoped>
.list-cate {
  width: 100%;
  margin: 50px 0;
  .title-list-cate {
    margin-bottom: 15px;
    .text-title {
      font-size: 22px;
      line-height: 1.8;
      color: #000;
      font-style: normal;
      font-weight: 400;
      font-family: "Prata", serif;
    }
  }
}
.body-content-inner {
  .btn-detail {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .btn-detail:hover {
    border-color: var(--color-hover);
    color: white;
    background-color: var(--color-hover) !important;
  }
}

.body-list-cate {
  .row-orther-post {
    margin-top: 50px;
    .col-orther-post {
      .card-post-orther {
        width: 100%;
        height: 520px;
        background-color: #fff;
        .thumbnail-inner-card {
          width: 100%;
          overflow: hidden;
          height: 240px;
          cursor: pointer;
          .thumbnail-inner {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;
          }
        }
        .content-inner-card {
          padding: 34px 37px 45px;
          overflow: hidden;
          .text-time {
            margin-bottom: 20px;
            color: #777777;
            font-size: 15px;
          }
          .title-card {
            font-weight: bold;
            text-align: justify;
            color: #151515;
            font-size: 18px;
            margin-bottom: 18px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .title-card:hover {
            color: #76aa6f;
          }
          .content-text {
            width: 100%;
            .text-desc {
              text-align: justify;
              font-size: 15px;
              color: #777777;
              margin-bottom: 0;
            }
          }
        }
      }
      .card-post-orther:hover {
        .thumbnail-inner-card {
          .thumbnail-inner {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>