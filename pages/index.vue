<template>
  <div class="container">
    <Logo />
    <h1 class="title">
      nuxt-demo
    </h1>
    <template v-for="item in list">
      {{item.itemName}}
    </template>
  </div>
</template>

<script>
export default {
  // only in pages/*.vue, and its return value is merged with data
  // in this method, you cannot use the instance: this
  async asyncData({$axios}) {
    const {data} = await $axios.get('/getNav');
    return {
      list: data
    };
  }
}
</script>

<style>
</style>
