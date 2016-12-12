var webpack = require("webpack");

module.exports = {
    entry: './main.js',
    output: {
        path: 'build/',
        filename: 'bundle.js'
    },
    // resolve: {
    //     alias: {
    //         jquery: "jquery/src/jquery"
    //     }
    // },
    plugins: [
        // $ & jQuery are available in other.js, but not from console
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]/*,
    module: {
        loaders: [

        ]
    }*/
};