<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Ảnh minh hoạ:</h3>
          </div>
          <div class="box-upload-img">
            <div class="clearfix">
              <!-- <a-upload
                action=""
                list-type="picture-card"
                :file-list="fileList"
                @preview="handlePreview"
                @change="handleChange"
              >
                <div v-if="fileList.length < 1">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">Tải ảnh lên</div>
                </div>
              </a-upload> -->
              <a-upload
                accept="image/*"
                list-type="picture-card"
                class="avatar-uploader"
                :multiple="true"
                :show-upload-list="false"
                :beforeUpload="createFile"
              >
                <div v-if="isLoadImage">
                  <a-icon type="loading" />
                </div>
                <div v-else>
                  <a-icon width="2em" type="plus" />
                  <div class="ant-upload-text">Tải ảnh lên</div>
                </div>
              </a-upload>
              <!-- <a-modal
                :visible="previewVisible"
                :footer="null"
                @cancel="handleCancel"
              >
                <div class="box-thumnail-upload">
                  <img alt="example" style="width: 100%" :src="previewImage" />
                </div>
              </a-modal> -->
            </div>
            <div class="note-upload">
              <p class="text-note">
                <span class="warning-text">* </span>File ảnh tối đa 5Mb
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tiêu đề bài viết:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập tiêu đề bài viết ..."
            v-model="titlePost"
            @input="changeName"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Mô tả ngắn:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập mô tả ngắn ..."
            v-model="shortPost"
            @input="changeShort"
          />
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tác giả:</h3>
          </div>
          <selectCustom
            :selected="selected"
            :list="listSelect"
            @getEvent="getSelect"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="form-input-group form-editor">
        <div class="title-input">
          <h3 class="text-title">Nội dung bài viết:</h3>
        </div>
        <froala :tag="'textarea'" :config="config" v-model="descPost"></froala>
      </div>
    </div>
  </div>
</template>

<script>
import selectCustom from "~/components/admin/post/selectCustom";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: { selectCustom },
  data() {
    return {
      titlePost: "",
      shortPost: "",
      descPost: "",
      waitInput: null,
      previewVisible: false,
      previewImage: "",
      imageUrl: "",
      isLoadImage: false,
      dataPost: {
        title: "",
        short_desc: "",
        description: "",
      },
      selected: { _id: 12346, name: "value 2" },
      listSelect: [
        {
          _id: 12345,
          name: "value 1",
        },
        {
          _id: 12346,
          name: "value 2",
        },
      ],
      config: {
        placeholderText: "Nhập nội dung bài viết !",
        charCounterCount: false,
      },
    };
  },
  methods: {
    changeName() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataPost.name = this.titlePost;
        this.$emit("getValue", this.dataPost);
      }, 500);
    },
    changeShort() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataPost.short_desc = this.shortPost;
        this.$emit("getValue", this.dataPost);
      }, 500);
    },
    changeDesc() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataPost.description = this.descPost;
        this.$emit("getValue", this.dataPost);
      }, 500);
    },
    getSelect(event) {
      this.selected = event;
    },
    handleCancel() {
      this.previewVisible = false;
    },
    // handleChange(info) {
    //   if (info.file.status === "uploading") {
    //     this.loading = true;
    //     return;
    //   }
    //   if (info.file.status === "done") {
    //     // Get this url from response in real world.
    //     getBase64(info.file.originFileObj, (imageUrl) => {
    //       this.imageUrl = imageUrl;
    //       this.loading = false;
    //     });
    //   }
    // },

    // beforeUpload(file) {
    //   const isJpgOrPng =
    //     file.type === "image/jpeg" || file.type === "image/png";
    //   if (!isJpgOrPng) {
    //     this.$notify({
    //       type: "error",
    //       title: "Thất bại !",
    //       text: "Bạn chưa nhập tiêu đề bài viết !",
    //     });
    //     this.$message.error("You can only upload JPG file!");
    //   }
    //   const isLt2M = file.size < 5 * 1024 * 1024;
    //   if (!isLt2M) {
    //     this.$notify({
    //       type: "error",
    //       title: "Thất bại !",
    //       text: "Ảnh phải có dung lượng nhỏ hơn 5MB !",
    //     });
    //   }
    //   return isJpgOrPng && isLt2M;
    // },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },

    async beforeUpload(file) {
      this.isLoadImage = true;
      if (!file.type.match("image.*")) {
        alert("Select an image");
        return;
      }
      console.log(file);
      try {
        let error;
        if (
          !file.name.toLowerCase().endsWith(".jpeg") &&
          !file.name.toLowerCase().endsWith(".jpg") &&
          !file.name.toLowerCase().endsWith(".png") &&
          !file.name.toLowerCase().endsWith(".gif")
        ) {
          error = "Upload failed, Unspported file type";
        }
        if (file.size > 5 * 1024 * 1024) {
          error = "Upload failed, max file size is 5Mb";
        }
        if (error) {
          this.$notify({
            title: "Upload lỗi",
            message: error,
            type: "error",
          });
          return false;
        }

        let formData = new FormData();
        // let formHeader = {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     flag: "parseImage",
        //   },
        // };
        await formData.append("media", file);
        // await this.$api({
        //   baseUrl: process.env.API_POS,
        //   path: /media/upload/ + this.shopId,
        //   type: "post",
        //   options: formHeader,
        //   data: formData,
        // }).then((res) => {
        //   if (res.data.updated && res.data.updated.url) {
        //     this.product.images.push(res.data.updated.url);
        //     this.$notify({
        //       title: "Thành công",
        //       message: "Upload thành công!",
        //       type: "success",
        //     });
        //   }
        // });
      } catch (err) {
        console.log(err);
        this.$notify({
          title: "Thất bại",
          message: "Upload thất bại!",
          type: "error",
        });
      }
      this.isLoadImage = false;
    },
  },
};
</script>

<style lang="less" scoped>
.form-group {
  width: 100%;
}
.row-form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  .l {
    width: 48%;
  }
  .r {
    width: 48%;
  }
}

.row-form-item:last-child {
  margin-bottom: 0;
}

.form-input-group {
  width: 100%;
  .title-input {
    margin-bottom: 5px;
    .text-title {
      font-size: 16px;
    }
  }
  .input-group {
    padding: 10px 18px;
    color: #222a42;
    border: 1px solid #1d253b80;
    border-radius: 10px;
    width: 100%;
    outline: none;
  }

  .input-group:hover {
    border-color: #e14eca;
  }

  .input-group:focus {
    border-color: #e14eca;
  }

  .area-group {
    padding: 10px 18px;
    color: #222a42;
    border: 1px solid #1d253b80;
    border-radius: 10px;
    width: 100%;
    outline: none;
  }

  .area-group:hover {
    border-color: #e14eca;
  }

  .area-group:focus {
    border-color: #e14eca;
  }
}

.box-upload-img {
  display: flex;
  width: 100%;
  height: 110px;
  align-items: flex-start;
  justify-content: flex-start;
  .note-upload {
    margin-left: 25px;
    .text-note {
      color: #2f3235;
      font-size: 16px;
      .warning-text {
        color: #d42929;
      }
    }
  }
}

.box-thumnail-upload {
  margin-top: 25px;
}
</style>