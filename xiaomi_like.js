// ==UserScript==
// @name         小米社区一键点赞和比心
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  手动下拉加载帖子。加载完了再点一键点赞
// @author       wu_
// @match        *://www.xiaomi.cn/*
// @grant        none
// @updateURL https://raw.githubusercontent.com/cuw8250/xiaomi_like/main/xiaomi_like.js
// ==/UserScript==

(function() {
    'use strict';

function dianzanFun() {
    let dianzan = document.querySelectorAll('img[src="//rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/zan.8abff612.svg"]');
    if (dianzan.length) {
        for (var i = 1; i < dianzan.length; i++) {
            dianzan[i].click();
            console.log(dianzan.length)
            console.log(i)
            if(i == dianzan.length-1){
                alert("点了" + i + "个赞，暂时未加载更多")
            }
        }
    } else {
        alert('没有需要点赞的帖子！')
    }
}
function bixinFun() {
    let bixin = document.querySelectorAll('img[src="//rs.vip.miui.com/vip-resource/prod/mio-pc/v1/static/media/like.fa79ba75.svg"]');
    if (bixin.length) {
        for (var j = 1; j < bixin.length; j++) {
            bixin[j].click();
            if(j == bixin.length-1){
                alert("点了" + j + "个比心，暂时未加载更多")
            }
        }
    } else {
        alert('没有需要比心的帖子！')
    }
}

let button1 = document.createElement('button');
button1.style = "width: 70px;font-size: 14px;background: rgba(148, 141, 255,.5);position: fixed;top: 10px; right: 0;cursor: pointer; border-radius: 10px;display: flex;justify-content: center;align-items: center;";
button1.innerHTML = "一键全赞";
document.querySelector('.wrapper').appendChild(button1);
button1.addEventListener('click', function (e) {
    dianzanFun();
})
let button2 = document.createElement('button');
button2.style = "width: 70px;font-size: 14px;background: rgba(148, 141, 255,.5);position: fixed;top: 80px; right: 0;cursor: pointer; border-radius: 10px;display: flex;justify-content: center;align-items: center;";
button2.innerHTML = "一键比心";
document.querySelector('.wrapper').appendChild(button2);
button2.addEventListener('click', function (e) {
    bixinFun();
})
    // Your code here...
})();
