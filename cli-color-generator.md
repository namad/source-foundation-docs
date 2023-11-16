---
title: CLI Generator
layout: base
nav_order: 2
---

{% include section-start.html title='Source Foundation CLI' %}

This command line tool converts `./source.config.json` into `./css/variables.css` 
so you can use custom properties with [Tailwind CSS](./index.md)

<div class="flex flex-row flex-wrap gap-md">
{% include code-block-start.html class="flex-1 min-w-[342px]" caption="./source.config.json" %}
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
{% include code-block-start.html class="flex-1 min-w-[342px]" caption="./css/variables.css" %}
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

## Get started

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


{% include section-start.html title='How it works' %}
### Colors
#### Neutrals

There are three parameters that control how your neutrals feel.

{% include code-block-start.html class="flex-1 min-w-[342px]" caption="./source.config.json" %}
```js
{
    "hue":        190,   // Number from 0 to 360
    "saturation": 0.2,   // Number from 0.0 to 1.0
    "distance":   0.02,  // One of three values 0.02 | 0.03 | 0.04
}

```
{% include code-block-end.html %}

<a href="https://codepen.io/oxn-krtv/full/ExOwLBz" target="_blank">See example on CodePen →</a>

#### Accents
The color is defined by its initial HUE value. 
{% include code-block-start.html class="min-w-[342px]" caption="./source.config.json" %}
```js
{
    "red":    4,
    "amber":  25,
    "brown":  33,
    "green":  130,
    "teal":   180,
    "blue":   210,
    "indigo": 240,
    "violet": 260,
    "purple": 280,
    "pink":   340,
}
```
{% include code-block-end.html %}

To generate shades there are four additional parameters.

{% include code-block-start.html class="min-w-[342px]" caption="./source.config.json" %}
```js
{
    "accentSaturation":   0.90,  // sets overal saturation
    "accentMaxLuminance": 0.45,  // lightest shade
    "accentMidLuminance": 0.18,  // base shade, 18% luminance will make 4.5 : 1 contrast ratio 
    "accentMinLuminance": 0.10,  // the darkest shade
}
```
{% include code-block-end.html %}

<a href="https://codepen.io/oxn-krtv/full/ExOwmaq" target="_blank">See example on CodePen →</a>

#### Semantics

Assign accents for semantics by name.

{% include code-block-start.html class="min-w-[342px]" caption="./source.config.json" %}
```js
{
    "primary": "blue",
    "info":    "teal",
    "success": "green",
    "warning": "amber",
    "danger":  "red",
}
```
{% include code-block-end.html %}

### Typography
Overall typography scale is set with `typeScale` parameter. 

{% include code-block-start.html class="min-w-[342px]" caption="./source.config.json" %}
```js
{
    "typeScale":  "majorThird" | "minorThird" | "majorSecond"
}
```
{% include code-block-end.html %}

<a href="https://designcode.io/typographic-scales" target="_blank">Learn more about typographic scale →</a>

{% include section-end.html %}