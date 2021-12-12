<template>
  <div class="layout-container">
    <div class="containe-related-post">
      <h1 class="content-related">Related Posts</h1>
      <div class="thumnail-related-img">
        <div class="thumnail-related-left">
          <img width="100%" src="/images/b1.jpg" />
          <div class="box-title-related">
            <a href="/">
              <h1 class="title-related">
                Photo of woman using black corded headphones
              </h1></a
            >
            <span class="date-related">January 30, 2020</span>
          </div>
        </div>
        <div class="thumnail-related-right">
          <img width="100%" src="/images/b2.jpg" />
          <div class="box-title-related">
            <a href="/">
              <h1 class="title-related">Using black camera outdoors</h1></a
            >
            <span class="date-related">January 28, 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.containe-related-post {
  width: 100%;
}
.content-related {
  padding-left: 15px;
  font-family: "Prata", serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  font-size: 26px;
  margin: 0;
}
.thumnail-related-img {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.thumnail-related-left {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.thumnail-related-right {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.box-title-related {
  padding: 20px 15px 0;
}
.title-related {
  font-family: "Prata", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
}
.title-related:hover {
  text-decoration: underline;
  transition: color 0.2s ease, background-color 0.2s ease;
}
</style>
