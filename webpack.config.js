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
            }
        ]
    }

}