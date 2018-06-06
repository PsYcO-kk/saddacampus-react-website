var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
					plugins: ['transform-class-properties', 'transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
