<template>
  <div class="intro">
    <div class="intro-blog">
      <div class="intro-img">
        <img src="/images/intro.png" width="100%" />
      </div>
      <div class="intro-info">
        <div class="content-intro-blog">Pharetra Etiam Inceptos</div>
        <div class="text-intro-blog">
          Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus
          mollis interdum. Donec id elit non mi porta gravida at eget metus.
          Aenean lacinia.
        </div>
        <div class="text-list-intro-blog">
          <ul class="list-into-item">
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Vestibulum id ligula</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Egestas Fermentum</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Ultricies Bibendum.</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Fermentum Tellus</span>
            </li>
          </ul>
          <ul class="list-into-item">
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Vestibulum id ligula</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Adipiscing Vulputate</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into"> Fringilla Quam Elit</span>
            </li>
            <li class="list-intro-item-content">
              <a-icon
                type="check-circle"
                theme="filled"
                :style="{ fontSize: '20px', color: '#23a455' }"
              />
              <span class="text-list-into">CommodoVestibulum</span>
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
