const path = require('path');
module.exports = {

	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
    },
	module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
		inline: true,
		port: 8080
    }
};
