<template>
  <div class="container-follow">
    <div class="content-follow">Follow Us</div>
    <div class="about">
      <img class="author-follow" src="/images/team.jpg" />
      <p class="text-follow">
        Chúng tôi là tác giả của trang web này. Chúng tôi ở đây để chia sẻ nhiều
        thông tin cho bạn. Hãy theo dõi tôi trên phương tiện truyền thông xã hội
        để cập nhật thêm nhiều thông tin khác.
      </p>
      <!-- <div class="socials-icon">
        <a class="icon" href="http://www.facebook.com" target="_blank"
          ><a-icon type="facebook" :style="{ fontSize: '22px' }"
        /></a>

        <a class="icon" href="http://www.instagram.com" target="_blank"
          ><a-icon type="instagram" :style="{ fontSize: '22px' }"
        /></a>

        <a class="icon" href="http://www.twitter.com" target="_blank"
          ><a-icon type="twitter" :style="{ fontSize: '22px' }"
        /></a>

        <a class="icon" href="http://www.youtube.com" target="_blank"
          ><a-icon type="youtube" :style="{ fontSize: '22px' }"
        /></a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.container-follow {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eaeaec;
}
.about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.content-follow {
  padding: 15px;
  border-bottom: 1px solid #d9d9d9;
  text-align: center;
  background: none;
  margin: 0 0 20px 0;
  font-size: 23px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: capitalize;
  color: #2f3235;
  width: 100%;
}
.socials-icon {
  display: flex;
  justify-content: center;
  .icon {
    margin: 0 5px;
  }
}
.author-follow {
  border-radius: 50%;
  object-fit: cover;
  width: 318px;
  height: 318px;
}
.text-follow {
  text-align: center;
  padding: 20px;
}
</style>
