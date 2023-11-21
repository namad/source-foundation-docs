### Colour opacity
Colour opacity is adjusted with color-mix() function

{% include code-block-onetag.html tag="div" content="bg-opacity-{opacity} border-opacity-{opacity} color-opacity-{opacity}" %}

{% include code-block-start.html %}
```css
.bg-opacity-90 {
    background-color: color-mix(in srgb, var(--bg-color), transparent 10%);
}
.border-opacity-90 {
    border-color: color-mix(in srgb, var(--border-color), transparent 10%);
}
.color-opacity-90 {
    color: color-mix(in srgb, var(--text-color), transparent 10%);
}
```
{% include code-block-end.html %}

<div class="flex md:flex-row flex-col flex-1 rounded overflow-hidden">
    <div class="py-base bg-accent-teal-400 bg-opacity-90 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">bg-opacity-90</span>
    </div>
    <div class="py-base bg-accent-teal-400 bg-opacity-80 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">bg-opacity-80</span>
    </div>
    <div class="py-base bg-accent-teal-400 bg-opacity-70 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">bg-opacity-70</span>
    </div>
    <div class="py-base bg-accent-teal-400 bg-opacity-60 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">bg-opacity-60</span>
    </div>
    <div class="py-base bg-accent-teal-400 bg-opacity-50 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">bg-opacity-50</span>
    </div>
</div>

<div class="flex md:flex-row flex-col flex-1 rounded overflow-hidden">
    <div class="py-base bg-alt-base-100 color-opacity-90 flex-1 items-center justify-center flex">
        <span class="font-mono rounded-sm px-xs2 py-minor-xs3 text-xs">color-opacity-90</span>
    </div>
    <div class="py-base bg-alt-base-100 color-opacity-80 flex-1 items-center justify-center flex">
        <span class="font-mono rounded-sm px-xs2 py-minor-xs3 text-xs">color-opacity-80</span>
    </div>
    <div class="py-base bg-alt-base-100 color-opacity-70 flex-1 items-center justify-center flex">
        <span class="font-mono rounded-sm px-xs2 py-minor-xs3 text-xs">color-opacity-70</span>
    </div>
    <div class="py-base bg-alt-base-100 color-opacity-60 flex-1 items-center justify-center flex">
        <span class="font-mono rounded-sm px-xs2 py-minor-xs3 text-xs">color-opacity-60</span>
    </div>
    <div class="py-base bg-alt-base-100 color-opacity-50 flex-1 items-center justify-center flex">
        <span class="font-mono rounded-sm px-xs2 py-minor-xs3 text-xs">color-opacity-50</span>
    </div>
</div>

### Colour tint
Colour tint adds a linear gradient with two semitransparent white colour stops.
{% include code-block-onetag.html tag="div" content="tint-{opacity}" %}

{% include code-block-start.html %}
{% highlight css %}
.tint-30 {
    background-image: linear-gradient(180deg, hsla(0deg 0% 100% / 30%), hsla(0deg 0% 100% / 30%));
}
{% endhighlight %}
{% include code-block-end.html %}

<div class="flex md:flex-row flex-col flex-1 rounded overflow-hidden">
    <div class="py-base bg-accent-purple-400 tint-10 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-10</span>
    </div>
    <div class="py-base bg-accent-purple-400 tint-20 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-20</span>
    </div>
    <div class="py-base bg-accent-purple-400 tint-30 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-30</span>
    </div>
    <div class="py-base bg-accent-purple-400 tint-40 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-40</span>
    </div>
    <div class="py-base bg-accent-purple-400 tint-50 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-50</span>
    </div>
</div>

#### Background Blend Mode

{% include code-block-onetag.html tag="div" content="tint-{opacity} bg-blend-overlay" %}
<div class="flex md:flex-row flex-col flex-1 rounded overflow-hidden">
    <div class="py-base bg-accent-purple-400 bg-blend-overlay tint-10 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-10</span>
    </div>
    <div class="py-base bg-accent-purple-400 bg-blend-overlay tint-20 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-20</span>
    </div>
    <div class="py-base bg-accent-purple-400 bg-blend-overlay tint-30 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-30</span>
    </div>
    <div class="py-base bg-accent-purple-400 bg-blend-overlay tint-40 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-40</span>
    </div>
    <div class="py-base bg-accent-purple-400 bg-blend-overlay tint-50 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">tint-50</span>
    </div>
</div>

### Colour shade

Colour shade adds a linear gradient with two semitransparent black colour stops.

{% include code-block-onetag.html tag="div" content="shade-{opacity}" %}
{% include code-block-start.html %}
{% highlight css %}
.shade-30 {
    background-image: linear-gradient(180deg, hsla(0deg 0% 0% / 30%), hsla(0deg 0% 0% / 30%));
}
{% endhighlight %}
{% include code-block-end.html %}
<div class="flex md:flex-row flex-col flex-1 rounded overflow-hidden">
    <div class="py-base bg-accent-green-400 shade-10 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-10</span>
    </div>
    <div class="py-base bg-accent-green-400 shade-20 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-20</span>
    </div>
    <div class="py-base bg-accent-green-400 shade-30 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-30</span>
    </div>
    <div class="py-base bg-accent-green-400 shade-40 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-40</span>
    </div>
    <div class="py-base bg-accent-green-400 shade-50 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-50</span>
    </div>
</div>

#### Background Blend Mode

{% include code-block-onetag.html tag="div" content="shade-{opacity} bg-blend-overlay" %}
<div class="flex md:flex-row flex-col flex-1 rounded overflow-hidden">
    <div class="py-base bg-accent-green-400 bg-blend-overlay shade-10 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-10</span>
    </div>
    <div class="py-base bg-accent-green-400 bg-blend-overlay shade-20 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-20</span>
    </div>
    <div class="py-base bg-accent-green-400 bg-blend-overlay shade-30 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-30</span>
    </div>
    <div class="py-base bg-accent-green-400 bg-blend-overlay shade-40 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-40</span>
    </div>
    <div class="py-base bg-accent-green-400 bg-blend-overlay shade-50 flex-1 items-center justify-center flex">
        <span class="font-mono color-text-contrast-500 rounded-sm px-xs2 py-minor-xs3 text-xs">shade-50</span>
    </div>
</div>