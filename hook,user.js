// ==UserScript==
// @name         全局函数拦截模板（带接口）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hook指定的全局变量中的函数，并在函数执行时进行拦截和替换
// @author       Your Name
// @match        *://*/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 接口函数，用于 hook 全局变量
    function hook(varName, hookFunction) {
        const globalVariable = window[varName]; // 获取全局变量
        if (!globalVariable) {
            console.error('全局变量不存在:', varName);
            return;
        }
        // hook 全局变量
        window[varName] = hookFunction(globalVariable);
    }

    // 常用的拦截器模板
    function constantValueInterceptor(value) {
        // 返回一个高阶函数
        return function (originFunc) {
            // 返回一个新函数
            return function () {
                // 总是返回指定的值
                return value;
            };
        };
    }

    // 使用示例
    hook("yz",
        constantValueInterceptor(true));
})();