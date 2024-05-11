// ==UserScript==
// @name         页面按钮插件模板
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在页面右下角插入一个按钮，点击按钮请求网址并将其内容显示出来
// @author       Your Name
// @match        *://*/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 创建按钮
    var button = $('<button>请求网址</button>').css({
        'position': 'fixed',
        'bottom': '20px',
        'right': '20px',
        'padding': '10px',
        'background-color': '#007bff',
        'color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer'
    });

    // 添加按钮到页面
    $('body').append(button);

    // 按钮点击事件
    button.click(function () {
    });
})();