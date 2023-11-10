const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            'border': (value) => ({
                '--border-width': value
            })
        },
        {
            values: theme('borderWidth')
        }
    )
    matchUtilities(
        {
            'ghost-border-1': (value) => ({
                'box-shadow': `inset 0 0 0 1px ${value}`
            }),
            'ghost-border-2': (value) => ({
                'box-shadow': `inset 0 0 0 2px ${value}`
            }),
            'ghost-border-3': (value) => ({
                'box-shadow': `inset 0 0 0 3px ${value}`
            }),
            'ghost-border-4': (value) => ({
                'box-shadow': `inset 0 0 0 4px ${value}`
            })
        },
        {
            values: theme('colors')
        }
    )
});