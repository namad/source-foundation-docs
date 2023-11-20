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

<a href="https://github.com/namad/source-foundation/blob/main/tw/source.config.json" target="_blank">See default config →</a>

### Generate CSS variables
{% include code-block-oneliner.html content="npx source-css ./css/variables.css" %}
The command above will read your `./source.config.json` and create the CSS file `./css/variables.css`.

<a href="https://github.com/namad/source-foundation/blob/main/tw/source-variables.css" target="_blank">See default CSS variables →</a>

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

### Colours

#### Neutrals
Neutral colours are made with these parameters. Hue and saturation to set the tone and distance define the difference between adjacent shades.

{% include code-block-start.html class="flex-1 min-w-[342px]" caption="./source.config.json" %}
```js
{
    "hue":        190,   // Number from 0 to 360
    "saturation": 0.2,   // Number from 0.0 to 1.0
    "distance":   0.02,  // One of three values 0.02 | 0.03 | 0.04
}

```
{% include code-block-end.html %}

<a href="https://codepen.io/oxn-krtv/full/ExOwLBz" class="icon icon-codepen gap-xs2" target="_blank">See example on CodePen</a>


#### Accents

Accent colours are a bit more complex than neutrals. Each colour is defined by its initial hue value.

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

Accent saturation is pretty straightforward. Three others are where the magic happens. I use the [luminance function](https://gka.github.io/chroma.js/#color-luminance) to set three key shades. 
Mid shade is going to be the main accent colour that gives 4.5:1 contrast ratio against white. To achieve that I apply `chroma.luminance(accentMidLuminance)` where `accentMidLuminance = 0.18`. 
The other two parameters are for the lightest and darkest shades in the series. With three key shades, it is super easy to fill other spots with a simple [colour scale function](https://gka.github.io/chroma.js/#chroma-scale)

<a href="https://codepen.io/oxn-krtv/full/ExOwmaq" class="icon icon-codepen gap-xs2" target="_blank">See example on CodePen</a>

#### Semantics

Semantic colours reference values from the accents.

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
Typography scale is set with `typeScale` parameter. There are [three pre-calculated](https://github.com/namad/source-tokens/tree/main/tokens/typography) typography scales where values are rounded to the nearest integer that is even to four. This way text fits into 4px grid

{% include code-block-start.html class="min-w-[342px]" caption="./source.config.json" %}
```js
{
    "typeScale":  "majorThird" | "minorThird" | "majorSecond"
}
```
{% include code-block-end.html %}

<a href="https://designcode.io/typographic-scales" target="_blank">Learn more about typographic scale →</a>

### Spacing & radii

Both spacing and radii use sets of pre-calculated values

<a href="https://github.com/namad/source-tokens/tree/main/tokens/radii" target="_blank">Radii tokens →</a> <span class="inline-block w-2"></span> <a href="https://github.com/namad/source-tokens/tree/main/tokens/spacing" target="_blank">Spacing tokens →</a>

{% include section-end.html %}


