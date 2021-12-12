<template>
  <div class="container">
    <form role="search" method="get" class="search-form" action="/">
      <label>
        <span class="text">Search for:</span>
        <input
          type="search"
          class="search"
          placeholder="Search …"
          value=""
          name="s"
        />
      </label>
      <input type="submit" class="search-submit" value="Search" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eaeaec;
}
.search-form {
  position: relative;
  display: flex;
  border-collapse: separate;
  width: 100%;
}
.text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}
.search {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: #4c4f53;
  background: #f7f8f8;
  border: 1px solid #f7f8f8;
  border-right: 0;
  height: 45px;
  padding: 10px 15px;
  border-radius: 0;
  box-shadow: none !important;
}
.search-submit {
  white-space: nowrap;
  vertical-align: middle;
  height: 45px;
  float: right;
  border: 1px solid #f7f8f8;
  background: #efefef;
  padding: 0 15px;
  margin-left: -1px;
  color: #6f6f6f;
  width: 100%;
}
</style>
