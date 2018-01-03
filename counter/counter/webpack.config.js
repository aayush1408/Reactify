const path =require('path');
const HtmlWebpackPlugun = require('html-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:'babel-loader'
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    devServer:{
        contentBase:path.join(__dirname+'dist'),
        compress:true,
        open:true,
        stats:'errors-only',  
        port:9000
    },
    plugins:[new HtmlWebpackPlugun({
        title:'TodoApp',
        template:'./src/index.html',
        minify:{
            collapseWhitespace:true
        },
        hash:true
    })],
    watch:true
};
