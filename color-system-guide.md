---
title: Color System Guide
layout: base
---

{% include section-start.html title="Tiles"%}
<div class="flex flex-col ghost-border-1-alt-base-200 rounded overflow-hidden">
    <div class="bg-alt-base-200 h-24"></div>
    <div class="bg-alt-base-300 h-24"></div>
</div>
{% include section-end.html %}

{% include section-start.html title="Neutral colours"%}
Neutral colours are the foundation for the visual language that defines the overall tone of your application. It could be fully desaturated, slightly colder or warmer, or even tinted in a fancy way to support the brand.

### Fill colours
Fills are the lightest shades in your arsenal and should be used as the main background colours.

##### Light surface fills
`fill.base.{shade}`
{% include color-shades.html color="bg-fill-base" %}

##### Dark surface fills
`fill.contrast.{shade}`
{% include color-shades.html color="bg-fill-contrast" class="color-text-contrast-600" %}

### Stroke colours
Strokes are not supposed to fill large areas but outline or divide them.

##### Light surface strokes
`stroke.base.{shade}`
{% include color-shades.html color="bg-stroke-base" %}

##### Dark surface strokes
`stroke.contrast.{shade}`
{% include color-shades.html color="bg-stroke-contrast" class="color-text-contrast-600" %}

{% include section-end.html %}




{% include section-start.html title="Neutral colours"%}
Neutral colours are the foundation for the visual language that defines the overall tone of your application. It could be fully desaturated, slightly colder or warmer, or even tinted in a fancy way to support the brand.

### Fill colours
Fills are the lightest shades in your arsenal and should be used as the main background colours.

##### Light surface colors
`bg.fill.base.{shade}`
{% include color-shades.html color="bg-fill-base" %}

##### Dark surface colors
`fill.contrast.{shade}`
{% include color-shades.html color="bg-fill-contrast" class="color-text-contrast-600" %}

<div class="flex flex-row gap-md border-stroke-base-100 border rounded-md py-md">
    <div class="flex flex-col-reverse flex-1 py-8 ">
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">fill.base.100</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">fill.base.200</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">fill.base.300</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">fill.base.400</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">fill.base.500</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">fill.base.600</span>
        </span>
    </div>
    <div class="flex flex-col-reverse pb-16">
        <div class="layers h-9 z-[1]">
            {% include assets/layer.html fill="fill-base-100" stroke="alt-base-200" %}
        </div>
        <div class="layers h-9 z-[2]">
            {% include assets/layer.html fill="fill-base-200" %}
        </div>
        <div class="layers h-9 z-[3]">
            {% include assets/layer.html fill="fill-base-300" %}
        </div>
        <div class="layers h-9 z-[4]">
            {% include assets/layer.html fill="fill-base-400" %}
        </div>
        <div class="layers h-9 z-[5]">
            {% include assets/layer.html fill="fill-base-500" %}
        </div>
        <div class="layers h-9 z-[6]">
            {% include assets/layer.html fill="fill-base-600" %}
        </div>
    </div>
    <div class="flex flex-col flex-1 py-8 ">
    </div>
</div>

<div class="flex flex-row gap-md bg-fill-contrast-100 rounded-md py-md">
    <div class="flex flex-col flex-1 py-8 color-text-contrast-500">
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.100</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.200</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.300</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.400</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.500</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.600</span>
        </span>
    </div>
    <div class="flex flex-col-reverse pb-16">
        <div class="layers h-9 z-[1]">
            {% include assets/layer.html fill="fill-contrast-100" stroke="alt-contrast-200"%}
        </div>
        <div class="layers h-9 z-[2]">
            {% include assets/layer.html fill="fill-contrast-200"%}
        </div>
        <div class="layers h-9 z-[3]">
            {% include assets/layer.html fill="fill-contrast-300"%}
        </div>
        <div class="layers h-9 z-[4]">
            {% include assets/layer.html fill="fill-contrast-400"%}
        </div>
        <div class="layers h-9 z-[5]">
            {% include assets/layer.html fill="fill-contrast-500"%}
        </div>
        <div class="layers h-9 z-[6]">
            {% include assets/layer.html fill="fill-contrast-600"%}
        </div>
    </div>
    <div class="flex flex-col flex-1 py-8 ">
    </div>
</div>


### Stroke colours
Strokes are not supposed to fill large areas but outline or divide them.

<div class="flex flex-row gap-md border-stroke-base-100 border rounded-md py-md">
    <div class="flex flex-col-reverse flex-1 py-8 ">
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">stroke.base.100</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">stroke.base.200</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">stroke.base.300</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">stroke.base.400</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">stroke.base.500</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-base-200 rounded-sm">stroke.base.600</span>
        </span>
    </div>
    <div class="flex flex-col-reverse pb-16">
        <div class="layers h-9 z-[1]">
            {% include assets/layer.html fill="fill-base-100" stroke="stroke-base-100" %}
        </div>
        <div class="layers h-9 z-[2]">
            {% include assets/layer.html fill="fill-base-100" stroke="stroke-base-200" %}
        </div>
        <div class="layers h-9 z-[3]">
            {% include assets/layer.html fill="fill-base-100" stroke="stroke-base-300" %}
        </div>
        <div class="layers h-9 z-[4]">
            {% include assets/layer.html fill="fill-base-100" stroke="stroke-base-400" %}
        </div>
        <div class="layers h-9 z-[5]">
            {% include assets/layer.html fill="fill-base-100" stroke="stroke-base-500" %}
        </div>
        <div class="layers h-9 z-[6]">
            {% include assets/layer.html fill="fill-base-100" stroke="stroke-base-600" %}
        </div>
    </div>
    <div class="flex flex-col flex-1 py-8 ">
    </div>
</div>

<div class="flex flex-row gap-md bg-fill-contrast-100 rounded-md py-md">
    <div class="flex flex-col flex-1 py-8 color-text-contrast-500">
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.100</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.200</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.300</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.400</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.500</span>
        </span>
        <span class="flex flex-row items-center justify-end font-mono text-sm gap-md h-9">
            <span class="px-xs2 py-xs4 bg-alt-contrast-200 rounded-sm">fill.contrast.600</span>
        </span>
    </div>
    <div class="flex flex-col-reverse pb-16">
        <div class="layers h-9 z-[1]">
            {% include assets/layer.html fill="fill-contrast-100" stroke="alt-contrast-200"%}
        </div>
        <div class="layers h-9 z-[2]">
            {% include assets/layer.html fill="fill-contrast-200"%}
        </div>
        <div class="layers h-9 z-[3]">
            {% include assets/layer.html fill="fill-contrast-300"%}
        </div>
        <div class="layers h-9 z-[4]">
            {% include assets/layer.html fill="fill-contrast-400"%}
        </div>
        <div class="layers h-9 z-[5]">
            {% include assets/layer.html fill="fill-contrast-500"%}
        </div>
        <div class="layers h-9 z-[6]">
            {% include assets/layer.html fill="fill-contrast-600"%}
        </div>
    </div>
    <div class="flex flex-col flex-1 py-8 ">
    </div>
</div>

{% include section-end.html %}