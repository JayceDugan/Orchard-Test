<template>
  <div class="home">
    <news-feed />
  </div>
</template>

<script>
import NewsFeed from '@/components/news-feed/NewsFeed'

export default {
  name: 'Home',
  components: {
    NewsFeed
  }
}
</script>
