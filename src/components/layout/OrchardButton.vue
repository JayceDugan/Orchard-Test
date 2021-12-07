<template>
  <button
      class="button"
      :class="{
        'button--link': link,
        'button--underlined': underlined,
      }"
      :data-cy="cypressID"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: Boolean,
      required: false,
      default: () => (false)
    },
    underlined: {
      type: Boolean,
      required: false,
      default: () => (false)
    },
    cypressID: {
      type: String,
      required: false,
      default: () => ('button')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  --button-color: #FFF;
  --button-background: #FFF;

  all: unset;
  min-height: 34px;
  background-color: var(--button-background);
  color: var(--button-color);

  &--link {
    --button-background: transparent;
  }

  &--underlined {
    border-bottom: 1px solid var(--theme-primary);
  }
}
</style>
