let path=require('path')
console.log(path.resolve(__dirname,'dist'))
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:3000,
        contentBase:'./dist',
        progress:true,
        compress:true
    }
}