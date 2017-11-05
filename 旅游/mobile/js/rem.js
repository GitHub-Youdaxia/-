// REM布局需引入的JS代码,像素/100,设计稿 元素高度是120px,代码写1.2rem
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);