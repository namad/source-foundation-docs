module.exports = {
    mode: 'jit',
    content: [
        './_site/**/*.{html,js}',
        './*.html',
        './**/*.{ts, html, css, md}',
    ],
    presets: [
        require('source-tailwindcss/source-preset')
    ],

    theme: {
        fontSize: {
            "xs2": ["var(--font-size-xs2)", "var(--line-height-xs2)"],
            "xs": ["var(--font-size-xs)", "var(--line-height-xs)"],
            "sm": ["var(--font-size-sm)", "var(--line-height-sm)"],
            "base": ["var(--font-size-base)", "var(--line-height-base)"],
            "md": ["var(--font-size-md)", "var(--line-height-md)"],
            "lg": ["var(--font-size-lg)", "var(--line-height-lg)"],
            "xl": ["var(--font-size-xl)", "var(--line-height-xl)"],
            "xl2": ["var(--font-size-xl2)", "var(--line-height-xl2)"],
            "xl3": ["var(--font-size-xl3)", "var(--line-height-xl3)"],
            "xl4": ["var(--font-size-xl4)", "var(--line-height-xl4)"],
            "xl5": ["var(--font-size-xl5)", "var(--line-height-xl5)"],
            "xl6": ["var(--font-size-xl6)", "var(--line-height-xl6)"],
            "xl7": ["var(--font-size-xl7)", "var(--line-height-xl7)"],
        },    
    }
}