module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './',
        port: 7980
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        }]
    }
};
