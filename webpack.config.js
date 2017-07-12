var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template : __dirname + '/src/index.html',
            hash     : true,
            filename : 'index.html',
            inject   : 'body'
        })
    ],
    entry: [
        'babel-polyfill',
        './src/main',
        'webpack-dev-server/client?http://localhost:3006'
    ],
    output: {
        path:  __dirname + "/dist",
        filename: 'main.[hash].js'
    },
    resolve: {
        alias      : {
            'utils': path.resolve(__dirname, 'src/utils/'),
            'constants': path.resolve(__dirname, 'src/constants/'),
            'services': path.resolve(__dirname, 'src/services/'),
            'actions': path.resolve(__dirname, 'src/actions/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'containers': path.resolve(__dirname, 'src/containers/'),
            'routes': path.resolve(__dirname, 'src/routes/'),
            'layouts': path.resolve(__dirname, 'src/layouts/')
        }
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            query: {
                plugins: ['transform-runtime', 'transform-react-jsx', 'transform-object-rest-spread'],
                presets: [["env", {}]]
            }
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }]
    },
    devServer: {
        contentBase: "./src",
        port: "3006"
    }
};