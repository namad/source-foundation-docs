### Install packages


{% include code-block-start.html %}
```en
npm i -D source-foundation-cli
npm i -D source-tailwindcss
```
{% include code-block-end.html %}

[Learn more about Source Foundation CLI →](./cli-color-generator.html)


### Create source.config.json
{% include code-block-start.html %}
```en
npx source-css init
```
{% include code-block-end.html %}

Run the command above to create your `./source.config.json`. This file has the parameters to generate color palettes, typography, radii and spacing tokens.

[Learn more about source.config.json →](./cli-color-generator.html#how-it-works)

### Create CSS variables
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

### Configure TailwindCSS
#### Option 1. Import preset
{% include code-block-start.html caption="tailwind.config.js" %}
```js
module.exports = {
    theme: { ... },
    ...
    presets: [
        require('source-tailwindcss')
    ]
}
```
{% include code-block-end.html %}

Import a single <a href="https://github.com/namad/source-foundation/blob/main/tw/source-preset.js" target="_blank">Source Preset</a> 
to enable all the features in the most simple way

<a href="https://tailwindcss.com/docs/presets" target="_blank">Learn more about Tailwind CSS presets →</a>

#### Option 2. Use theme
{% include code-block-start.html caption="tailwind.config.js" %}
```js
module.exports = {
    theme: require('source-tailwindcss/source-theme'),
    plugins: [
        require('source-tailwindcss/plugins/border'),
        require('source-tailwindcss/plugins/colors'),
        require('source-tailwindcss/plugins/components'),
        require('source-tailwindcss/plugins/elevation'),
        require('source-tailwindcss/plugins/gradients'),
        require('source-tailwindcss/plugins/icons'),
        require('source-tailwindcss/plugins/padding')
    ]
}
```
{% include code-block-end.html %}

Theme gives you more control over plugins.

<a href="https://tailwindcss.com/docs/theme" target="_blank">Learn more about Tailwind CSS themes →</a>


### Set up HTML
{% include code-block-start.html caption="index.html" %}
```html
<html data-theme="light" data-radii="base" data-spacing="base" data-typography="base" data-icons="base">
<head>
    ...
</head>
<body>
    ...
    <div data-theme="dark-elevated">
        ...
    </div>
    ...
</body>
</html>
```
{% include code-block-end.html %}

All the values are set with `[data]` atribute that you can apply to any element in your app.

{% include code-block-start.html caption="[data] attribute variants" %}
<div class="flex flex-row gap-md">
    <div class="flex flex-col flex-1 gap-xs4">
        <div class="font-bold whitespace-nowrap">theme</div>
        <div class="flex flex-col">
            <div class="pl-sm">light</div>
            <div class="pl-sm">dark-elevated</div>
            <div class="pl-sm">dark-base</div>
        </div>
    </div>
    <div class="flex flex-col flex-1 gap-xs4">
        <div class ="font-bold whitespace-nowrap">spacing</div>
        <div class="flex flex-col">
            <div class="pl-sm">compact</div>
            <div class="pl-sm">base</div>
            <div class="pl-sm">large</div>
        </div>
    </div>
    <div class="flex flex-col flex-1 gap-xs4">
        <div class ="font-bold whitespace-nowrap">typography</div>
        <div class="flex flex-col">
            <div class="pl-sm">compact</div>
            <div class="pl-sm">base</div>
            <div class="pl-sm">large</div>
        </div>
    </div>
    <div class="flex flex-col flex-1 gap-xs4">
        <div class ="font-bold whitespace-nowrap">radii</div>
        <div class="flex flex-col">
            <div class="pl-sm">compact</div>
            <div class="pl-sm">base</div>
            <div class="pl-sm">large</div>
        </div>
    </div>
    <div class="flex flex-col flex-1 gap-xs4">
        <div class ="font-bold whitespace-nowrap">icons</div>
        <div class="flex flex-col">
            <div class="pl-sm">base</div>
            <div class="pl-sm">touch</div>
        </div>
    </div>
</div>
{% include code-block-end.html %}

Now you shuld be able to run your build normally