<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
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
      <!--  -->
      <div class="r">
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
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="l">
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
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <!-- <label for="">Tác giả:</label> -->
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
export default {
  components: { selectCustom },
  data() {
    return {
      titlePost: "",
      shortPost: "",
      descPost: "",
      waitInput: null,
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
</style>