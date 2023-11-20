module.export = {
    datauri: 'base64', // 'base64'|'enc'|'unenc'
    js2svg: {
        indent: 4, // number
        pretty: false // boolean
    },
    plugins: [
        "removeDimensions",
        "addAttributesToSVGElement"
    ]
}