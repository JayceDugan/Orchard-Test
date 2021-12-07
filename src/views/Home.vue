<template>
  <div class="home">
    <container>
      <news-feed />
    </container>
  </div>
</template>

<script>
import Container from '@/components/layout/Container'
import NewsFeed from '@/components/news-feed/NewsFeed'

export default {
  name: 'Home',
  components: {
    NewsFeed,
    Container
  }
}
</script>
