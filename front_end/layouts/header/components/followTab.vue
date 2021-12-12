<template>
  <div class="container-follow">
    <div class="content-follow">Follow Us</div>
    <div class="about">
      <img
        class="author-follow"
        src="https://templatesell.net/polite/wp-content/uploads/sites/3/2020/02/ava1.png"
      />
      <p class="text-follow">
        I am the author of this site. I am here to share lots of information to
        you regarding my expertise. Follow me in social media for the updates.
      </p>
      <div class="socials-icon">
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
      </div>
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
  width: 318px;
  height: 318px;
}
.text-follow {
  text-align: center;
  padding: 20px;
}
</style>
