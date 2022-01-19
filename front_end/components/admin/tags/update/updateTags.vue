<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tên tags:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập tag"
            v-model="title"
            @input="changeTitle"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Mô tả:</h3>
          </div>
          <textarea
            class="area-group"
            rows="4"
            placeholder="Nhập mô tả ..."
            v-model="descTags"
            @input="changeDesc"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["getTags", "checkSave"],
  mounted() {},
  watch: {
    getTags() {
      this.title = this.getTags.title;
      this.descTags = this.getTags.description;
      this.dataTags = {
        title: this.getTags.title,
        description: this.getTags.description,
      };
    },
    checkSave() {
      this.getPropsTag();
    },
  },
  data() {
    return {
      title: "",
      descTags: "",
      waitInput: null,
      dataTags: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    changeTitle() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataTags.title = this.title;
        this.$emit("getValue", this.dataTags);
      }, 500);
    },

    changeDesc() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataTags.description = this.descTags;
        this.$emit("getValue", this.dataTags);
      }, 500);
    },

    async getPropsTag() {
      this.dataTags = await {
        title: this.getTags.title,
        description: this.getTags.description,
      };
      this.$emit("getValue", this.dataTags);
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
