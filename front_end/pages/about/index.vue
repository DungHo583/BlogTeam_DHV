<template>
  <div class="layout-container">
    <div class="content-container-about-top">
      <div class="title-about-page">THE MOST POWERFUL THEME ON EARTH</div>
      <div class="content-about-page">We are a team of expert designers</div>
      <div class="text-about-page">
        Hãy cùng đồng hành trong quá trình phát triển của chúng tôi, để có thể
        tạo ra những giá trị tốt nhất cho cộng đồng. Cũng như đưa ra các nhận
        xét và góp ý để chúng tôi ngày một trưởng thành và phát triển hơn nữa.
      </div>
    </div>
    <aboutTeam />
    <introBlog />
    <aboutServices />
  </div>
</template>

<script>
import introBlog from "./components/introBlog.vue";
import aboutServices from "./components/aboutServices.vue";
import aboutTeam from "./components/aboutTeam.vue";
export default {
  layout: "base",
  components: { introBlog, aboutServices, aboutTeam },
};
</script>

<style>
.content-container-about-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
}
.title-about-page {
  color: #419428;
  font-family: "Poppins", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 1px;

  margin: 0;
  line-height: 1;
  padding: 0px 0px 40px 0px;
}
.content-about-page {
  color: #121212;
  font-family: "Playfair Display";
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
  padding: 0px 0px 20px 0px;
}
.text-about-page {
  text-align: center;
  color: rgba(18, 18, 18, 0.67);
  font-family: Sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 1px;
  margin: 20px 0px 0px 0px;
  padding: 0px 120px 0px 120px;
}
</style>
