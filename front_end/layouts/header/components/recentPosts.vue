<template>
  <div class="container-follow">
    <div class="content-follow">Recent Posts</div>
    <div class="box-title">
      <a href="/"
        ><p class="text-recent">
          Photo of woman using black corded headphones
        </p></a
      >
      <a href="/"
        ><p class="text-recent">Woman standing on middle of road</p></a
      >
      <a href="/"><p class="text-recent">Using black camera outdoors</p></a>
      <a href="/"
        ><p class="text-recent">
          Pensive male graphic designer working on freelance
        </p></a
      >
      <a href="/"
        ><p class="text-recent">Standing and chatting outside building</p></a
      >
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
.box-title {
  padding-top: 20px;
}
.text-recent {
  padding-right: 10px;
  overflow: hidden;
  word-wrap: break-word;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  font-family: "Muli", sans-serif;
  color: #4c4f53;
}
.text-recent:hover {
  color: red;
  text-decoration: underline;
}
</style>
