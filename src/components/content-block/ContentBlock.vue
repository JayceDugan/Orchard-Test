<template>
  <section class="content-block">
    <section class="content-block__feature">
      <slot name="feature" />
    </section>

    <section class="content-block__content">
      <slot name="content" />
    </section>
  </section>
</template>

<script>
export default {
  name: 'ContentBlock',
}
</script>

<style lang="scss" scoped>
.content-block {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 24px;

  @media all and (min-width: 1220px) {
    grid-template-columns: minmax(0, 8fr) minmax(0, 4fr);
  }
}
</style>
