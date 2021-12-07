<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
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

  // Content
  --content-font-family: 'Open Sans';
  --content-font-weight: 300;

  // Utility variables
  --xs-letter-spacing: 0.5px;
  --md-letter-spacing: 0.81px;
}

// General Resets
* {
  box-sizing: border-box !important;
}

html,
body {
  font-size: 16px;
}

@for $i from 1 through 6 {
  h#{$i},
  .h#{$i} {
    font-family: var(--headings-font-family, 'Open Sans');
    font-weight: var(--headings-font-weight, 300);
    letter-spacing: var(--headings-letter-spacing, 0);
  }
}

// Letter Spacing
.xs-letter-spacing { letter-spacing: var(--xs-letter-spacing); }
.md-letter-spacing { letter-spacing: var(--md-letter-spacing); }

// Font families
.headings-font-family { font-family: var(--headings-font-family); }
.content-font-family { font-family: var(--content-font-family); }

// Font Weights

// Note: These are scss variables as opposed to css
// variables as it's rare someone would want to change
// these variables on the fly. So pre-compiled is fine here.
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

</style>
