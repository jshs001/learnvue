// 1 使用es6 导入语法 导入jquery
import $ from 'jquery'

// 2 使用jquery 定义入口函数
$(function () {
    // 实现奇偶异色
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'skyblue')
})