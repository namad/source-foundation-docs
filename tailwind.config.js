module.exports = {
    mode: 'jit',
    content: [
        './_site/**/*.{html,js}',
        './*.html',
        './**/*.{ts, html, css}',
    ],
    presets: [
        require('source-tailwindcss')
    ]
}