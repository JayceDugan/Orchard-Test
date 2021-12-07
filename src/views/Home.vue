<template>
  <div class="home">
    <container>
      <content-block class="block">
        <template v-slot:feature>
          <section class="image-tiles">
            <img src="@/assets/Image-01.jpg" />
            <img src="@/assets/Image-02.jpg" />
            <img src="@/assets/Image-03.jpg" />
          </section>
        </template>
        <template v-slot:content>
          <h3 class="text-h4 title-underlined text-transform--uppercase font-weight-light">{{ content.title }}</h3>

          <p class="text--secondary body-2">
            {{ content.description }}
          </p>
          <p class="text--capitalize text--primary mb-3 text-transform--uppercase">{{ content.subtitle }}</p>
          <p class="text--white body-2">{{ content.subdescription }}</p>
        </template>
      </content-block>

      <news-feed />
    </container>
  </div>
</template>

<script>
import Container from '@/components/layout/Container'
import NewsFeed from '@/components/news-feed/NewsFeed'
import ContentBlock from '@/components/content-block/ContentBlock'

export default {
  name: 'Home',
  components: {
    NewsFeed,
    Container,
    ContentBlock
  },
  data: () => ({
    content: {
      title: "Answer Your Body's Needs",
      description: "The way ingredients are sourced affects the way we nourish our bodies. " +
      "Author Mark Schatzer believes our body naturally devolops an appetite for the foods " +
      "and nutrients it needs to be healthy, but that artificial flavourings are getting in the way." +
      " This can be reversed by focusing on high-quality ingredients and being mindful as your appetite" +
      " guides you to consume according to your body's needs.",
      subtitle: "Be Mindful",
      subdescription: "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
    }
  })
}
</script>

<style lang="scss" scoped>
.home {
  padding: 15px;
}

.block:not(:last-of-type) {
  margin-bottom: 232px;
}

.image-tiles {
  display: grid;
  grid-rows: repeat(3, minmax(384px, auto));
  grid-template-columns: minmax(100%, 1fr);
  grid-gap: 24px;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media all and (min-width: 767px) {
    grid-template-columns: repeat(2, minmax(336px, 1fr));
    grid-template-rows: 1fr 1fr;

    & > :first-child {
      grid-row: 1 / 3;
      height: 100%;
    }
  }
}
</style>
