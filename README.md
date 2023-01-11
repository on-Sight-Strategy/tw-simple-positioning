# @on-sight-strategy/tw-simple-positioning

A plugin that adds various utilities that simplify positioning with flex, grid, etc.


## Installation

Install the plugin from npm:

```sh
npm i -D @on-sight-strategy/tw-simple-positioning
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@on-sight-strategy/tw-simple-positioning'),
    // ...
  ],
}
```

## Usage

### `flex-center` and `grid-center` utilities
These utilities are self contained and don't require any outside utilities to function. Just set them on a wrapper element like so:
```html
  <div class="flex-center ...">
    <h1>Your Content</h1>
  </div>
```

### `pos-*` utilities
These utilities require the use of a CSS position property, usually `absolute`.

```html
  <div class="relative ...">
    <div class="absolute pos-center ...">
      <h1>Your Content</h1>
    </div>
  </div>
```
