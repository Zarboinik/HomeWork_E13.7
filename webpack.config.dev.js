const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
        open: true,
        port: 3001,
    },
    stats: {
        children: false
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
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            { test: /\.css$/,
                use: ['style-loader', 'css-loader'] }
        ]
    }
};
