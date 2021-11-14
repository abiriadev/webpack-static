// comment
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js',
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Webpack Project!',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            template: './src/index.ejs',
        }),
    ],
};
