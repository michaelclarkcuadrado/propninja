const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    mode: (process.env.NODE_ENV === 'production' ? 'production' : 'development'),
    entry: {
        dashboard: './js/dashboard.js',
        index: './js/index.js',
        kanban: './js/kanban.js',
        newProperty: './js/newProperty.js'
    },
    output: {
        filename: '[name].dist.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader' }

        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{ from: 'html/', to: '' }]),
        new VueLoaderPlugin(),
        new MinifyPlugin({},{
            comments: false,
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};