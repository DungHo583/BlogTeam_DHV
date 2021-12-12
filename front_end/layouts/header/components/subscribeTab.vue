<template>
  <div class="container-subscribe">
    <div class="content-subscribe">Subscribe Us</div>
    <form id="form-subscribe" method="submit" class="box-subscribe">
      <div class="input-name">
        <p class="text-subscribe">Your Name:</p>
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          class="input-name-text"
          required=""
        />
      </div>
      <div class="input-email">
        <p class="text-subscribe">Email Address:</p>
        <input
          name="Email"
          type="email"
          placeholder="Your Email Address"
          class="input-email-text"
          required=""
        />
      </div>
      <div class="submit-subscribe">
        <input
          type="submit"
          class="submit-subscribe-button"
          value="Subscribe"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.container-subscribe {
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eaeaec;
}
.content-subscribe {
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
.input-name {
  border-bottom: 1px solid #eaeaec;
  outline: none;
}
.input-name:hover {
  border-bottom: 1px solid red;
}
.input-name-text {
  border: none;
  outline: none;
  width: 100%;
}
.input-email {
  padding-top: 20px;
  border-bottom: 1px solid #eaeaec;
  outline: none;
}
.input-email:hover {
  border-bottom: 1px solid red;
}
.input-email-text {
  width: 100%;
  border: none;
  outline: none;
}
.text-subscribe {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.7;
  color: #4c4f53;
  font-family: "Muli", sans-serif;
}
.submit-subscribe {
  margin-top: 20px;
}
.submit-subscribe-button {
  border-radius: 5px;
  border: none;
  outline: none;
  display: inline-block;
  padding: 0 30px;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  background: #1f2123;
  border-radius: 0;
  cursor: pointer;
}
.submit-subscribe-button:hover {
  background: #d42929;
}
</style>
