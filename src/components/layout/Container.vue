<template>
  <section class="container">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;

  @media all and (min-width: 320px) {
    max-width: 540px;
  }

  @media all and (min-width: 767px) {
    max-width: 720px;
  }

  @media all and (min-width: 992px) {
    max-width: 960px;
  }

  @media all and (min-width: 1220px) {
    max-width: 1140px;
  }

  @media all and (min-width: 1440px) {
    max-width: 1200px;
  }
}
</style>
