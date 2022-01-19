<template>
  <div class="about-team">
    <div class="content-thumbnail-author">
      <div class="thumbnail-author-item">
        <a
          href="https://www.facebook.com/datisme.111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="author-item-team" src="/images/avtD.jpg" width="100%" />
          <div class="author-info-team">
            <div class="border-left"></div>
            <div class="content-my-info">
              <span class="text-my-name">Đạtt Demon</span>
              <span class="text-my-info">Front-End ReactJS</span>
            </div>
          </div>
        </a>
      </div>
      <div class="thumbnail-author-item">
        <a
          href="https://www.facebook.com/dungho.99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="author-item-team"
            src="/images/avtDung.jpeg"
            width="100%"
          />
          <div class="author-info-team">
            <div class="border-left"></div>
            <div class="content-my-info">
              <span class="text-my-name">Dũng Hồ</span>
              <span class="text-my-info">Front-End VueJS</span>
            </div>
          </div>
        </a>
      </div>
      <div class="thumbnail-author-item">
        <a
          href="https://www.facebook.com/phanquang.07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="author-item-team" src="/images/avtQ.jpeg" width="100%" />
          <div class="author-info-team">
            <div class="border-left"></div>
            <div class="content-my-info">
              <span class="text-my-name">Phan Quang</span>
              <span class="text-my-info">Front-End VueJS</span>
            </div>
          </div>
        </a>
      </div>
      <div class="thumbnail-author-item">
        <a
          href="https://www.facebook.com/yeu.mamayeu.3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="author-item-team" src="/images/avtH.jpeg" width="100%" />
          <div class="author-info-team">
            <div class="border-left"></div>
            <div class="content-my-info">
              <span class="text-my-name">Hoàng Titan</span>
              <span class="text-my-info">Front-End VueJS</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.about-team {
  padding-bottom: 150px;
}
.content-thumbnail-author {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.thumbnail-author-item {
  width: 24%;
  height: 410px;
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  overflow: hidden;
  .author-item-team {
    vertical-align: middle;
    border-style: none;
    height: 100%;
    object-fit: cover;
  }
  .author-info-team {
    position: absolute;
    left: 0;
    bottom: 0;
    background: white;
    width: 77%;
    height: 20%;
    border-radius: 0 5px 0 0;
    display: flex;
  }
  .border-left {
    margin-top: 28px;
    border-top: 4px solid #419428;
    width: 10%;
  }
  .content-my-info {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .text-my-name {
    flex: 1;
    color: #000000;
    font-family: "Playfair Display";
    font-size: 25px;
    font-weight: bold;
  }
  .text-my-info {
    flex: 1;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
