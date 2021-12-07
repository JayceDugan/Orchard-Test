<template>
  <div class="image-modal" @click="clickHandler">
    <img :src="require(`@/assets/${image}`)" class="image-modal__image" />
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    image: {
      type: String,
      required: true,
      default: () => ('')
    }
  },
  methods: {
    clickHandler() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.image-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: grid;
  place-content: center;
  padding: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(#000, 0.7);
  }

  &__image {
    z-index: 1000;
    opacity: 1;
    height: auto;
    width: 800px;
    max-width: 100%;
    object-fit: cover;
    max-width: 100%;
  }
}
</style>

