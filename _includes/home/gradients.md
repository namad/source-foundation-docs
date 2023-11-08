### Gradient Tint

{% include code-block-onetag.html tag="div" content="gradient-tint-{opacity} gradient-angle-{angle}" %}

Tint gradient makes a gradient on top of any color using `background-blend-mode: overlay`
By default it creates tint on top of the surface, you can change graient andgle with `gradient-angle`


Examples below demonstrate `gradient-tint-50` on top of different accents

<div class="flex flex-row flex-1 flex-wrap gap-base ">
    <div
        class="min-w-fit px-sm py-base bg-accent-green-400 gradient-tint-50 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-180</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-teal-400 gradient-tint-50 gradient-angle-135 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-135</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-blue-400 gradient-tint-50 gradient-angle-90 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-90</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-indigo-400 gradient-tint-50 gradient-angle-45 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-45</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-purple-400 gradient-tint-50 gradient-angle-0 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-0</span>
    </div>
</div>

### Gradient Shade
{% include code-block-onetag.html tag="div" content="gradient-shade-{opacity} gradient-angle-{angle}" %}
There is another utility that shades part of the surface
Examples below demonstrate `gradient-shade-50` on top of different accents

<div class="flex flex-row flex-1 flex-wrap gap-md ">
    <div
        class="min-w-fit px-sm py-base bg-accent-green-400 gradient-shade-50 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-0</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-teal-400 gradient-shade-50 gradient-angle-45 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-45</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-blue-400 gradient-shade-50 gradient-angle-90 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-90</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-indigo-400 gradient-shade-50 gradient-angle-135 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-135</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-purple-400 gradient-shade-50 gradient-angle-180 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-180</span>
    </div>
</div>

### Gradient Mix
{% include code-block-onetag.html tag="div" content="gradient-mix-{color} gradient-angle-{angle}" %}
This utility makes a gradient using specific color. Examples below demonstrate the mix of two accents

<div class="flex flex-row flex-1 flex-wrap gap-md ">
    <div
        class="min-w-fit px-sm py-base bg-accent-green-400 gradient-mix-accent-amber-300 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-0</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-teal-400 gradient-mix-accent-purple-300 gradient-angle-45 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-45</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-blue-400 gradient-mix-accent-pink-300 gradient-angle-90 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-90</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-indigo-400 gradient-mix-accent-red-300 gradient-angle-135 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-135</span>
    </div>
    <div
        class="min-w-fit px-sm py-base bg-accent-purple-400 gradient-mix-accent-indigo-300 gradient-angle-180 rounded-md flex-1 items-center justify-center flex">
        <span
            class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">gradient-angle-180</span>
    </div>
</div>

Also you can use them with icons
{% include code-block-onetag.html tag="span" content="icon icon-{icon} color-{color} gradient-mix-{color} gradient-angle" %}

<div class="flex flex-row gap-md flex-wrap">
    <span
        class="icon icon-xl icon-user color-accent-green-300 gradient-mix-accent-blue-300 gradient-angle-135"></span>
    <span
        class="icon icon-xl icon-activity color-accent-red-300 gradient-mix-accent-indigo-300 gradient-angle-135"></span>
    <span
        class="icon icon-xl icon-cpu color-accent-green-300 gradient-mix-accent-purple-300 gradient-angle-135"></span>
    <span
        class="icon icon-xl icon-anchor color-accent-blue-300 gradient-mix-accent-violet-300 gradient-angle-135"></span>
    <span
        class="icon icon-xl icon-chrome color-accent-amber-300 gradient-mix-accent-pink-300 gradient-angle-135"></span>
    <span
        class="icon icon-xl icon-cup color-accent-teal-300 gradient-mix-accent-purple-300 gradient-angle-135"></span>
    <span
        class="icon icon-xl icon-upload-cloud color-accent-pink-300 gradient-mix-accent-violet-300 gradient-angle-135"></span>
</div>