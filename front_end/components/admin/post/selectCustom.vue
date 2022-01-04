<template>
  <div class="select-custom" v-click-outside="hide">
    <div class="select-item" @click="changeSelect">
      <span class="label-select">{{ getName() }}</span>
      <a-icon :type="show ? 'up' : 'down'" />
    </div>
    <ul class="dropdown-select">
      <li
        class="dropdown-item"
        @click="handleChange(item)"
        v-for="(item, idx) in list"
        :key="idx"
        :class="{ active: selected && item._id == selected._id }"
      >
        <span class="name-item-dropdown">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
export default {
  props: {},
  data() {
    return {
      show: false,
      selected: { _id: 12346, name: "value 2" },
      list: [
        {
          _id: 12345,
          name: "value 1",
        },
        {
          _id: 12346,
          name: "value 2",
        },
      ],
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    hide() {
      this.show = false;
    },
    changeSelect() {
      this.show = !this.show;
    },

    handleChange(event) {
      this.show = false;
      console.log("select", event);
      //   this.$emit("getEvent", event);
    },

    getName() {
      if (this.selected) return this.selected.name;
      if (this.placeholder) return this.placeholder;
      return "";
    },
  },
};
</script>

<style lang="less" scoped>
</style>