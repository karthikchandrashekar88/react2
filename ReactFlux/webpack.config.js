module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
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
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        }]
    }
};
