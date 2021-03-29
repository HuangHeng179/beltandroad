$(function () {
    // 7张统计图渲染
    chart1();
    chart2();
    chart3();
    chart4();
    chart5();
    chart6();
    chart7();
    //
    // let proposals = ['百度1', '百度2', '百度3', '百度4','a1','a2','a3','a4','b1','b2','b3','b4'];
    // $('#search-form').autocomplete({
    //     hints: proposals,
    //     width: 300,
    //     height: 30,
    //     onSubmit: function(text){
    //         $('#message').html('Selected: <b>' + text + '</b>');
    //     }
    // });

    // 给搜索按钮绑定事件
    $("#input_search").on('input',searchCountries);

    // 点击页面任何其他地方 搜索结果框消失
    document.onclick = () => clearContent()
});