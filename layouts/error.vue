<template>
  <div class="error-wrap">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  layout: 'blank'
}
</script>
