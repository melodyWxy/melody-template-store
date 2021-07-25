const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const env = process.env.NODE_ENV;
const isEnvDevelopment = env === 'development';
const cssModule = {
	localIdentName: '[local]_[hash:base64:5]',
};
const miniCssExtractPluginConfig = {
	loader: MiniCssExtractPlugin.loader,
	options: {
		hmr: isEnvDevelopment,
		reloadAll: true,
	},
};
const packageJsonName = require('../package.json').name;

const publicPaths = {
	development: '',
	production: '',// publish cdn
};

const currentEnvPublicPath = publicPaths[env];

module.exports = {
	entry: paths.appIndexJs,
	output: {
		path: paths.appDist,
		filename: isEnvDevelopment ? 'js/bundle.js' : 'js/[name].[contenthash:5].js',
		chunkFilename: isEnvDevelopment ? 'js/[name].chunk.js' : 'js/[name].[contenthash:5].chunk.js',
		publicPath: currentEnvPublicPath,
		jsonpFunction: `${packageJsonName}WebpackJsonp`,
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		alias: {
			'@': paths.appSrc,
		},
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					test: paths.appNodeModules,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: packageJsonName,
			filename: 'index.html',
			template: paths.appHtml,
		}),
		new AntdDayjsWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: paths.appSrc,
				loader: ['babel-loader', 'ts-loader', isEnvDevelopment && 'eslint-loader'].filter(Boolean),
			},
			{
				test: /\.css$/,
				include: paths.appNodeModules,
				use: [
					isEnvDevelopment ? 'style-loader' : miniCssExtractPluginConfig,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.css$/,
				exclude: paths.appNodeModules,
				use: [
					isEnvDevelopment ? 'style-loader' : miniCssExtractPluginConfig,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: cssModule,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				include: paths.appNodeModules,
				use: [
					isEnvDevelopment ? 'style-loader' : miniCssExtractPluginConfig,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.less$/,
				exclude: paths.appNodeModules,
				use: [
					isEnvDevelopment ? 'style-loader' : miniCssExtractPluginConfig,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: cssModule,
						},
					},
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'images/[name].[hash:5].[ext]',
							publicPath: currentEnvPublicPath,
						},
					},
				],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[hash:5].[ext]',
				},
			},
		],
	},
};
