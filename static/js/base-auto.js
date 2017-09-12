/**
 * Created by Administrator on 2016/6/30.
 */
// (function () {
//     document.addEventListener('DOMContentLoaded', function () {
//         var html = document.documentElement;
//         var windowWidth = html.clientWidth;
//         html.style.fontSize = windowWidth / 7.5 + 'px';
//         // �ȼ���html.style.fontSize = windowWidth / 750 * 100 + 'px';
//     }, false);
// })();


(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            docEl.style.fontSize =clientWidth / 7.5 + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);