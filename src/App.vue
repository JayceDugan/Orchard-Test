<template>
  <div id="app">
    <h1 class="text--center mb-16">Orchard - Technical Test.</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
$font-size-mobile-base: 14;
$font-size-base: 16;

:root {
  // Generic Colors
  --red: #CF1430;
  --grey: #C2C2C2;

  // Theme Colors
  --theme-primary: var(--red, #CF1430);
  --theme-secondary: var(--grey, #C2C2C2);

  // Headings
  --headings-font-family: 'Open Sans';
  --headings-font-weight: 300;

  // Typography
  --font-size-base: #{$font-size-mobile-base};
  --content-font-family: 'Open Sans';
  --content-font-weight: 300;

  // Utility variables
  --xs-letter-spacing: 0.5px;
  --md-letter-spacing: 0.81px;

  @media all and (min-width: 767px) {
    --font-size-base: $font-size-base;
  }
}

// General Resets
* {
  box-sizing: border-box !important;
}

body {
  padding: 50px 0;
}

html,
body {
  font-family: var(--content-font-family);
  font-size: calc(var(--font-size-base) * 1px);
  background: #0E1414;
  color: #FFF;
  margin: 0;
}

p { margin-top: 0; }

@for $i from 1 through 6 {
  h#{$i},
  .h#{$i} {
    font-family: var(--headings-font-family, 'Open Sans');
    font-weight: var(--headings-font-weight, 300);
    letter-spacing: var(--headings-letter-spacing, 0);
    margin-top: 0;
  }
}

// Letter Spacing
.letter-spacing--xs { letter-spacing: var(--xs-letter-spacing); }
.letter-spacing--md { letter-spacing: var(--md-letter-spacing); }

// Font families
.headings-font-family { font-family: var(--headings-font-family); }
.content-font-family { font-family: var(--content-font-family); }

// Typography Colors
.text--primary {
  color: var(--theme-primary);
}

.text--secondary {
  color: var(--theme-secondary);
}

.body-2 {
  font-size: (18 / 16) * 1rem;
  line-height: (30 / 18);
}

// Note: The below have been chosen as SCSS instead of css
// variables as it's rare someone would want to modify or
// these variables on the fly. So pre-compiled is fine here.

// Font Weights
$weight_variants: (
  'thin': 100,
  'light': 300,
  'normal': 400,
  'medium': 500,
  'bold': 600,
  'black': 900
);

@each $variant, $weight in $weight_variants {
  .font-weight-#{$variant} {
    font-weight: $weight;
  }
}

$heading_font_sizes: (
  h1: 40,
  h2: 42,
  h3: 34,
  h4: 26,
  h5: 18,
  h6: 16,
);

@each $heading_tag, $heading_font_size in $heading_font_sizes {
  #{$heading_tag},
  .text-#{$heading_tag} {
    font-size: ($heading_font_size / $font-size-base) * 1rem;
  }
}

// Text Transformations
$text_transform_variants: uppercase, lowercase, capitalize;

@each $transform_variant in $text_transform_variants {
  .text-transform--#{$transform_variant} {
    text-transform: #{$transform_variant};
  }
}

// Text Alignment
$text_alignment_variants: center, left, right;

@each $text_alignment_variant in $text_alignment_variants {
  .text--#{$text_alignment_variant} {
    text-align: $text_alignment_variant;
  }
}

$cursor_variants: pointer;

@each $cursor_variant in $cursor_variants {
  .cursor--#{$cursor_variant} {
    cursor: $cursor_variant;
  }
}

// Margins
$spacing_base: 4;

@for $i from 1 through 16 {
  $spacing-value: ($i * $spacing_base) * 1px;

  .ma-#{$i} { margin: $spacing-value; }
  .mt-#{$i} { margin-top: $spacing-value; }
  .mr-#{$i} { margin-right: $spacing-value; }
  .mb-#{$i} { margin-bottom: $spacing-value; }
  .ml-#{$i} { margin-left: $spacing-value; }

  .pa-#{$i} { padding: $spacing-value; }
  .pt-#{$i} { padding-top: $spacing-value; }
  .pr-#{$i} { padding-right: $spacing-value; }
  .pb-#{$i} { padding-bottom: $spacing-value; }
  .pl-#{$i} { padding-left: $spacing-value; }
}

.title-underlined {
  padding-bottom: 10px;
  border-bottom: 1px solid #FFF;
}

.w-100 {
  width: 100%;
}

img {
  max-width: 100%;
}
</style>
