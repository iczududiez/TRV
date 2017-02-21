var path = require('path');

module.exports = {
    entry: './client/client.js',
    output:{
        path: './public',
        filename:'bundle.js',
        publicPath: '/'
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx|es6)$/,
                exclude: '/node_modules/',
                loaders:['babel-loader','eslint-loader'],
                query:{
                    presets:['react','es2015','eslint']
                }
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            pngquant: {
                                quality: '0-90',
                                speed: 4
                            }
                        }
                    }
                ],
                include: path.resolve('./public/image/')
            }
        ]
    }

}