const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry : './src/index.js',
    output : {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname, 'dist'),
        clean : true,
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port : 8080,
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, use: 'babel-loader' 
            }
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: "React App With Webpack",
            filename : "index.html",
            template: './src/index.html',
        })
    ],
    mode : 'development'
}