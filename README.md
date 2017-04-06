# Now

[![CircleCI](https://circleci.com/gh/skyrpex/now.svg?style=svg)](https://circleci.com/gh/skyrpex/now) [![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/jkmt6ka0i7ry5o9x?svg=true)](https://ci.appveyor.com/project/skyrpex/now) [![TravisCI Build status](https://travis-ci.org/skyrpex/now.svg?branch=master)](https://travis-ci.org/skyrpex/now)

> Works with:
>
> <a href="https://github.com/vuejs/vue"><img src="https://img.shields.io/badge/vue-%5E2.0-green.svg" alt="Vue 2"></a>

This mixin will create a computed property with a Moment.js instance. The computed property will be updated at a given interval to stay up to date.

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
