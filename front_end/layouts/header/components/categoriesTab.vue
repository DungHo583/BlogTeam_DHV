<template>
  <div class="container-categories">
    <div class="content-categories">Categories</div>
    <div class="box-categories">
      <a href="/"><p class="text-categories">Dat</p></a>
      <a href="/"><p class="text-categories">Dung</p></a>
      <a href="/"><p class="text-categories">Hoang</p></a>
      <a href="/"><p class="text-categories">Quang</p></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.container-categories {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eaeaec;
}
.content-categories {
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
.box-categories {
  margin: 0;
}
.text-categories {
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
.text-categories:hover {
  color: red;
  text-decoration: underline;
}
</style>
