<template>
  <article class="card card--news-feed" data-cy="news-feed-item">
    <img src="" class="card__image" data-cy="news-feed-item-image" />

    <h3 class="card__title text--white" data-cy="news-feed-item-title">Summer Lunch </h3>
    <p class="card__caption text--secondary">{{ caption }}</p>
    <button class="button button--link button--underlined text-transform--uppercase">
      Read More
    </button>
  </article>
</template>

<script>
export default {
  name: 'NewsFeedItem',
  props: {
    title: {
      type: String,
      required: true,
      default: () => ('')
    },
    caption: {
      type: String,
      required: true,
      default: () => ('')
    },
    link: {
      type: String,
      required: true,
      default: () => (''),
    }
  }
}
</script>
