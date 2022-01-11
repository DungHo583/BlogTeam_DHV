<template>
  <div class="content-author">
    <div class="layout-container">
      <h2 class="author-title">Form Author</h2>
      <div class="author-above">
        <div class="author-left">
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
                Submit
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
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
.content-author {
  padding-top: 20px;
  padding-bottom: 60px;

  .author-above {
    padding-bottom: 30px;
    .author-right {
      padding-top: 40px;
      .author-right-item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .author-icons {
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
        .author-text {
          .author-text-label {
            font-size: 17px;
            font-weight: 600;
            display: block;
            color: var(--color-title);
          }
          .author-link {
            font-size: 16px;
            color: var(--color-text);
            &:hover {
              color: var(--color-hover);
            }
          }
          .author-text-content {
            font-size: 16px;
          }
        }
      }
    }
  }
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
