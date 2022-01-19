<template>
  <div class="contact">
    <div class="layout-container">
      <!-- <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item>Trang chủ</a-breadcrumb-item>
        <a-breadcrumb-item>liên hệ</a-breadcrumb-item>
      </a-breadcrumb> -->
      <!-- <h2 class="contact-title">Gửi bình luận cho chúng tôi</h2> -->
      <a-row :gutter="40" class="contact-above">
        <!-- <a-col :lg="12" :md="12" :sm="24" class="contact-left">
          
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Tên của bạn"
              class="form-input-item form-input-name-item"
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
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Địa chỉ Email"
              class="form-input-item form-input-email-item"
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
              v-bind="formItemLayout"
              label="Phone Number"
              class="form-input-item form-input-phone-item"
            >
              <a-input
                class="form-input"
                type="tel"
                placeholder="Nhập SĐT của bạn"
                v-decorator="[
                  'phone',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Hãy nhập SĐT của bạn!',
                      },
                    ],
                  },
                ]"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Nội dung"
              class="form-input-item form-input-comment-item"
            >
              <a-textarea
                placeholder="Nhập nội dung"
                auto-size
                v-decorator="[
                  'comment',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Hãy nhập nội dung của bạn!',
                      },
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
                Gửi bình luận
              </a-button>
            </a-form-item>
          </a-form>
        </a-col> -->
        <a-col :lg="12" :md="12" :sm="24" class="contact-right">
          <h2 class="contact-title">Contact</h2>
          <div class="contact-right-item contact-address">
            <div class="contact-icons">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-text">
              <label
                for="phone"
                name="phone"
                class="contact-text-label no-mar-pad"
                >Địa chỉ liên hệ:</label
              >
              <p class="contact-text-content no-mar-pad">
                Đại học Vinh, 128 Lê Duẩn, Nghệ An
              </p>
            </div>
          </div>
          <div class="contact-right-item contact-phone">
            <div class="contact-icons">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-text">
              <label
                for="phone"
                name="phone"
                class="contact-text-label no-mar-pad"
                >Số điện thoại:</label
              >
              <p class="contact-text-content no-mar-pad">
                <a href="tel: +84987654321" class="contact-link phone-number"
                  >+84987654321</a
                >
                Thứ 2 - Chủ nhật: 9:00 - 18:00
              </p>
            </div>
          </div>
          <div class="contact-right-item contact-email">
            <div class="contact-icons">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-text">
              <label
                for="phone"
                name="phone"
                class="contact-text-label no-mar-pad"
                >Email:</label
              >
              <p class="contact-text-content no-mar-pad">
                <a href="mailto: teamblog@gmail.com" class="contact-link email"
                  >teamblog@gmail.com</a
                >
              </p>
            </div>
          </div>
        </a-col>
        <a-col :lg="12" :md="12" :sm="24" class="contact-right">
          <h2 class="contact-title">Us team</h2>

          <img
            src="images/team.jpg"
            style="width: 100%; height: 300px; object-fit: cover"
          />
        </a-col>
      </a-row>
    </div>
    <a-row class="contact-google-map">
      <div class="contact-map layout-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.110234831391!2d105.69355575010617!3d18.659048669732936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139cc2ca3ccbf09%3A0xbd183e7e516c5dac!2zxJDhuqFpIEjhu41jIFZpbmg!5e0!3m2!1svi!2s!4v1638435996081!5m2!1svi!2s"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </a-row>
  </div>
</template>

<script>
export default {
  layout: "base",
  data() {
    return {
      // form
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
.contact-title {
  font-size: 24px;
  font-weight: 600;
  display: block;
  color: var(--color-title);
}
.contact {
  padding-top: 20px;
  padding-bottom: 60px;
  .contact-above {
    padding-bottom: 30px;
    .contact-right {
      padding-top: 40px;
      .contact-right-item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .contact-icons {
          margin-right: 20px;
          width: 40px;
          height: 40px;
          background: var(--white-color);
          border: 1px solid var(--color-text);
          color: var(--color-text);
          text-align: center;
          justify-content: center;
          line-height: 40px;
          border-radius: 50%;
        }
        .contact-text {
          .contact-text-label {
            font-size: 17px;
            font-weight: 600;
            display: block;
            color: var(--color-title);
          }
          .contact-link {
            font-size: 16px;
            color: var(--color-text);
            &:hover {
              color: var(--color-hover);
            }
          }
          .contact-text-content {
            font-size: 16px;
          }
        }
      }
    }
  }
}
.contact_map {
  width: 100%;
  height: 400px;
}
.ant-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  &:hover {
    border-color: var(--color-hover) !important;
  }
}
.ant-form label {
  font-size: 16px;
  font-weight: 600;
}
.ant-input:focus {
  box-shadow: none;
  border-color: var(--color-hover) !important;
}
.has-error .ant-input:focus {
  box-shadow: none;
}
.ant-form-item-label {
  font-weight: 600;
  line-height: 1.7;
}
</style>
;
