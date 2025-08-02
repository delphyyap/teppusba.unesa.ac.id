$(function() {
    function t(t, e) {
        function a() {
            i = n.node().getBoundingClientRect().width - r.left - r.right,
            v.attr("width", i + r.left + r.right),
            x.attr("width", i + r.left + r.right),
            u.range([0, i]),
            x.selectAll(".d3-axis-horizontal").call(m),
            x.selectAll(".d3-axis-subticks").attr("x1", u).attr("x2", u),
            x.selectAll(".d3-grid-dashed").call(y.tickSize(-i, 0, 0)),
