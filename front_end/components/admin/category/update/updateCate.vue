<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tên danh mục:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập tên danh mục ..."
            v-model="nameCate"
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
            v-model="shortDesc"
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
            <h3 class="text-title">Mô tả danh mục:</h3>
          </div>
          <textarea
            class="area-group"
            rows="4"
            placeholder="Nhập mô tả ..."
            v-model="descCate"
            @input="changeDesc"
          >
          </textarea>
        </div>
      </div>
      <!--  -->
      <!-- <div class="r">
        <div class="form-input-group">
          <label for="">Mô tả ngắn:</label>
          <input type="text" class="input-group" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["getCategory"],
  mounted() {
    this.getPropsCate();
  },
  data() {
    return {
      nameCate: "",
      shortDesc: "",
      descCate: "",
      waitInput: null,
      dataCate: {
        name: "",
        short_desc: "",
        description: "",
      },
    };
  },
  methods: {
    changeName() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataCate.name = this.nameCate;
        this.$emit("getValue", this.dataCate);
      }, 500);
    },
    changeShort() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataCate.short_desc = this.shortDesc;
        this.$emit("getValue", this.dataCate);
      }, 500);
    },
    changeDesc() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataCate.description = this.descCate;
        this.$emit("getValue", this.dataCate);
      }, 500);
    },

    async getPropsCate() {
      this.nameCate = this.getCategory.name;
      this.shortDesc = this.getCategory.short_desc;
      this.descCate = this.getCategory.description;
      this.dataCate = await {
        name: this.getCategory.name,
        short_desc: this.getCategory.short_desc,
        description: this.getCategory.description,
      };
      this.$emit("getValue", this.dataCate);
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