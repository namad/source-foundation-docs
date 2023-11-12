Icon set is based on <a href="https://feathericons.com/" target="_blank">Feather Icons</a>, popular and
well recognised style. It was refined for lower DPI screens and extended with filled variant

{% include code-block-onetag.html tag="span" content="icon icon-{name} icon-{size}" %}

### Sizes
{% include home/icon-sizes.html %}

### Names
{% include code-block-onetag.html tag="span" content="icon icon-md icon-{name}" %}

<div class="radio-segment items-center justify-center text-sm p-0.5" id="iconSizeControl">
    <label class="flex-1">
        <input type="radio" name="iconSize" value="sm" />
        <span class="container">
            <span>Small</span>
        </span>
    </label>
    <label class="flex-1">
        <input type="radio" name="iconSize" value="base" />
        <span class="container">
            <span>Base</span>
        </span>
    </label>
    <label class="flex-1">
        <input type="radio" name="iconSize" value="md" checked />
        <span class="container">
            <span>Medium</span>
        </span>
    </label>
    <label class="flex-1">
        <input type="radio" name="iconSize" value="lg" />
        <span class="container">
            <span>Large</span>
        </span>
    </label>
</div>
<script>
document.getElementById('iconSizeControl').querySelectorAll('input[type=radio]').forEach(el => {
    el.addEventListener('click', (e) => {
        const name = el.name;
        const value = el.value;
        document.getElementById('iconSet').style.setProperty('--icon-size', `var(--icon-size-${value})`)
    })
});
</script>
{% include home/icon-names.html %}