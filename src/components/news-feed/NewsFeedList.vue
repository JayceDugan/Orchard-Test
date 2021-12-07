<template>
  <section
    class="news-feed__list"
    data-cy="news-feed-list"
  >
<!--    <news-feed-list-item-->
<!--      v-for="item in articles"-->
<!--      :key="item.id"-->
<!--      v-bind="item"-->
<!--    />-->
    {{ articles }}
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewsFeedList',
  computed: {
    ...mapGetters({
      articles: 'news/all'
    })
  }
}
</script>
