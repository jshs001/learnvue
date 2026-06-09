// 1 使用es6 导入语法 导入jquery
import $ from 'jquery'
// 导入样式（在webpack中，一切皆模块，都可以通过es6导入语法进行导入和使用） 
import './css/index.css'
import './css/index.less'

// import a from './css/index.css'
// import b from './css/index.less'
// console.log(a,b)  // a,b为空对象 只需要加载样式文件 就可以了 
// 如果某个模块使用from接收到的成员为undefined 则没有必要进行接收

// 导入图片
import logo from './images/logo.png'
console.log(logo) // logo为图片的绝对路径或者base64编码
// 将图片添加到页面中
$('.box').attr('src', logo)

// 2 使用jquery 定义入口函数
$(function () {
    // 实现奇偶异色
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'skyblue')
})

//测试高级语法
// 定义装饰器
function info(target) {
    target.info = 'Person info'
}

@info
class Person{}

console.log(Person.info)