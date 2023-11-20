### Drop Shadows
{% include code-block-onetag.html tag="div" content="shadow-{elevation} shadow-{color} shadow-opacity-{opacity}" %}

Shadow utility offers six elevation levels. examples below use `shadow-utility-shade-300` color

<div class="tiles-grid">
    <div class="min-w-fit p-md bg-fill-base-100 shadow-1 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-1</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-2 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-2</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-3 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-3</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-4 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-4</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-5 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-5</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-6</span>
    </div>
</div>

#### Shadow colour
There is a special colour for shadows `utility-shade-{100...600}`
<div class="tiles-grid">
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-100 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-utility-shade-100</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-200 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-utility-shade-200</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-utility-shade-300</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-400 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-utility-shade-400</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-500 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-utility-shade-500</span>
    </div>
    <div class="min-w-fit p-md bg-fill-base-100 shadow-6 shadow-utility-shade-600 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-utility-shade-600</span>
    </div>
</div>

### Color Bleed Shadows
You can apply any color with `shadow-{color}` and set shadow opacity with `shadow-opacity-{opacity}` utilities

<div class="flex flex-row flex-wrap gap-md flex-1 justify-center">
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-green-400 gradient-tint-50 shadow-accent-green-300 shadow-opacity-60 shadow-4 rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-green-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-teal-400 gradient-tint-50 shadow-accent-teal-300 shadow-opacity-60 shadow-4 rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-teal-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-blue-400 gradient-tint-50 shadow-accent-blue-300 shadow-opacity-60 shadow-4 rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-blue-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-indigo-400 gradient-tint-50 shadow-accent-indigo-300 shadow-opacity-60 shadow-4 rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-indigo-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
</div>

### Multiply Shadows
Utility class `shadow-multiply` enables `mix-blend-mode: multiply` on shadows.
<a href="#" data-theme-switch="dark-elevated">Switch theme</a> to see the difference

<div class="flex flex-row flex-wrap gap-md flex-1 justify-center">
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-green-400 gradient-tint-50 shadow-accent-green-300 shadow-opacity-60 shadow-4 shadow-multiply rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-green-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-teal-400 gradient-tint-50 shadow-accent-teal-300 shadow-opacity-60 shadow-4 shadow-multiply rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-teal-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-blue-400 gradient-tint-50 shadow-accent-blue-300 shadow-opacity-60 shadow-4 shadow-multiply rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-blue-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
    <div class="min-w-fit flex-1 text-center px-sm py-lg bg-accent-indigo-400 gradient-tint-50 shadow-accent-indigo-300 shadow-opacity-60 shadow-4 shadow-multiply rounded-md">
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-accent-indigo-300</div>
        <div class="font-mono color-text-contrast-500 rounded-sm text-xs">shadow-opacity-60</div>
    </div>
</div>

### Inner Shadows
{% include code-block-onetag.html tag="div" content="inner-shadow-{elevation} inner-shadow-{color} inner-shadow-opacity-{opacity}" %}

<div class="tiles-grid ">
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-alt-base-200 inner-shadow-1 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-1</span>
    </div>
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-alt-base-200 inner-shadow-2 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-2</span>
    </div>
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-alt-base-200 inner-shadow-3 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-3</span>
    </div>
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-alt-base-200 inner-shadow-4 shadow-utility-shade-300 rounded-md flex-1 items-center justify-center flex">
        <span class="font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-4</span>
    </div>
</div>

### Combine Drop & Inner Shadows
Special utility class `shadows` combines both drop and inner shadows
{% include code-block-onetag.html tag="div" content="shadows shadow-{elevation} inner-shadow-{elevation}" %}

<div class="tiles-grid ">
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-stroke-base-200 shadows inner-shadow-2 inner-shadow-utility-shade-300 shadow-3 shadow-utility-shade-300 rounded-md flex-1">
        <span class="block font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-2</span>
        <span class="block font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-3</span>
    </div>
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-stroke-base-200 shadows inner-shadow-3 inner-shadow-utility-shade-300 shadow-2 shadow-utility-shade-300 rounded-md flex-1">
        <span class="block font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-2</span>
        <span class="block font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-2</span>
    </div>
    <div class="min-w-fit py-base px-sm bg-fill-base-100 border border-solid border-stroke-base-200 shadows inner-shadow-4 inner-shadow-utility-shade-100 shadow-4 shadow-utility-shade-300 rounded-md flex-1">
        <span class="block font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">inner-shadow-4</span>
        <span class="block font-mono color-text-base-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shadow-4</span>
    </div>
</div>