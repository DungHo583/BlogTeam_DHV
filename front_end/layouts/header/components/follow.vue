<template>
  <div class="container-follow-us">
    <div class="content-follow-us">Follow Us</div>

    <div class="socials-icon-us">
      <a class="icon-us" href="http://www.facebook.com" target="_blank"
        ><a-icon type="facebook" :style="{ fontSize: '22px' }"
      /></a>

      <a class="icon-us" href="http://www.instagram.com" target="_blank"
        ><a-icon type="instagram" :style="{ fontSize: '22px' }"
      /></a>

      <a class="icon-us" href="http://www.twitter.com" target="_blank"
        ><a-icon type="twitter" :style="{ fontSize: '22px' }"
      /></a>

      <a class="icon-us" href="http://www.youtube.com" target="_blank"
        ><a-icon type="youtube" :style="{ fontSize: '22px' }"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.container-follow-us {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eaeaec;
}
.content-follow-us {
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

.socials-icon-us {
  display: flex;
  justify-content: center;
  .icon-us {
    margin: 0 10px;
  }
}
.author-follow-us {
  width: 318px;
  height: 318px;
}
.text-follow-us {
  text-align: center;
  padding: 20px;
}
</style>
