<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Ảnh tiêu đề:</h3>
          </div>
          <div class="box-upload-img">
            <uploadIMG @uploaded="getUploaded" />
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
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Danh mục:</h3>
          </div>
          <selectOrtherCustom
            :selected="selectedCate"
            :list="listSelectCate"
            @getEvent="getSelectCate"
          />
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Thẻ tag:</h3>
          </div>
          <multiSelect
            :selected="selectedTags"
            :list="listSelectTag"
            @getEvent="getSelectTag"
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
import uploadIMG from "~/components/admin/post/create/uploadImg";
import selectCustom from "~/components/admin/post/selectCustom";
import selectOrtherCustom from "~/components/admin/post/selectOrtherCustom";
import multiSelect from "~/components/admin/post/multiSelectCustom";

export default {
  components: {
    selectCustom,
    uploadIMG,
    selectOrtherCustom,
    multiSelect,
  },
  data() {
    return {
      titlePost: "",
      shortPost: "",
      descPost: "",
      waitInput: null,
      dataPost: {
        thumbnail: "",
        title: "",
        short_desc: "",
        description: [],
        author: "",
        tags: "",
        category: "",
      },
      selected: { _id: 0, name_author: "Chọn tác giả" },
      listSelect: [],
      selectedCate: { _id: 0, title: "Chọn danh mục" },
      listSelectCate: [],
      selectedTags: { _id: 0, title: "Chọn thẻ tag" },
      listSelectTag: [],
      config: {
        placeholderText: "Nhập nội dung bài viết !",
        charCounterCount: false,
      },
    };
  },
  mounted() {
    this.fetchAuthor();
    this.fetchCategory();
    this.fetchTags();
  },
  watch: {
    descPost() {
      this.dataPost.description = this.descPost;
      this.$emit("getValue", this.dataPost);
    },
  },
  methods: {
    changeName() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataPost.title = this.titlePost;
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

    getUploaded(event) {
      this.dataPost.thumbnail = event[0].thumbUrl;
      setTimeout(() => {
        this.$emit("getValue", this.dataPost);
      }, 1000);
    },

    async fetchAuthor() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/author");
      if (response.data && response.data.success == true) {
        this.listSelect = response.data.data;
      }
    },

    getSelect(event) {
      this.selected = event;
      console.log("select ev", event);
      this.dataPost.author = this.selected._id;
      this.$emit("getValue", this.dataPost);
    },

    async fetchCategory() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/category");
      if (response.data && response.data.success == true) {
        this.listSelectCate = response.data.data;
      }
    },

    getSelectCate(event) {
      this.selectedCate = event;
      this.dataPost.category = this.selectedCate._id;
      this.$emit("getValue", this.dataPost);
    },

    async fetchTags() {
      const url = process.env.API_BLOG;
      const response = await this.$axios.get(url + "/api/tags");
      if (response.data && response.data.success == true) {
        this.listSelectTag = response.data.data;
      }
    },

    getSelectTag(event) {
      this.selectedTags = event;
      this.dataPost.tags = this.selectedTags._id;
      this.$emit("getValue", this.dataPost);
    },

    handleCancel() {
      this.previewVisible = false;
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