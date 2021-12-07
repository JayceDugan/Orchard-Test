<template>
  <section
    class="news-feed"
    data-cy="news-feed"
  >
    <h2
      class="text-h2 text--white letter-spacing--md text--center mb-15 text-transform--uppercase font-weight-light w-100"
      data-cy="news-feed-title"
    >
      {{ title }}
    </h2>

    <component :is="activeDisplay" />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsFeedList from './NewsFeedList.vue'
import NewsFeedLoading from './NewsFeedLoading.vue'
import NewsFeedFailedLoading from './NewsFeedFailedLoading.vue'

export default {
  name: 'NewsFeed',
  props: {
    title: {
      type: String,
      required: false,
      default: () => ('All the latest from AEG.')
    }
  },
  components: {
    'news-feed-list': NewsFeedList,
    'news-feed-loading': NewsFeedLoading,
    'news-feed-failed-loading': NewsFeedFailedLoading
  },
  computed: {
    ...mapGetters('news', ['isLoading', 'failedLoading']),
    activeDisplay() {
      if (this.isLoading) return 'news-feed-loading';
      if (this.failedLoading) return 'news-feed-failed-loading';

      return 'news-feed-list'
    }
  },
  mounted() {
    this.initNews()
  },
  methods: {
    ...mapActions({
      initNews: 'news/init'
    })
  }
}
</script>
