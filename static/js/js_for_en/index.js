$(function () {
    // 给标题绑定点击事件
    $("#title_btn div").click(changePagePosition);

    // 给搜索按钮绑定事件
    $("#input_search").on('input',searchCountries);
    // $("#input_search").focus(searchCountries);

    // 点击页面任何其他地方 搜索结果框消失
    document.onclick = () => clearContent();

    // 搜索框的列表项被点击时的事件绑定
    $('#on_changes').on('click','li',function () {
        let str=$(this).html();
        str=str.replaceAll("&nbsp;","");
        changeAllChartByCountry(str);
    });

    // 给时间轴相关按钮绑定事件
    $(".event_box").slide({ titCell: ".parHd li",trigger:"click", mainCell: ".parBd", defaultPlay: false, titOnClassName: "act", prevCell: ".sPrev", nextCell: ".sNext" });
    $(".parHd").slide({ mainCell: " ul", vis: 5, effect: "leftLoop", defaultPlay: false, prevCell: ".sPrev", nextCell: ".sNext" })
    // 点击时间轴的某一项绑定事件
    $(".parHd li").click(changeAllChartByYear);
    // 上一个下一个按钮绑定事件
    $(".sPrev").click(changeAllChartByYear);
    $(".sNext").click(changeAllChartByYear);

    // 7张统计图的初始渲染
    changeAllChartByYear();
});