var config={
    context:__dirname,
    entry:'./main.js',
    output:{
        path:__dirname+'/public',
        filename:'index.js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            },
           { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
    
}

module.exports=config;