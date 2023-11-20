module.exports = {
    mode: 'jit',
    content: [
        './_site/**/*.{html,js}',
        './*.html',
        './**/*.{ts, html, css, md}',
    ],
    presets: [
        require('source-tailwindcss/source-preset')
    ]
}