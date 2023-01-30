const purgecss = require('@fullhuman/postcss-purgecss')
const nanocss = require('cssnano')
module.exports = {
    plugins:{
        tailwindcss:{},
        autoprefixer:{},
        nanocss({
            preset:'default'
        }),
        purgecss({
            content:['./**/*.html']
        })
    }
}