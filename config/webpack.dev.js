const paths = require('./paths');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: paths.appDist,
		compress: true,
		port: 9000,
		historyApiFallback: true,
		quiet: true,
		overlay: true,
		open: true,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()],
});
