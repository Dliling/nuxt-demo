<template>
  <div class="layout-wrap">
    <Header></Header>
    <section class="nuxt-wrap">
      <Nuxt />
    </section>
    <Footer></Footer>
  </div>
</template>

<style lang="less" scoped>
.layout-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;

  .nuxt-wrap {
    flex: 1;
  }
}
</style>
