<template>
  <div class="home">
    <container>
      <fade-transition>
        <section v-if="loading" class="text--center block">
          <loading-spinner />
        </section>

        <content-block v-else class="block" data-cy="content-block">
          <template v-slot:feature>
            <section class="image-tiles" data-cy="image-tiles">
              <image-modal-item image="Image-04.jpg" />
              <image-modal-item image="Image-05.jpg" />
              <image-modal-item image="Image-06.jpg" />
            </section>
          </template>
          <template v-slot:content>
            <h3
              class="text-h4 title-underlined text-transform--uppercase font-weight-light"
              data-cy="content-block-title"
            >
              {{ content.title }}
            </h3>

            <p
              class="text--secondary body-2"
              data-cy="content-block-description"
            >
              {{ content.description }}
            </p>
            <p
              class="text--capitalize text--primary mb-3 text-transform--uppercase"
              data-cy="content-block-subtitle"
            >
              {{ content.subtitle }}
            </p>
            <p class="text--white body-2" data-cy="content-block-subdescription">{{ content.subdescription }}</p>
          </template>
        </content-block>
      </fade-transition>

      <news-feed class="block" />
    </container>
  </div>
</template>

<script>
import Container from '@/components/layout/Container'
import NewsFeed from '@/components/news-feed/NewsFeed'
import ContentBlock from '@/components/content-block/ContentBlock'
import ImageModalItem from '@/components/layout/ImageModalItem'

const fakeContent = {
  title: "Answer Your Body's Needs",
  description: "The way ingredients are sourced affects the way we nourish our bodies. " +
      "Author Mark Schatzer believes our body naturally devolops an appetite for the foods " +
      "and nutrients it needs to be healthy, but that artificial flavourings are getting in the way." +
      " This can be reversed by focusing on high-quality ingredients and being mindful as your appetite" +
      " guides you to consume according to your body's needs.",
  subtitle: "Be Mindful",
  subdescription: "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
}

export default {
  name: 'Home',
  components: {
    NewsFeed,
    Container,
    ContentBlock,
    ImageModalItem
  },
  data: () => ({
    loading: true,
    failedLoading: false,
    content: {}
  }),
  async mounted() {
    this.content = await this.loadContent()
  },
  methods: {
    // some fetch call
    loadContent() {
      return new Promise((resolve) => {
        try {
          this.loading = true
          this.failedLoading = false

          setTimeout(() => {
            this.loading = false
            resolve(fakeContent)
          }, 3000, fakeContent)

        } catch (err) {
          console.error(err.message)
          this.loading = false
          this.failedLoading = true
          resolve(fakeContent)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 15px;
}

.block:not(:first-of-type) {
  margin-top: 232px;
}

.image-tiles {
  display: grid;
  grid-template-rows: repeat(3, 384px);
  grid-template-columns: minmax(100%, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 24px;

  ::v-deep img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media all and (min-width: 767px) {
    grid-template-columns: repeat(2, minmax(336px, 1fr));
    grid-template-rows: 1fr 1fr;

    & > :first-child {
      grid-row: 1 / 3;
      height: 100%;

      ::v-deep .image-modal-item__image {
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
