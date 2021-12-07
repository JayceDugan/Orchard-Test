<template>
  <article
    class="card card--news-feed card--animated cursor--pointer"
    data-cy="news-feed-item"
    @click="clickHandler"
  >
    <img :src="require(`@/assets/${image}`)" class="card__image" data-cy="news-feed-item-image" :alt="alt" />

    <h3 class="card__title text--white font-weight-bold text--restricted" data-cy="news-feed-item-title">{{ title
      }}</h3>
    <p class="card__caption text--secondary mb-5">{{ caption }}</p>
    <orchard-button
      link
      underlined
    >
      <span class="text-transform--uppercase">
        Read More
      </span>
    </orchard-button>
  </article>
</template>

<script>
import OrchardButton from '@/components/layout/OrchardButton';

export default {
  name: 'NewsFeedItem',
  props: {
    id: {
      type: String,
      required: true,
      default: () => ('')
    },
    title: {
      type: String,
      required: true,
      default: () => ('')
    },
    image: {
      type: String,
      required: true,
      default: () => (''),
    },
    alt: {
      type: String,
      required: false,
      default: () => (''),
    },
    caption: {
      type: String,
      required: true,
      default: () => ('')
    },
    // Would be used with vue-router.
    // link: {
    //   type: String,
    //   required: true,
    //   default: () => (''),
    // }
  },
  components: {
    OrchardButton
  },
  methods: {
    clickHandler(event) { console.log(`Clicked News Article: ${event}`); }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__title {
    font-size: calc((18 / var(--font-size-base)) * 1rem);
    line-height: (30 / 18);
  }

  &__caption {
    font-size: calc((16 / var(--font-size-base) * 1rem));
    line-height: (28 / 16);
  }

  &__image {
    height: 290px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-bottom: 3px solid var(--theme-primary);
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    margin-bottom: 6.75px;
  }
}
.card__title {
}

.card--animated {
  transition: all 0.25s ease-in-out;
  // Enabled
  transform: translateZ(0);

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.02);
  }
}
</style>
