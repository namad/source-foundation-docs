module.exports = {
    mode: 'jit',
    content: [
        './*.html',
        './**/*.{ts, html, css}',
    ],
    presets: [
        require('./tw/source-preset')
    ]
}

