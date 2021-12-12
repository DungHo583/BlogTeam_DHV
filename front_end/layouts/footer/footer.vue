<template>
  <div class="footer">
    <div class="footer-above">
      <a-row class="footer-above-inner layout-container">
        <a-col :lg="8" :md="24" class="footer-above-left">
          <div class="footer-about">
            <h2 class="footer-title">Về chúng tôi</h2>
            <ul class="contact-wrap no-mar-pad">
              <li class="contact-item no-list">
                Đại học Vinh, 128 Lê Duẩn, Nghệ An
              </li>
              <li class="contact-item no-list">
                Giờ mở cửa: 9:00 sáng đến 6:00 tối
              </li>
              <li class="contact-item no-list">
                Số điện thoại:
                <a href="tel:+84987654321">+84987654321</a>
              </li>
              <li class="contact-item no-list">
                Số Fax:
                <a href="tel:+84987654321">+84987654321</a>
              </li>
              <li class="contact-item no-list"></li>
              <li class="contact-item no-list">
                Email:
                <a href="mailto:TeamBlog@gmail.com">TeamBlog(@)teamblog.com</a>
              </li>
            </ul>
          </div>
          <div class="footer-connect">
            <h2 class="footer-title">Liên hệ</h2>
            <div class="social-connect">
              <a href="" class="social-links">
                <i class="social-icons fab fa-facebook-f"></i>
              </a>
              <a href="" class="social-links">
                <i class="social-icons fab fa-twitter"></i>
              </a>
              <a href="" class="social-links">
                <i class="social-icons fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </a-col>
        <a-col :lg="8" :md="24" class="footer-above-center">
          <h2 class="footer-title">Bài đăng gần đây</h2>
          <ul class="recent no-mar-pad">
            <li
              class="recent-post no-list"
              v-for="item in recentPost"
              :key="item.id"
            >
              <a class="recent-post-thumbnail-link no-underline">
                <img :src="item.img" alt="" class="recent-post-thumbnail" />
              </a>
              <div class="recent-text">
                <a class="recent-post-text-link no-underline" href="#">
                  <h3 class="recent-post-title no-mar-pad">
                    {{ item.title }}
                  </h3>
                  <p class="recent-post-create no-mar-pad">
                    {{ item.createdAt }}
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </a-col>
        <a-col :lg="8" :md="24" class="footer-above-right">
          <h2 class="footer-title">Đăng ký nhận tin</h2>
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item
              label="Tên của bạn"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              class="form-input-item form-input-name"
            >
              <a-input
                class="form-input"
                type="text"
                placeholder="Nhập tên của bạn"
                v-decorator="[
                  'name',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Hãy nhập tên đầy đủ của bạn!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item
              label="Địa chỉ Email"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              class="form-input-item form-input-email"
            >
              <a-input
                class="form-input"
                type="email"
                placeholder="Nhập email của bạn"
                v-decorator="[
                  'email',
                  {
                    rules: [
                      { required: true, message: 'Hãy nhập email của bạn!' },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              class="form-input-item btn-item"
            >
              <a-button type="primary" html-type="submit" class="btn-submit">
                ĐĂNG KÝ
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </div>
    <div class="footer-below">
      <a-row class="footer-below-inner layout-container">
        <a-col :lg="12" :md="24" class="footer-below-right">
          <ul class="footer-menu no-mar-pad">
            <li class="no-list" v-for="item in footermenuList" :key="item.id">
              <nuxt-link :to="item.path">{{ item.menuitem }}</nuxt-link>
            </li>
          </ul>
        </a-col>
        <a-col :lg="12" :md="24" class="footer-below-left">
          <div class="text-footer-info">
            <p class="text-copyright no-mar-pad">
              Copyright All Rights Reserved 2021
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
    <a-back-top>
      <div class="ant-back-top-inner">
        <a-icon type="arrow-up" />
      </div>
    </a-back-top>
  </div>
</template>

<script>
import dataDemo from "~/api/footerList.json";
export default {
  data() {
    return {
      contactList: dataDemo.contactList,
      socialList: dataDemo.socialList,
      recentPost: dataDemo.recentPost,
      footermenuList: dataDemo.footermenuList,

      // subscribe
      formLayout: "vertical",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style lang="less">
.footer-below-inner {
  padding: 10px 0 !important;
  height: 70px;
}
.footer-above {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.footer-above-left {
  padding-top: 50px;
  padding-right: 20px;
}
.contact-wrap {
  margin-bottom: 40px;
  .contact-item {
    margin-bottom: 0;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7;
    color: var(--color-text);
    a {
      color: var(--color-text);
      &:hover {
        color: var(--color-hover);
      }
    }
  }
}
.social-connect {
  display: flex;
  .social-links {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background: var(--white-color);
    border: 1px solid var(--color-time);
    color: var(--color-text);
    text-align: center;
    justify-content: center;
    line-height: 30px;
    border-radius: 50%;
    display: inline-block;
    &:hover {
      color: var(--color-time) !important;
    }
  }
}
.footer-title {
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 25px;
  font-family: "Prata", serif;
}
.footer-above-center {
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 20px;
}
.recent-post {
  display: flex;
  margin-bottom: 14px;
  .recent-post-thumbnail-link {
    margin-right: 15px;
    width: 80px;
    height: 80px;
    .recent-post-thumbnail {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .recent-text {
    margin: auto 0;
    flex: 4;
  }
}
.recent-post-text-link {
  color: var(--color-text);
  &:hover {
    color: var(--time-color);
  }
}
.recent-post-title {
  font-family: "Prata", serif;
  margin-bottom: 0;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  &:hover {
    color: var(--color-hover);
  }
}
.recent-post-create {
  font-size: 13px;
}
.footer-above-right {
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 20px;
}
.ant-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  font-size: 16px;
  &:hover {
    border-color: var(--color-hover) !important;
  }
}
.ant-input:focus {
  box-shadow: none;
  border-color: var(--color-hover) !important;
}
.has-error .ant-input:focus {
  box-shadow: none;
}
.form-input-item {
  font-size: 16px !important;
  line-height: 1.7;
  font-weight: normal;
  label {
    font-weight: 600;
  }
}
// footer below
.footer-below {
  font-size: 17px;
  padding-top: 10px;
  line-height: 1.7;
  color: #636363;
}
.footer-below-inner {
  .ant-col {
    height: 100%;
  }
}

.footer-below-inner a {
  color: var(--color-title);
  &:hover {
    color: var(--color-hover);
  }
}
.footer-below-left {
  float: left !important;
}
.footer-below-right {
  float: right !important;
}
.footer-menu {
  display: flex;
  justify-content: flex-end;
  a {
    line-height: 3;
    padding: 12px;
  }
}

.text-footer-info {
  height: 100%;
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 991px) {
  .footer-menu {
    justify-content: left;
  }
  .footer-above {
    padding-bottom: 20px;
  }
  .footer-above-center {
    border: none;
    padding-left: 0;
  }
  .footer-above-right {
    padding-left: 0;
  }
  .footer-below-left {
    float: none !important;
  }
  .footer-below-right {
    float: none !important;
    .footer-menu {
      justify-content: flex-start;
    }
  }
 
}
</style>