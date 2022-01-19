<template>
  <div class="about-services">
    <div class="box-about-services">
      <div class="border-top-about-services"></div>
      <span class="title-about-services">Các dịch vụ</span>
      <span class="text-about-services">
        Chúng tôi muốn tạo ra một website cung cấp thông tin, hữu ích về các
        lĩnh vực công nghệ. Ngoài ra còn có những sản phẩm hấp dẫn sẽ được cập
        nhật thường xuyên nhất để bạn có nhiều cơ hội tìm hiểu vê công nghệ
        nhiều hơn từ đó bạn sẽ có cơ hội phát triển nhiều hơn trong lĩnh vực
        này.
      </span>
    </div>
    <div class="box-info-blog-team">
      <div class="box-info-item">
        <div class="box-img">
          <img src="/images/number1.png" style="padding-right: 15px" />
        </div>
        <div class="box-content-info">
          <span class="content-info-blog-team">Đồ công nghệ</span>
          <span class="text-info-blog-team"
            >Các sản phẩm công nghệ tiên tiến.</span
          >
          <div class="border-info-blog-team"></div>
        </div>
      </div>
      <div class="box-info-item">
        <div class="box-img">
          <img src="/images/number2.png" style="padding-right: 15px" />
        </div>
        <div class="box-content-info">
          <span class="content-info-blog-team">Xu hướng công nghệ</span>
          <span class="text-info-blog-team"
            >Những công nghệ phổ biến sẽ đước sử dụng.</span
          >
          <div class="border-info-blog-team"></div>
        </div>
      </div>
      <div class="box-info-item">
        <div class="box-img">
          <img src="/images/number3.png" style="padding-right: 15px" />
        </div>
        <div class="box-content-info">
          <span class="content-info-blog-team">Review sản phẩm công nghệ.</span>
          <span class="text-info-blog-team"
            >Review các sản phẩm chất lượng được nhiều người ưa chuộng.</span
          >
          <div class="border-info-blog-team"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-services {
  padding-top: 150px;
}
.border-top-about-services {
  border-top: 4px solid #419428;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 140px;
}
.box-about-services {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-about-services {
  color: #121212;
  font-family: "Playfair Display";
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
}
.text-about-services {
  text-align: center;
  color: rgba(18, 18, 18, 0.67);
  font-family: Sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 1px;
  margin: 20px 0px 0px 0px;
  padding: 0px 140px;
}
.box-info-blog-team {
  display: flex;
  padding: 100px 0;
}
.box-info-item {
  display: flex;
  flex: 1;
}
.box-content-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 80px;
}
.content-info-blog-team {
  height: 75px;
  margin-bottom: 30px;
  color: #121212;
  font-family: "Poppins", Sans-serif;
  font-size: 25px;
  font-weight: 600;
}
.text-info-blog-team {
  color: rgba(18, 18, 18, 0.67);
  font-family: "Poppins" Sans-serif;
  font-size: 18px;
  font-weight: 300;
}
.border-info-blog-team {
  padding-top: 20px;
  border-bottom: 4px solid #eaeaec;
  width: 50px;
}
</style>
