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
                loader:'babel-loader',
                query:{
                    presets:['react']
                }
            },{
                test: /\.css$/,loader: "style-loader!css-loader",
                //test: /\.css$/,
                //loaders: ['css-loader', 'style-loader'],
                //include: __dirname + '/public/cssSASS/'
            }
        ]
    }

}