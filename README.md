# Now

This mixin will create a computed property with the current update (that updates each second).

## Installation

`npm install @skyrpex/now`

## Usage

```html
<template>
  <p>{{ now }}</p>
</template>

<script>
import now from '@skyrpex/now';

export default {
  mixins: [
    // Will inject a 'now' computed property
    now(),
  ],
};
</script>
```

## Options

```js
import now from '@skyrpex/now';

now({
  name: 'now', // Name of the computed property
  interval: 1000, // Update interval
});
```
