<template>
  <div>about</div>
</template>

<script>
export default {
  data () {
    return {
      metaInfo: {}
    };
  },
  async fetch() {
    const {data} = await this.$axios.get('/getHead');
    this.metaInfo = data;
  },
  head () {
    return {
      title: this.metaInfo.title,
      meta: this.metaInfo.meta,
      link: this.metaInfo.link
    };
  }
}
</script>
