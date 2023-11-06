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
});