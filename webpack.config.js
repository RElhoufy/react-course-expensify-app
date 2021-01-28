const path = require('path');

module.exports = {
    entry: './src/app.js',       //MUST HAVE this property. States where our app starts
    output: {                   //MUST HAVE this property with those modules
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
            loader: 'babel-loader',       //telling babel to grab all js files and process them
            test: /\.js$/,
            exclude: /node_modules/
      }, {
            test: /\.s?css$/,                 //telling babel to grab all css files and process them
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
      }]  
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};