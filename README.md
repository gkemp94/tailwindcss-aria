# Tailwind CSS ARIA Variants Plugin

This Tailwind CSS plugin enables the use of ARIA attributes (`aria-expanded`, `aria-hidden`) as variants in your Tailwind CSS project. It allows you to style elements conditionally based on their ARIA attribute values, directly within your Tailwind utility classes.

## Features

- **ARIA Attribute Variants**: Supports `aria-expanded` and `aria-hidden` attributes.
- **Group and Peer Variants**: Extends Tailwind's `group` and `peer` variants to conditionally apply styles based on the presence of ARIA attributes in parent or sibling components.

## Installation

To install the plugin, add it to your project using npm or yarn:

```bash
npm install --save tailwindcss-aria
# or
yarn add tailwindcss-aria
```

## Usage

First, require the plugin in your tailwind.config.js file:

```js
module.exports = {
  plugins: [require("tailwindcss-aria")],
};
```

### Applying Variants

You can use the ARIA variants like any other Tailwind variant. Here are some examples:

```html
<div class="aria-expanded:text-blue-500">This text turns blue when expanded.</div>
<div class="aria-hidden:opacity-50">This element is semi-transparent when hidden.</div>
```

### Group and Peer Variants

Group and peer variants work with ARIA attributes to style elements based on the state of their parent or sibling components.

```html
<div class="group" aria-expanded="true">
  <p class="group:aria-expanded:text-bold">This text is bold when the parent is expanded.</p>
</div>

<div class="peer" aria-hidden="true">
  <p class="peer:aria-hidden:text-italic">This text is italic when the preceding sibling is hidden.</p>
</div>
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with your suggestions.
