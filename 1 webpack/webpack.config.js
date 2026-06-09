const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // 1 引入html-webpack-plugin插件

const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 3 引入clean-webpack-plugin插件


// 2 创建html-webpack-plugin插件实例 
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定需要复制的文件路径
    filename: './index.html' // 指定输出文件路径
});

module.exports = {
    mode: 'development',
    // mode指定构建模式 分development和production；开发时候用development速度快 线上用production体积小（压缩）

    entry: path.join(__dirname, 'src/index.js'),
    // 指定要处理的入口文件

    output: {
        path: path.join(__dirname, 'dist'),
        // filename: 'bundle.js'
        filename: 'js/bundle.js'
    },
    // 指定输出文件

    plugins: [htmlPlugin,new CleanWebpackPlugin()],  // 3 通过plugin节点配置 使html-webpack-plugin和clean-webpack-plugin插件生效 

    devServer:{
        open: true,
        host: '127.0.0.1',
        port: 80,
    },
    // 首次打包成功后 自动打开浏览器的地址和端口

    module: {
        rules: [
            {
                test: /\.css$/,    //表示匹配的文件类型 正则匹配.css文件
                use: ['style-loader', 'css-loader'] // 指定使用的loader 顺序是固定的 是从右向左调用 处理后把结果转交给webpack
            },
            // 配置css文件的处理规则

            {
                test: /\.less$/,    //表示匹配的文件类型 正则匹配.less文件
                use: ['style-loader', 'css-loader', 'less-loader'] // 配置less文件的处理规则
            },
            // 配置less文件的处理规则

            {
                test: /\.(png|jpg|gif|jpeg)$/,
                // use: 'url-loader?limit=1000'  // limit 限制图片大小 1000字节内图片会转成base64编码 否则会转成图片路径
                use: 'url-loader?limit=1000&outputPath=images/'  // outputPath指定图片输出的位置
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             limit: 5000,
                //             outputPath: 'images/'
                //         }
                //     }
                // ]
            },
            // 配置图片的处理规则

            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/  // 排除node_modules下的文件 因为第三方包中js文件兼容性已经处理了
            },
            // 处理高级语法 js文件的处理规则
        ]
            
        
    },
}
