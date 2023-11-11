Color system delivers seamless dark mode using CSS custom properties (a.k.a. variables).
Source Design System completely replaces Tailwind colors with Source colors.
It uses plugins to support CSS variables integration with Tailwind utility classes.

<a href="https://medium.com/user-experience-design-1/designing-colour-system-d9d39f245e01" target="_blank">Learn more about Source Color System →</a>

### Neutrals
Neutral colours are the foundation for the visual language that defines the overall tone of your
application. It could be fully desaturated, slightly colder or warmer, or even tinted in a fancy way to
support the brand.

#### Fills
Fills are the lightest shades in your arsenal and should be used as the main background colours.

##### Light surface colors
{% include code-block-onetag.html tag="div" content="bg-fill-base-{shade}" %}
{% include color-shades.html color="bg-fill-base" %}

##### Dark surface colors
{% include code-block-onetag.html tag="div" content="bg-fill-contrast-{shade}" %}
{% include color-shades.html color="bg-fill-contrast" class="color-text-contrast-600" %}

#### Strokes
Strokes are not supposed to fill large areas but outline or divide them.

##### Light surface strokes
{% include code-block-onetag.html tag="div" content="border-stroke-base-{shade}" %}
{% include color-shades.html color="bg-stroke-base" %}

##### Dark surface strokes
{% include code-block-onetag.html tag="div" content="border-stroke-contrast-{shade}" %}
{% include color-shades.html color="bg-stroke-contrast" class="color-text-contrast-500" %}

#### Alt Colors
Alt or alternative colours are semi-transparent ones and could be applied both as fills and strokes.

##### Light surface tints
{% include code-block-onetag.html tag="div" content="bg-alt-base-{shade}" %}
{% include color-shades.html color="bg-alt-base" %}

##### Dark surface tints
{% include code-block-onetag.html tag="div" content="bg-alt-contrast-{shade}" %}
{% include color-shades.html color="bg-alt-contrast" class="bg-fill-contrast-100 color-text-contrast-600"  %}

### Primary / Brand Color
Brand colour is key to the immediate brand recognition of your product
{% include code-block-onetag.html tag="div" content="bg-primary-{shade}"%}
{% include color-shades-accent.html color="bg-primary" %}

### Semantics
These colours communicate feedback, status, or urgency and should always convey important information

#### Success
{% include code-block-onetag.html tag="div" content="bg-success-{shade}" %}
{% include color-shades-accent.html color="bg-success" %}

#### Info
{% include code-block-onetag.html tag="div" content="bg-info-{shade}" %}
{% include color-shades-accent.html color="bg-info" %}

#### Warning
{% include code-block-onetag.html tag="div" content="bg-warning-{shade}" %}
{% include color-shades-accent.html color="bg-warning" %}

#### Danger
{% include code-block-onetag.html tag="div" content="bg-danger-{shade}" %}
{% include color-shades-accent.html color="bg-danger" %}

### Text colors
{% include code-block-onetag.html tag="span" content="color-{color}" %}

For the text, there are three shades for visual hierarchy and several colours for semantics. It is an
independent sub-palette that makes it easier to fit into WCAG accessibility requirements.

Semantics are derived from accents. Shade 500 is for light backgrounds and shade 600 is for dark
backgrounds.

#### Text on light background
<div class="bg-alt-base-100 rounded overflow-hidden">
    <div class="flex flex-row text-xs color-text-base-500 font-mono rounded overflow-hidden">
        <div class="w-1/5 p-md color-text-base-600">--text-base-600</div>
        <div class="w-1/5 p-md color-text-base-500">--text-base-500</div>
        <div class="w-1/5 p-md color-text-base-400">--text-base-400</div>
    </div>
    <div class="flex flex-row text-xs color-text-base-500 font-mono rounded overflow-hidden">
        <div class="w-1/5 p-md color-text-base-action">--text-base-action</div>
        <div class="w-1/5 p-md color-text-base-info">--text-base-info</div>
        <div class="w-1/5 p-md color-text-base-success">--text-base-success</div>
        <div class="w-1/5 p-md color-text-base-warning">--text-base-warning</div>
        <div class="w-1/5 p-md color-text-base-danger">--text-base-danger</div>
    </div>
</div>

#### Text on dark background
<div class="bg-fill-contrast-300 rounded overflow-hidden">
    <div class="flex flex-row text-xs color-text-base-500 font-mono rounded overflow-hidden">
        <div class="w-1/5 p-md color-text-contrast-600 ">--text-contrast-600</div>
        <div class="w-1/5 p-md color-text-contrast-500 ">--text-contrast-500</div>
        <div class="w-1/5 p-md color-text-contrast-400 ">--text-contrast-400</div>
    </div>
    <div class="flex flex-row text-xs color-text-base-500 font-mono rounded overflow-hidden">
        <div class="w-1/5 p-md color-text-contrast-action ">--text-contrast-action</div>
        <div class="w-1/5 p-md color-text-contrast-info ">--text-contrast-info</div>
        <div class="w-1/5 p-md color-text-contrast-success ">--text-contrast-success</div>
        <div class="w-1/5 p-md color-text-contrast-warning ">--text-contrast-warning</div>
        <div class="w-1/5 p-md color-text-contrast-danger ">--text-contrast-danger</div>
    </div>
</div>

### Accents

The accent palette brings life and meaning to your product. The colour spots can guide user attention,
emphasise brand connection or communicate a system state. There are ten accents to work with.

{% include code-block-oneliner.html class="" content="&lt;div class='bg-accent-red-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-red" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-amber-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-amber" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-brown-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-brown" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-green-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-green" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-teal-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-teal" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-blue-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-blue" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-indigo-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-indigo" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-violet-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-violet" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-purple-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-purple" %}

{% include code-block-oneliner.html class="mt-sm" content="&lt;div class='bg-accent-pink-{shade} ...' />"%}
{% include color-shades-accent.html color="bg-accent-pink" %}