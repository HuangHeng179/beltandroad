$(function () {
    // 给搜索按钮绑定事件
    $("#input_search").on('input',searchCountries);

    // 点击页面任何其他地方 搜索结果框消失
    document.onclick = () => clearContent()

    // 给时间轴相关按钮绑定事件
    $(".event_box").slide({ titCell: ".parHd li",trigger:"click", mainCell: ".parBd", defaultPlay: false, titOnClassName: "act", prevCell: ".sPrev", nextCell: ".sNext" });
    $(".parHd").slide({ mainCell: " ul", vis: 5, effect: "leftLoop", defaultPlay: false, prevCell: ".sPrev", nextCell: ".sNext" })
    // 点击时间轴的某一项绑定事件
    $(".parHd li").click(changeChartByYear);
    // 上一个下一个按钮绑定事件
    $(".sPrev").click(changeChartByYear);
    $(".sNext").click(changeChartByYear);

    // 7张统计图的初始渲染
    // chart1的初始渲染
    changeChartByYear();
    chart2();
    chart3();
    chart4();
    chart5();
    chart6();
    chart7();
});