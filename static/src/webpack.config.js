const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
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
        ],
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'html/', to: ''}]),
        new CleanWebpackPlugin(['dist'])
    ]
};