var chart1_6Instance=undefined;
var chart_mapInstance=undefined;
var jinWeiDuDict={
        "乌克兰": [30.28, 50.3],
        "中国": [116.2, 39.55],
        "阿塞拜疆": [49.56, 40.29],
        "斯洛伐克": [17.07, 48.1],
        "土耳其": [32.54, 39.57],
        "文莱": [115.0, 4.52],
        "阿联酋": [54.22, 24.28],
        "哈萨克斯坦": [71.3, 51.1],
        "巴基斯坦": [73.1, 33.4],
        "乌兹别克斯坦": [69.1, 41.2],
        "缅甸": [96.2, 16.45],
        "斯洛文尼亚": [14.33, 46.04],
        "印度": [77.13, 28.37],
        "越南": [105.55, 21.05],
        "土库曼斯坦": [57.5, 38.0],
        "黎巴嫩": [35.31, 33.53],
        "斯里兰卡": [79.52,6.55],
        "叙利亚": [36.18, 33.3],
        "希腊": [23.46, 37.58],
        "柬埔寨": [104.55, 11.33],
        "捷克": [14.25,50.05],
        "摩尔多瓦": [28.5,47],
        "爱沙尼亚": [24.48, 59.22],
        "塞浦路斯": [33.25, 35.1],
        "俄罗斯": [37.35, 55.45],
        "阿曼": [58.36, 23.37],
        "吉尔吉斯斯坦": [74.46, 42.54],
        "波兰": [21.0, 52.13],
        "拉脱维亚": [24.08, 56.53],
        "克罗地亚": [15.58, 45.5],
        "泰国": [100.35, 13.45],
        "匈牙利": [19.05, 47.29],
        "波黑": [18.26,43.52],
        "伊朗": [51.3, 35.44],
        "约旦": [35.52, 31.57],
        "巴林": [50.3, 26.1],
        "马来西亚": [101.41, 3.09],
        "塞尔维亚": [20.28,44.49],
        "塔吉克斯坦": [68.48, 38.33],
        "阿尔巴尼亚": [19.49, 41.18],
        "罗马尼亚": [26.1, 44.27],
        "保加利亚": [23.2, 42.45],
        "也门": [44.14,15.23],
        "亚美尼亚": [44.31, 40.1],
        "沙特阿拉伯": [46.42, 24.41],
        "埃及": [31.14, 30.01],
        "伊拉克": [44.3, 33.2],
        "老挝": [102.36, 17.58],
        "孟加拉国": [90.26, 23.43],
        "阿富汗": [69.11, 34.28],
        "卡塔尔": [51.35, 25.15],
        "蒙古国": [106.53,47.55],
        "尼泊尔": [85.2, 27.45],
        "以色列": [35.12, 31.47],
        "菲律宾": [121.03, 14.4],
        "白俄罗斯": [27.3, 53.52],
        "印度尼西亚": [106.49, -6.09],
        "立陶宛": [25.19, 54.38],
        "马尔代夫": [73.28, 4.0],
        "北马其顿": [21.26, 42.01],
        "格鲁吉亚": [44.5, 41.43],
        "科威特": [48.0, 29.3],
        "新加坡": [103.45,1.22]
    };

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
    $("#chart1_extend h2:first").html("2014-2019 "+EnglishMap[country_name]+"'s GDP Display");

    // 根据获取的数据更改图表
    chart2_1(data['years'],data['gdps']);
}

// 根据国家输入更改图表2
function changeChart2ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getBilateralInvestmentByCountryName(country_name);

    // 更改图表标题
    if(country_name==="中国") {
        $("#chart2_extend h2:first").html("China's Imports,Exports and Total");
    }else
        $("#chart2_extend h2:first").html(EnglishMap[country_name] + "'s Imports,Exports and Total to China");

    // 根据获取的数据更改图表
    chart2_2(data['year'],data['total'],data['inside'],data['outside']);
}

// 根据国家输入更改图表3

// 根据国家输入更改图表4
function changeChart4ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getFDIByCountryName(country_name);

    // 更改图表标题
    $("#chart4_extend h2:first").html("2014-2019 "+EnglishMap[country_name]+" Foreign Direct Investment Display");

    // 根据获取的数据更改图表
    chart2_4(data['years'],data['fdiData']);
}

// 根据国家输入更改图表5
function changeChart5ByCountry(country_name) {
    // 发送ajax请求获取数据
    let data=getDependenceByCountryName(country_name);

    // 更改图表标题
    if(country_name==="中国")
        $("#chart5_extend h2:first").html("2014-2018 China's Foreign Trade Dependence");
    else
        $("#chart5_extend h2:first").html("2014-2018 "+EnglishMap[country_name]+"'s Foreign Trade Dependence");

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
function changeAllChartByCountry(country_name_en) {
    let country_name=ChineseMap[country_name_en];
    // 将输入框中的内容改成对应的国家名
    $("#input_search").val(country_name_en);

    changeChart1ByCountry(country_name);
    changeChart2ByCountry(country_name);
    changeChart4ByCountry(country_name);
    changeChart5ByCountry(country_name);
    changeChart6();

    console.log(chart_mapInstance);
    if(chart_mapInstance){
        console.log("hello");
        let amapComponent = chart_mapInstance.getModel().getComponent('amap');
        let amap = amapComponent.getAMap();
        amap.remove(amap.getAllOverlays());
        let marker = new AMap.Marker({
            position: new AMap.LngLat(jinWeiDuDict[country_name][0],jinWeiDuDict[country_name][1]),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: country_name,
        });
       amap.add(marker);
    }
}




//// 时间输入、时间轴相关
// 根据时间轴时间更改图表1
function changeChart1ByYear() {
    // 获取时间轴时间
    let year=parseInt($(".act:first").text());

    // 发送ajax请求获取数据
    let data1=getGDPTop8(year);

    // 更改图表的标题
    $(".bar h2:first").html("Top 8 GDP of B&R Countries&nbsp&nbsp——"+year);
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
    $("#chart2_extend h2:first").html("Top8 in Total,Imports and Exports to China&nbsp&nbsp——"+year);

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
    $("#chart3_extend h2:first").html("Distribution of Cooperation Countries&nbsp&nbsp——"+year);

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
    $("#chart4_extend h2:first").html("Top10 Foreign Direct Investment&nbsp&nbsp——"+year);

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
    $("#chart5_extend h2:first").html("Top10 Foreign Trade Dependence&nbsp&nbsp——"+year);

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
    chart_mapInstance=chart_map(year,data);
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
    // console.log(EnglishMap)
}


/************************************************/



/************************************************/
////// 输入控件
//// 输入框相关
// 根据输入框的内容进行搜索
function searchCountries() {
    let value=$("#input_search").val();
    // 向服务器请求数据
    let ret=getSomeCountries_en(value);
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