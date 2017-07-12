var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

const devServer = new WebpackDevServer(webpack(webpackConfig), {
    hot    : true,
    quiet  : false,
    noInfo : false,
    lazy   : false,
    stats  : {
        colors : true
    },
    historyApiFallback : true
});

const host = "localhost";
const port = 3006;
devServer.listen(port, host, function () {
    console.log("Webpack dev server running at " + host + ":" + port); // eslint-disable-line
});
