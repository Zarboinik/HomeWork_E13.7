const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        open: true,
        port: 3001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
            { test: /\.css$/,
                use: ['style-loader', 'css-loader'] }
        ]
    }
};
