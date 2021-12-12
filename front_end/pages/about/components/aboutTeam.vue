<template>
  <div class="about-team">
    <div class="content-thumbnail-author">
      <div class="thumbnail-author-item">
        <img class="author-item-team" src="/images/avtD.jpg" width="100%" />
        <div class="author-info-team">
          <div class="border-left"></div>
          <div class="content-my-info">
            <span class="text-my-name">Đạtt Demon</span>
            <span class="text-my-info">Front-End ReactJS</span>
          </div>
        </div>
      </div>
      <div class="thumbnail-author-item">
        <img class="author-item-team" src="/images/avtD.jpg" width="100%" />
        <div class="author-info-team">
          <div class="border-left"></div>
          <div class="content-my-info">
            <span class="text-my-name">Dũng Hồ</span>
            <span class="text-my-info">Front-End VueJS</span>
          </div>
        </div>
      </div>
      <div class="thumbnail-author-item">
        <img class="author-item-team" src="/images/avtD.jpg" width="100%" />
        <div class="author-info-team">
          <div class="border-left"></div>
          <div class="content-my-info">
            <span class="text-my-name">Quang Phan</span>
            <span class="text-my-info">Front-End VueJS</span>
          </div>
        </div>
      </div>
      <div class="thumbnail-author-item">
        <img class="author-item-team" src="/images/avtD.jpg" width="100%" />
        <div class="author-info-team">
          <div class="border-left"></div>
          <div class="content-my-info">
            <span class="text-my-name">Hoàng Titan</span>
            <span class="text-my-info">Front-End VueJS</span>
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
  position: relative;

  .author-info-team {
    position: absolute;
    left: 0;
    bottom: 0;
    background: white;
    width: 70%;
    height: 40%;
    border-radius: 5px;
    display: flex;
  }
  .border-left {
    margin-top: 30px;
    border-top: 4px solid #419428;
    width: 20%;
  }
  .content-my-info {
    width: 100%;
    padding: 30px 0 0 10px;
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
