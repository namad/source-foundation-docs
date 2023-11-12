---
title: CLI Generator
layout: base
nav_order: 2
---

{% include section-start.html title='Source Foundation CLI' %}

This command line tool converts `./source.config.json` into `./css/variables.css` so you can use custom properties with [Tailwind CSS]({% link index.md %})

<div class="flex flex-row gap-md">
{% include code-block-start.html class="flex-1" caption="./source.config.json" %}
```js
{
    "hue": 190,
    "saturation": 0.2,
    "distance": 0.02,
    "primary": "blue",
    "info": "teal",
    "success": "green",
    "warning": "amber",
    "danger": "red",
    "red": 4,
    "blue": 200,
    "accentSaturation": 0.9
    ...
}

```
{% include code-block-end.html %}
{% include code-block-start.html class="flex-1" caption="./css/variables.css" %}
```css
[data-theme=light], .theme-light {
    --accent-blue-100: hsla(194.4,84.03%,46.67%,0.125);
    --accent-blue-200: hsla(194.4,84.03%,46.67%,0.25);
    --accent-blue-300: hsl(196.77,86.92%,41.96%);
    --accent-blue-400: hsl(199.88,89.58%,37.65%);


    /* ... */

    --primary-100: var(--accent-blue-100);
    --primary-200: var(--accent-blue-200);
    --primary-300: var(--accent-blue-300);
    --primary-400: var(--accent-blue-400);
    
    /* ... */
}
```
{% include code-block-end.html %}
</div>

## How it works

### Install npm package

{% include code-block-start.html %}
```en
npm i -D source-foundation-cli
```
{% include code-block-end.html %}


### Create source.config.json
{% include code-block-start.html %}
```en
npx source-css init
```
{% include code-block-end.html %}

Run the command above to create your `./source.config.json`. This file has the parameters to generate color palettes, typography, radii and spacing tokens.

<a href="https://github.com/namad/source-tw-playground/blob/main/src/source.config.json" target="_blank">See Default Config →</a>

### Generate CSS variables
{% include code-block-oneliner.html content="npx source-css ./css/variables.css" %}
The command above will read your `./source.config.json` and create the CSS file `./css/variables.css`.

<a href="https://github.com/namad/source-tw-playground/blob/main/src/source-variables.css" target="_blank">See Default CSS Variables →</a>

### Import CSS variables
{% include code-block-start.html caption="main.css" %}
```css
@import "./css/variables.css";
...
@tailwind base;
@tailwind components;
@tailwind utilities;
```
{% include code-block-end.html %}
{% include section-end.html %}