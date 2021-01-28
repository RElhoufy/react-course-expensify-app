const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
          }]  
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};