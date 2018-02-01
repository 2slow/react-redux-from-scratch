const webpack = require('webpack')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'nosources-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'webpack-dev-server/client?http://0.0.0.0:3006',
        './src/index'
    ],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, './dist'),
        filename: 'main.[hash].js'
    },
    resolve: {
        alias      : {
            'utils': path.resolve(__dirname, './src/utils/'),
            'constants': path.resolve(__dirname, './src/constants/'),
            'services': path.resolve(__dirname, './src/services/'),
            'actions': path.resolve(__dirname, './src/actions/'),
            'reducers': path.resolve(__dirname, './src/reducers/'),
            'components': path.resolve(__dirname, './src/components/'),
            'layouts': path.resolve(__dirname, './src/layouts/'),
            'store': path.resolve(__dirname, './src/store/')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /__test__/],
                use: [
                    "babel-loader",
                    {
                        loader: "eslint-loader",
                        options: {
                            emitWarning: true
                        }
                    }
                ],
            },
            {
                test: [/\.css/, /\.less$/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        template : __dirname + '/src/index.html',
        hash     : true,
        filename : 'index.html',
        inject   : 'body'
    }),
        new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()

    ]
};