// document.write("<script language=javascript src='https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'></script>");
// //分辨率适配
function resize() {
    var normalWidth = 1920; // 设计的宽度
    // window.screen.widthg根据屏幕尺寸（建议）
    // document.body.clientWidth根据浏览器尺寸
    s = window.screen.width / normalWidth;
    // zoom不是正式属性，不会错位，但是性能可能会有问题，参考文献3
    // document.body.style.zoom = s;
    // scale是正式属性，对于top/left类的布局可能会造成错位
    document.body.style.transformOrigin = '0 0';
    document.body.style.zoom = s;
}
//pc.js
//设计图纸为1366*798
function pagePc() {
    let rootValue = 100;
    let pc = rootValue / 1366; // 表示1366的设计图,使用100px的默认值
    let width = window.innerWidth; // 当前窗口的宽度
    let height = window.innerHeight; // 当前窗口的高度
    let rem = "";
    let currentHeight = (width * 798) / 1366;
    if (height < currentHeight) {
        // 当前屏幕高度小于应有的屏幕高度，就需要根据当前屏幕高度重新计算屏幕宽度
        width = (height * 1366) / 798;
    }
    rem = width * pc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    document.documentElement.style.fontSize = rem + "px";

}

pagePc();
window.onresize = function() {
    pagePc();
}



//获取当前日期
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

//判断字符是否为空的方法
function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}
$(function() {　
        if (window.history && window.history.pushState) {　　
            $(window).on('popstate', function() {　　　
                window.history.pushState('forward', null, '#');　　　
                window.history.forward(1);　　
            });　
        }　
        window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
        　
        window.history.forward(1);
    })
    //cookie管理
var manageCookie = {
    setCookie: function(name, value, time) {
        document.cookie = name + '=' + value;
        return this;
    },
    removeCookie: function(name) {
        this.setCookie(name, '', -1);
        return this;
    },
    clearAllCookie: function() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    },
    getCookie: function(key) { //不考虑同名不同路径的cookie,即默认即使不同路径也不会出现同名的cookie
        var cookieArr = document.cookie.split('; ');
        for (var i = 0; i < cookieArr.length; i++) {
            var arr = cookieArr[i].split('=');
            if (arr[0] === key) {
                return arr[1];
            }
        }
        return false;
    }
}

$.ajaxSetup({
    headers: {
        Token: manageCookie.getCookie("token")
    },
    complete: function(XMLHttpRequest, textStatus) {
        if (XMLHttpRequest.responseJSON.code == "302" || XMLHttpRequest.responseJSON.code == "401" || XMLHttpRequest.responseJSON
            .code == "404" ||
            XMLHttpRequest.responseJSON.code == "500" || XMLHttpRequest.responseJSON.code == "504" || XMLHttpRequest.responseJSON
            .code == "110") {
            manageCookie.clearAllCookie();
            var localStorage = window.localStorage;
            localStorage.clear();
            var sessionStorage = window.sessionStorage;
            sessionStorage.clear();
            top.location.href = XMLHttpRequest.responseJSON.data + "/views/login.html";
        }
    }
});