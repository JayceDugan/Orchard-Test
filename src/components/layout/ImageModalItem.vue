<template>
  <section class="image-modal-item">
    <img
      :src="require(`@/assets/${image}`)"
      class="image-modal-item__image cursor--pointer"
      @click="toggleModal"
    />
    <fade-transition appear>
      <image-modal
        v-show="modalActive"
        :image="image"
        @close="closeHandler"
      />
    </fade-transition>
  </section>
</template>

<script>
import ImageModal from '@/components/layout/ImageModal'

export default {
  name: 'ImageModalItem',
  props: {
    image: {
      type: String,
      required: true,
      default: () => ('')
    }
  },
  components: {
    'image-modal': ImageModal
  },
  data: () => ({
    modalActive: false
  }),
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive
    },
    closeHandler() {
      this.modalActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.image-modal-item {
  &__image {
    transition: all 0.25s ease-in-out;

    &:hover,
    &:active,
    &:focus {
      transform: scale(0.95);
      filter: blur(2px);
    }
  }
}
</style>
