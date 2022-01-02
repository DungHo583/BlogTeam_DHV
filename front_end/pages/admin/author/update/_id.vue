<template>
  <div class="">Đây là id</div>
</template>

<script>
export default {
  data() {
    return {
      getIdCate: null,
    }
  },
  mounted() {
    this.getID();
  },
  methods: {
    getID() {
      this.getIdCate = this.$route.params.id;
      console.log("getIdCate", this.getIdCate);
    }
  }
}
</script>

<style>

</style>