module.exports = {
    entry: './app/App.js',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
    // resolve: {
    //     alias: {},
    //     modulesDirectories: ["web_modules", "node_modules"],
    //     extensions: ["", ".webpack.js", ".web.js", ".js"],
    //     packageMains: ["webpack", "browser", "browserify", "web", "main"],
    //     loaderExtensions:  [
    //         ".webpack-web-loader.js",
    //         ".webpack-loader.js",
    //         ".web-loader.js",
    //         ".loader.js",
    //         "",
    //         ".js"
    //     ],
    //     loaderPostfixes: [
    //         "-webpack-web-loader",
    //         "-webpack-loader",
    //         "-web-loader",
    //         "-loader",
    //         ""
    //     ],
    //     loaderPackageMains: ["webpackLoader", "webLoader", "loader", "webpack", "web", "main"]
    // }

};
