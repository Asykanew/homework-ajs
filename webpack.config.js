const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
},
module: {
    rules: [
        {
        test: /\.txt$/,
        use: 'raw-loader'
    },
    {
        test: /\.css$/,
        use: 'css-loader'
    },
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
    ]
}
}