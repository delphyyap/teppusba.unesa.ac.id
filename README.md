!function() {
    "use strict";
    function t() {
        return "cf-marker-" + Math.random().toString().slice(2)
    }
    function e() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        (n = console.warn || console.log).call.apply(n, [console, "[ROCKET LOADER] "].concat(t));
        var n
    }
    function n(t, e) {
        var n = e.parentNode;
        n && h(t, n, e)
    }
    function r(t, e) {
        h(t, e, e.childNodes[0])
    }
    function o(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function i(t) {
        var e = t.namespaceURI === A ? "xlink:href" : "src";
        return t.getAttribute(e)
    }
    function a(t, e) {
        var n = t.type.substr(e.length);
