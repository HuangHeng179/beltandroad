var chart1_6Instance=undefined;

// 点击标题改变位置
function changePagePosition(){
    // bridge 为指定跳转到该位置的DOM节点    
    let bridge = document.querySelector('#mainbox');
    let body = document.body;    
    let height = 0;        
    // 计算该 DOM 节点到 body 顶部距离    
    do {      
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;    
    } while (bridge !== body)        
    // 滚动到指定位置    
    window.scrollTo({      
        top: height,      
        behavior: 'smooth'
    })  
}


/************************************************/
////// 输入响应
//// 国家输入（map、输入框可以实现此输入）
// 根据国家输入更改图表1
function changeChart1ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getGDPDataByCountryName(country_name);

    // 更改图表标题
    $("#chart1_extend h2:first").html("2014-2019年 "+country_name+"GDP一览");

    // 根据获取的数据更改图表
    chart2_1(data['years'],data['gdps']);
}

// 根据国家输入更改图表2
function changeChart2ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getBilateralInvestmentByCountryName(country_name);

    // 更改图表标题
    if(country_name==="中国") {
        $("#chart2_extend h2:first").html("中国对外的进口额、出口额和进出口总额");
    }else
        $("#chart2_extend h2:first").html(country_name + "对中国进口额、出口额和进出口总额");

    // 根据获取的数据更改图表
    chart2_2(data['year'],data['total'],data['inside'],data['outside']);
}

// 根据国家输入更改图表3

// 根据国家输入更改图表4
function changeChart4ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getFDIByCountryName(country_name);

    // 更改图表标题
    $("#chart4_extend h2:first").html("2014-2019年 "+country_name+"外商直接投资一览");

    // 根据获取的数据更改图表
    chart2_4(data['years'],data['fdiData']);
}

// 根据国家输入更改图表5
function changeChart5ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getDependenceByCountryName(country_name);

    // 更改图表标题
    if(country_name==="中国")
        $("#chart5_extend h2:first").html("2014-2018年 中国的外贸依存度展示");
    else
        $("#chart5_extend h2:first").html("2014-2018年 "+country_name+"对中国的外贸依存度展示");

    let years=[];
    let maxNum=Math.max(...data['dependence']);
    // console.log(maxNum);
    for(let j = 0,len=data['years'].length; j < len; j++) {
        years.push({name:data['years'][j],max:Math.ceil(maxNum/10)*10});
    }
    // console.log(years);
    // console.log(data);
    // 根据获取的数据更改图表
    chart2_5(years,data['dependence']);
}

// 根据国家输入更改图表6
function changeChart6(){
    // 发送ajax请求获取数据
    let data=get10News();
    if(chart1_6Instance!=undefined){
        echarts.dispose(chart1_6Instance);
        chart1_6Instance=chart1_6(data['title'],data['link'],data['value']);
    }else{
        chart1_6Instance=chart1_6(data['title'],data['link'],data['value']);
    }

}

// 根据国家输入更改所有图表
function changeAllChartByCountry(country_name) {
    // 将输入框中的内容改成对应的国家名
    $("#input_search").val(country_name);

    changeChart1ByCountry(country_name);
    changeChart2ByCountry(country_name);
    changeChart4ByCountry(country_name);
    changeChart5ByCountry(country_name);
    changeChart6();

}




//// 时间输入、时间轴相关
// 根据时间轴时间更改图表1
function changeChart1ByYear() {
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data1=getGDPTop8(year);

    // 更改图表的标题
    $(".bar h2:first").html("一带一路沿线国家GDP TOP8&nbsp&nbsp——"+year+"年");
    // 根据获取的数据更改图表
    chart1_1(data1.countries,data1.gdps);
}

// 根据时间轴时间更改图表2
function changeChart2ByYear(){
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data=getBilateralInvestmentByYear(year);

    // 更改图表的标题
    $("#chart2_extend h2:first").html("对中国进出口总额Top8&nbsp&nbsp——"+year+"年");

    // 数据数组的构建
    let xData=[],seriesDataInside=[],seriesDataOutside=[],seriesDataTotal=[];
    data.forEach(function (e) {
        xData.push(e[0]);
        seriesDataTotal.push(e[1]);
        seriesDataInside.push(e[2]);
        seriesDataOutside.push(e[3]);
    });

    // 根据获取的数据更改图表
    chart1_2(xData,seriesDataInside,seriesDataOutside,seriesDataTotal);
}


// 根据时间轴时间更改图表3
function changeChart3ByYear() {
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data=getJoinCountryByYear(year);

    // 更改图表的标题
    $("#chart3_extend h2:first").html("签订共建“一带一路”合作文件国家分布&nbsp&nbsp——"+year+"年");

    // areaArr的构建
    let areaArr=[]
    for(let key in data){
        if(data[key]!=0) {
            areaArr.push({value: data[key], name: key})
        }
    }
    areaArr.sort(function (a,b) {
        return a.value-b.value
    })
    // 根据获取的数据更改图表
    chart1_3(year,areaArr);
}

// 根据时间轴时间更改图表4
function changeChart4ByYear() {
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data=getFDITop10ByYear(year);

    // 更改图表的标题
    $("#chart4_extend h2:first").html("外商直接投资 Top10&nbsp&nbsp——"+year+"年");

    // 根据获取的数据更改图表
    chart1_4(data['countrys'],data['fdiData']);
}

// 根据时间轴时间更改图表5
function changeChart5ByYear() {
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data=getDependenceByYear(year);

    // 更改图表的标题
    $("#chart5_extend h2:first").html("“一带一路”沿线国家外贸依存度 Top10&nbsp&nbsp——"+year+"年");

    // 构建参数
    let indicator=[];
    let seriesData=[];
    let maxnum=0;
    for (let j = 0,len=data.length; j < len; j++) {
        if(data[j][1]>maxnum){
            maxnum=data[j][1];
        }
    }
    for(let j = 0,len=data.length; j < len; j++) {
        indicator.push({name:data[j][0],max:Math.ceil(maxnum/10)*10}); //向上整除 4/3=2;});
        seriesData.push(data[j][1]);
    }
    // console.log(seriesData)
    // 根据获取的数据更改图表
    chart1_5(indicator,seriesData);
}


// 根据时间轴时间更改图表6

// 根据时间轴时间更改地图
function changeChartMapByYear() {
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data=getMapDatasByYear(year);

    // 构建参数
    chart_map(year,data);
}

// 根据时间轴更改所有图表
function changeAllChartByYear() {
    changeChart1ByYear();
    changeChart2ByYear();
    changeChart3ByYear();
    changeChart4ByYear();
    changeChart5ByYear();
    changeChart6();
    changeChartMapByYear();
    $("#input_search").val("");
}


/************************************************/



/************************************************/
////// 输入控件
//// 输入框相关
// 根据输入框的内容进行搜索
function searchCountries() {
    let value=$("#input_search").val();
    // 向服务器请求数据
    let ret=getSomeCountries(value);
    // console.log(ret.length);
    if(ret.length===0 || value===""){
        $("#on_changes").html("");
    }else{
        let str=""
        for(let i=0;i<ret.length;i++){
            str+="<li>&nbsp&nbsp&nbsp"+ret[i]+"</li>";
            // console.log(ret[i]);
        }
        // console.log(str);
        $("#on_changes").html(str);
    }
}

// 清除建议框内容
function clearContent() {
    var searchResult = document.getElementById("on_changes");
    var size = searchResult.childNodes.length;
    for (let i = size - 1; i >= 0; i--) {
        searchResult.removeChild(searchResult.childNodes[i]);
    }
}
/************************************************/