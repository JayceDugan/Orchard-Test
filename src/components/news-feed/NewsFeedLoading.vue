<template>
  <section class="news-feed-loading text--center">
    <LoadingSpinner class="mb-10" />
  </section>
</template>

<script>
import LoadingSpinner from '@/components/layout/LoadingSpinner'

export default {
  name: 'NewsFeedLoading',
  components: {
    LoadingSpinner
  }
}
</script>

<style lang="scss">
.news-feed-loading {
  .lds-ripple {
    margin: 0 auto;
  }
}
</style>
