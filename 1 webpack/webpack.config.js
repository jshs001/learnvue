const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // 1 引入html-webpack-plugin插件

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
        filename: 'bundle.js'
    },
    // 指定输出文件

    plugins: [htmlPlugin],  // 3 通过plugin节点配置 使html-webpack-plugin插件生效

    devServer:{
        open: true,
        host: '123.0.0.1',
        port: 80,
    }
    // 首次打包成功后 自动打开浏览器的地址和端口
}
