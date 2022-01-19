<template>
  <div class="intro">
    <div class="intro-blog">
      <div class="intro-img">
        <img src="/images/intro.png" width="100%" />
      </div>
      <div class="intro-info">
        <div class="content-intro-blog">Tiêu Chí</div>
        <div class="text-intro-blog">
          Website của chúng tôi ra đời với sứ mệnh “Đưa ra những nhận xét, cái
          nhìn khách quan nhất về các sản phẩm công nghệ. Từ đó giúp người mua
          có thể tìm kiếm ra những sản phẩm phù hợp với bản thân, cũng như nhu
          cầu sử dụng.”
        </div>
        <div class="text-list-intro-blog">
          <ul class="list-into-item">
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Nhận xét khách quan</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Mô tả chân thực</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Sản phẩm tin cậy</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Đáp ứng nhu cầu</span>
            </li>
          </ul>
          <ul class="list-into-item">
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Công nghệ tiên tiến</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Sản phẩm ưa chuộng</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Nắm bắt xu thế</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">Đồng hành - Phát triển</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.intro-blog {
  width: 100%;
  display: flex;
  background-color: #f7f8ff;
  padding: 100px 0;
}
.intro-img {
  width: 100%;
  padding: 40px 80px 40px 40px;
}
.intro-info {
  padding: 40px 0;
  width: 100%;
}
.text-list-intro-blog {
  display: flex;
  padding-right: 40px;
}
.list-into-item {
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.content-intro-blog {
  color: #121212;
  font-family: "Playfair Display";
  font-size: 45px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: 0.3px;
  padding-bottom: 30px;
}
.text-intro-blog {
  color: rgba(0, 0, 0, 0.67);
  font-size: 20px;
  font-weight: 300;
  line-height: 36px;
  padding-bottom: 40px;
}
.text-list-into {
  padding-left: 16px;
  font-family: "Poppins", Sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 44px;
}
.list-intro-item-content {
  padding-bottom: 10px;
  padding-right: 15px;
}
</style>
