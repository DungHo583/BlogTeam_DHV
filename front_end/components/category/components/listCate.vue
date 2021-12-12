<template>
  <div class="list-cate">
    <div class="title-list-cate">
      <h3 class="text-title">{{ titleCate }}</h3>
    </div>
    <div class="body-list-cate">
      <carousel :per-page="4" :mouse-drag="false">
        <slide v-for="(item, idx) in listProd" :key="idx">
          <div
            class="item-slide"
            :style="{ backgroundImage: `url(${item.thumbnail})` }"
          >
            <div class="content-inner">
              <div class="header-content-inner">
                <h3 class="title-prod-inner">
                  {{ item.name }} - {{ item.code_prod }}
                </h3>
                <div class="box-price-rating">
                  <a-rate :default-value="item.rate" allow-half />
                  <p class="price-prod">{{ item.price }}</p>
                </div>
              </div>
              <div class="body-content-inner">
                <p class="short-description">
                  {{ item.short_desc }}
                </p>
                <a-button ghost class="btn-detail"> Xem chi tiết </a-button>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
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
</style>

<style  scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>