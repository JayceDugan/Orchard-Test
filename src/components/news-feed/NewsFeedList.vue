<template>
  <section
    class="news-feed__list"
    data-cy="news-feed-list"
  >
    <news-feed-item
      v-for="item in articles"
      :key="item.id"
      v-bind="item"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import NewsFeedItem from './NewsFeedItem'

export default {
  name: 'NewsFeedList',
  components: {
    NewsFeedItem
  },
  computed: {
    ...mapGetters({
      articles: 'news/all'
    })
  }
}
</script>

<style lang="scss" scoped>
.news-feed__list {
  --news-feed-grid-columns: 3;
  --news-feed-grid-gap: 24px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(0, 384px));
  grid-gap: var(--news-feed-grid-gap);
  justify-content: center;
}
</style>
