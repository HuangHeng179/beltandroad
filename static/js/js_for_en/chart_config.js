var EnglishMap=hMap={
    '阿富汗': 'Afghanistan',
    '阿尔巴尼亚': 'Albania',
    '亚美尼亚': 'Armenia',
    '阿塞拜疆': 'Azerbaijan',
    '孟加拉国': 'Bangladesh',
    '保加利亚': 'Bulgaria',
    '白俄罗斯': 'Belarus',
    '文莱': 'Brunei',
    '不丹': 'Bhutan',
    '柬埔寨': 'Cambodia',
    '中国': 'China',
    '克罗地亚': 'Croatia',
    '捷克': 'Czech Rep.',
    '埃及': 'Egypt',
    '爱沙尼亚': 'Estonia',
    '匈牙利': 'Hungary',
    '印度': 'India',
    '印度尼西亚': 'Indonesia',
    '伊朗': 'Iran',
    '伊拉克': 'Iraq',
    '以色列': 'Israel',
    '哈萨克斯坦': 'Kazakhstan',
    '科威特': 'Kuwait',
    '吉尔吉斯斯坦': 'Kyrgyzstan',
    '老挝': 'Lao PDR',
    '拉脱维亚': 'Latvia',
    '黎巴嫩': 'Lebanon',
    '立陶宛': 'Lithuania',
    '北马其顿': 'Macedonia',
    '马来西亚': 'Malaysia',
    '摩尔多瓦': 'Moldova',
    '蒙古国': 'Mongolia',
    '黑山': 'Montenegro',
    '缅甸': 'Myanmar',
    '尼泊尔': 'Nepal',
    '阿曼': 'Oman',
    '巴基斯坦': 'Pakistan',
    '菲律宾': 'Philippines',
    '波兰': 'Poland',
    '卡塔尔': 'Qatar',
    '罗马尼亚': 'Romania',
    '俄罗斯': 'Russia',
    '沙特阿拉伯': 'Saudi Arabia',
    '塞尔维亚': 'Serbia',
    '斯洛伐克': 'Slovakia',
    '斯洛文尼亚': 'Slovenia',
    '斯里兰卡': 'Sri Lanka',
    '叙利亚': 'Syria',
    '塔吉克斯坦': 'Tajikistan',
    '泰国': 'Thailand',
    '东帝汶': 'Timor-Leste',
    '土耳其': 'Turkey',
    '土库曼斯坦': 'Turkmenistan',
    '乌克兰': 'Ukraine',
    '乌兹别克斯坦': 'Uzbekistan',
    '越南': 'Vietnam',
    '也门': 'Yemen',
    '巴勒斯坦': 'Palestine',
    '新加坡': 'Singapore',
    '巴林': 'Bahrain',
    '波黑': 'Bosnia and Herz.',
    '格鲁吉亚': 'Georgia',
    '阿联酋': 'United Arab Emirates',
    '约旦': 'Jordan',
    '马尔代夫': 'Maldives',
    "希腊":"Greece",
    "塞浦路斯": "Cyprus",
    "意大利": "Italy",
    "韩国": "Korea",
};

var ChineseMap={
	'Afghanistan': '阿富汗',
	'Albania': '阿尔巴尼亚',
	'Armenia': '亚美尼亚',
	'Azerbaijan': '阿塞拜疆',
	'Bangladesh': '孟加拉国',
	'Bulgaria': '保加利亚',
	'Belarus': '白俄罗斯',
	'Brunei': '文莱',
	'Bhutan': '不丹',
	'Cambodia': '柬埔寨',
	'China': '中国',
	'Croatia': '克罗地亚',
	'Czech Rep.': '捷克',
	'Egypt': '埃及',
	'Estonia': '爱沙尼亚',
	'Hungary': '匈牙利',
	'India': '印度',
	'Indonesia': '印度尼西亚',
	'Iran': '伊朗',
	'Iraq': '伊拉克',
	'Israel': '以色列',
	'Kazakhstan': '哈萨克斯坦',
	'Kuwait': '科威特',
	'Kyrgyzstan': '吉尔吉斯斯坦',
	'Lao PDR': '老挝',
	'Latvia': '拉脱维亚',
	'Lebanon': '黎巴嫩',
	'Lithuania': '立陶宛',
	'Macedonia': '北马其顿',
	'Malaysia': '马来西亚',
	'Moldova': '摩尔多瓦',
	'Mongolia': '蒙古国',
	'Montenegro': '黑山',
	'Myanmar': '缅甸',
	'Nepal': '尼泊尔',
	'Oman': '阿曼',
	'Pakistan': '巴基斯坦',
	'Philippines': '菲律宾',
	'Poland': '波兰',
	'Qatar': '卡塔尔',
	'Romania': '罗马尼亚',
	'Russia': '俄罗斯',
	'Saudi Arabia': '沙特阿拉伯',
	'Serbia': '塞尔维亚',
	'Slovakia': '斯洛伐克',
	'Slovenia': '斯洛文尼亚',
	'Sri Lanka': '斯里兰卡',
	'Syria': '叙利亚',
	'Tajikistan': '塔吉克斯坦',
	'Thailand': '泰国',
	'Timor-Leste': '东帝汶',
	'Turkey': '土耳其',
	'Turkmenistan': '土库曼斯坦',
	'Ukraine': '乌克兰',
	'Uzbekistan': '乌兹别克斯坦',
	'Vietnam': '越南',
	'Yemen': '也门',
	'Palestine': '巴勒斯坦',
	'Singapore': '新加坡',
	'Bahrain': '巴林',
	'Bosnia and Herz.': '波黑',
	'Georgia': '格鲁吉亚',
	'United Arab Emirates': '阿联酋',
	'Jordan': '约旦',
	'Maldives': '马尔代夫',
};

function chart0() {
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart3"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {};

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}


function chart1_1(countries,gdps){
    let countries_en=[];
    for(let i=0;i<countries.length;i++){
        countries_en.push(EnglishMap[countries[i]]);
    }

    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart1"));


    // console.log(mychart);
    // 2.指定配置项和数据
    let option= {
        color:["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            position: function(point, params, dom, rect, size){
                return [point[0]+20,point[1]];
            },
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                // console.log(params)
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+(params[0].value/10).toFixed(2)+" billion dollars"
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: countries_en,
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签相关样式
                axisLabel:{
                    color:"white",
                    interval:0
                },
                // 不显示x坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',

                // 修改刻度标签相关样式
                axisLabel:{
                    color:"white",
                },

                // y轴分割线的样式
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Gross Domestic Product',
                type: 'bar',
                barWidth: '35%',
                data: gdps,
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                },

            }
        ]
    };
    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart1_2(xData,seriesDataInside,seriesDataOutside,seriesDataTotal) {
    let xData_en=[];
    for(let i=0;i<xData.length;i++){
        xData_en.push(EnglishMap[xData[i]]);
    }


    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart2"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'axis',
            position: function(point, params, dom, rect, size){
                return [point[0]+20,point[1]];
            },
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                let str=params[0].axisValue+"<br/>";
                params.forEach(function (e) {
                    str+=e.marker+e.seriesName+": "+(e.value/100).toFixed(2)+" million dollars<br/>";
                });
                return str
            }
        },
        legend: {
            data: ['imports','exports','total'],
            textStyle:{
                color:"#FFF",
            },
        },
        grid: {
            left: '0%',
            top:'12px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xData_en,
                axisLabel:{
                    color:"#FFF",
                    interval:0
                },
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签相关样式
                axisLabel:{
                    color:"white",
                },

                // y轴分割线的样式
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'imports',
                type: 'bar',
                stack: '外贸数据',
                barWidth: '35%',
                emphasis: {
                    focus: 'series'
                },
                data: seriesDataInside,
                // itemStyle: {
                //     // 修改柱子圆角
                //     barBorderRadius: 5
                // },
            },
            {
                name: 'exports',
                type: 'bar',
                stack: '外贸数据',
                barWidth: '35%',
                emphasis: {
                    focus: 'series'
                },
                data: seriesDataOutside,
                // itemStyle: {
                //     // 修改柱子圆角
                //     barBorderRadius: 5
                // },
            },
            {
                name: 'total',
                type: 'bar',
                stack: '外贸数据',
                barWidth: '35%',
                emphasis: {
                    focus: 'series'
                },
                data: seriesDataTotal,
                // itemStyle: {
                //     // 修改柱子圆角
                //     barBorderRadius: 5
                // },
            },
        ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart1_3(year,areaArr) {
    let areaArr_en=[];
    // res={'亚洲':0,'非洲':0,'大洋洲':0,'南美洲':0,'北美洲':0,'欧洲':0}
    let areaDict= {
        '亚洲': 'Asia',
        '非洲': 'Africa',
        '欧洲': 'Europe',
        '北美洲': 'North America',
        '南美洲': 'South America',
        '大洋洲': 'Oceania'
    };
    for(let i=0;i<areaArr.length;i++){
        // console.log(areaArr[i]);
        areaArr_en.push({name:areaDict[areaArr[i].name],value:areaArr[i].value});
    }
    // console.log(areaArr_en);

    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart3"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // textStyle:{
        //     fontSize:16,
        // },
        series: [
            {
                name: year,
                type: 'pie',
                radius: [20, 80],
                roseType: 'radius',
                data: areaArr_en,
                label: {
                    fontSize: 15,
                    // color:'#FFF',
                },
            }
        ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}


function chart1_4(countries,fdiData) {
    let countries_en=[];
    for(let i=0;i<countries.length;i++){
        countries_en.push(EnglishMap[countries[i]]);
    }
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart4"));

    // console.log(mychart);
    // 2.指定配置项和数据
    var labelRight = {
        position: 'right'
    };
    let option = {
        color:["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                // console.log(params)
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+(params[0].value/10).toFixed(2)+" billion dollars"
            }
        },
        grid: {
            left: '5%',
            top:'0px',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel:{
                color:"white",
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data: countries_en
        },
        series: [
            {
                name: 'foreign direct investment',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: fdiData,
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                },
            }
        ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart1_5(indicator,seriesData) {
    // 将indicator的中文改成英文
    for(let i=0;i<indicator.length;i++){
        indicator[i].name=EnglishMap[indicator[i].name];
    }

    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart5"));

    // console.log(indicator)
    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let str="Top10 Foreign Trade Dependence"+"<br>";
                for(let j=0;j<indicator.length;j++){
                    str+=indicator[j].name+"："+seriesData[j]+"%<br/>";
                }
                return str;
            }
        },
        radar: [{
            indicator: indicator,
            center: ['50%', '50%'],
            radius: 85,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            // shape: 'circle',
            // backgroundColor: {
            //     image:imgPath[0]
            // },
            name: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 14, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['transparent'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        }, ],
        series: [{
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [ {
                name: '外贸依存度Top10',
                value: seriesData,
                symbolSize: 5,
                "itemStyle": {
                    "normal": {
                        color:'rgba(19, 173, 255, 1)',
                        "borderColor": "rgba(19, 173, 255, 0.4)",
                        "borderWidth": 8
                    }
                },
                areaStyle: {
                    "normal": {
                        "color": "rgba(19, 173, 255, 0.5)"
                    }
                },
                "lineStyle": {
                    "normal": {
                        "color": "rgba(19, 173, 255, 1)",
                        "width": 1,
                        "type": "dashed"
                    }
                },
            }]
        }, ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart1_6(title,link,value){
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart6"));

    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter:function (params) {
                return title[params[0].dataIndex]+'<br/>'+params[0].marker+"hot index"+": "+params[0].value
            }
        },
        grid: {
            left: '5%',
            top:'0px',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel:{
                color:"white",
            },
            // 不显示x坐标轴的样式
            axisLine:{
                show:false
            },
            // y轴分割线的样式
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['News10','News9','News8','News7','News6','News5','News4','News3','News2','News1'],
            axisLabel:{
                color:"white",
            },
            // 不显示x坐标轴的样式
            axisLine:{
                show:false
            },
            // y轴分割线的样式
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            }
        },
        series: [
            {
                name: '2012年',
                type: 'bar',
                data: value,
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                },
            }
        ]
    };
    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    mychart.on('click',  function(param){
        // console.log(param);
       window.open(link[param.dataIndex]);
    });

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
    return mychart;
}

function chart2_1(years,gdps) {
    let years_en=[];
    for(let i=0;i<years.length;i++){
        years_en.push(years[i].substr(0,years[i].length-1));
    }

    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart1"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        color:["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                // console.log(params)
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+(params[0].value/10).toFixed(2)+" billion dollars"
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: years_en,
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签相关样式
                axisLabel:{
                    color:"white",
                    interval:0
                },
                // 不显示x坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',

                // 修改刻度标签相关样式
                axisLabel:{
                    color:"white",
                },

                // y轴分割线的样式
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Gross Domestic Product',
                type: 'bar',
                barWidth: '35%',
                data: gdps,
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                },

            }
        ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart2_2(years,total,inside,outside) {
    let years_en=[];
    for(let i=0;i<years.length;i++){
        years_en.push(years[i].substr(0,years[i].length-1));
    }
    // console.log(year)
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart2"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        legend: {
            textStyle:{
                color:"#FFF",
            },
        },
        tooltip: {
            formatter:function(params){
                let str="";
                str+=params[0].axisValue+'<br/>';
                for(let i=0;i<3;i++){
                    str+=params[i].marker+params[i].seriesName+": "+(params[i].value/100).toFixed(2)+" million dollars"+"<br/>"
                }
                return str
            },
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }],
                        global: false
                    }
                },
            },
        },
        grid: {
            left: '0%',
            top:'12px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                show: true
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00'
                },
            },
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            boundaryGap: true,
            data: years_en,
        }],

        yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: {
                show: true,
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [{
                name: 'imports',
                type: 'line',
                smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 15,
                lineStyle: {
                    normal: {
                        color: "#00b3f4",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00b3f4',
                    }
                },
                itemStyle: {
                    color: "#00b3f4",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                // tooltip: {
                //     show: false
                // },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,179,244,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,179,244,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,179,244, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: inside,
            },
            {
                name: 'exports',
                type: 'line',
                smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 15,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },
                itemStyle: {
                    color: "#00ca95",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                // tooltip: {
                //     // show: false
                //     formatter:function(params){
                //       return params+"万美元";
                //     }
                // },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: outside,
            },
            {
                name: 'total',
                type: 'line',
                smooth: true, //是否平滑
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 15,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                    }
                },
                itemStyle: {
                    color: 'rgb(221,81,69)',
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                // tooltip: {
                //     show: false
                // },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: total,
            },
        ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart2_3() {

}

function chart2_4(years,fdiData) {
    let years_en=[];
    for(let i=0;i<years.length;i++){
        years_en.push(years[i].substr(0,years[i].length-1));
    }

    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart4"));

    // console.log(mychart);
    // 2.指定配置项和数据
    var labelRight = {
        position: 'right'
    };
    let option = {
        color:["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                // console.log(params)
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+(params[0].value/10).toFixed(2)+" billion dollars"
            }
        },
        grid: {
            left: '5%',
            top:'0px',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel:{
                color:"white",
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data: years_en
        },
        series: [
            {
                name: 'foreign direct investment',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: fdiData,
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                },
            }
        ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart2_5(years,dependence) {
    for(let i=0;i<years.length;i++){
        years[i].name=years[i].name.substr(0,years[i].name.length-1)
    }

    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart5"));

    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let str="Foreign Trade Dependence"+"<br>";
                for(let j=0;j<years.length;j++){
                    str+=years[j].name+"："+dependence[j]+"%<br/>";
                }
                return str;
            }
        },
        radar: [{
            indicator: years,
            center: ['50%', '50%'],
            radius: 85,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            name: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 14, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['transparent'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        }, ],
        series: [{
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [ {
                name: '外贸依存度Top10',
                value: dependence,
                symbolSize: 5,
                "itemStyle": {
                    "normal": {
                        color:'rgba(19, 173, 255, 1)',
                        "borderColor": "rgba(19, 173, 255, 0.4)",
                        "borderWidth": 8
                    }
                },
                areaStyle: {
                    "normal": {
                        "color": "rgba(19, 173, 255, 0.5)"
                    }
                },
                "lineStyle": {
                    "normal": {
                        "color": "rgba(19, 173, 255, 1)",
                        "width": 1,
                        "type": "dashed"
                    }
                },
            }]
        }, ]
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}

function chart2_6() {

}


function chart_map(year,data){
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector(".map .chart"));

    let jinWeiDuDict={
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

    let convertData = function(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];
            let fromCoord = jinWeiDuDict[dataItem[0].name];
            let toCoord = jinWeiDuDict[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    let color=['rgb(106,176,184)','green','rgb(47,69,84)','blue','rgb(116,159,131)','black','rgb(128,0,128)','#9ae5fc', '#dcbf71'];
    let series=[];

    let country65name=['不丹','东帝汶','中国','乌克兰','乌兹别克斯坦','也门','亚美尼亚','以色列','伊拉克','伊朗','俄罗斯','保加利亚','克罗地亚','匈牙利','北马其顿','卡塔尔','印度','印度尼西亚','叙利亚','吉尔吉斯斯坦','哈萨克斯坦','土库曼斯坦','土耳其','埃及','塔吉克斯坦','塞尔维亚','孟加拉国','尼泊尔','巴勒斯坦','巴基斯坦','巴林','拉脱维亚','捷克','摩尔多瓦','文莱','斯洛伐克','斯洛文尼亚','斯里兰卡','新加坡','柬埔寨','格鲁吉亚','沙特阿拉伯','波兰','波黑','泰国','爱沙尼亚','白俄罗斯','科威特','立陶宛','约旦','缅甸','罗马尼亚','老挝','菲律宾','蒙古国','越南','阿塞拜疆','阿富汗','阿尔巴尼亚','阿曼','阿联酋','马尔代夫','马来西亚','黎巴嫩','黑山']
    // 给65国做标记
     series.push({ // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'amap',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                fontSize:15,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(81,97,109)'
            },
            emphasis:{
                color:"rgb(213,58,53)",
            }
        },
        data: country65name.map(function(dataItem) {
            return {
                name: EnglishMap[dataItem],
                value: jinWeiDuDict[dataItem],  // 起点的位置
                symbolSize: 100/8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });

    // 1 新亚欧大陆桥
    let road1 = [
        [{ name: "中国" }, { name: "哈萨克斯坦", value: 30 }],
        [{ name: "哈萨克斯坦" }, { name: "俄罗斯", value: 30 }],
        [{ name: "俄罗斯" }, { name: "乌克兰", value: 30 }],
        [{ name: "乌克兰" }, { name: "波兰", value: 30 }],
        [{ name: "波兰" }, { name: "塞尔维亚", value: 30 }],
      ];
    series.push({
            // 白色航线特效图
            type: 'lines',
        "coordinateSystem": "amap",

            zlevel: 1,                    // 用于分层，z-index的效果
            effect: {
                show: true,               // 动效是否显示
                period: 6,                // 特效动画时间
                trailLength: 0.7,         // 特效尾迹的长度
                color: '#fff',            // 特效颜色
                symbolSize: 3             // 特效大小
            },
            lineStyle: {
                normal: {                 // 正常情况下的线条样式
                    color: color[0],
                    width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                    curveness: 0.3       // 线条曲度
                },
                emphasis: {                 // 正常情况下的线条样式
                    color: color[0],
                    width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                    curveness: 0.3       // 线条曲度
                }
            },
            data: convertData(road1)    // 特效的起始、终点位置
        }, {  // 小飞机航线效果
            type: 'lines',
        "coordinateSystem": "amap",
            zlevel: 2,
            //symbol: ['none', 'arrow'],   // 用于设置箭头
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[0],
                    width: 2,
                    opacity: 0.6,
                    curveness: 0.3
                },
                emphasis: {
                    color: color[0],
                    width: 8,
                    opacity: 0.6,
                    curveness: 0.3
                },
            },
            data: convertData(road1)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
        },
    );

    // 2 中国-中亚-西亚经济走廊
    let road2 = [
        [{ name: "中国" }, { name: "吉尔吉斯斯坦", value: 30 }],
        [{ name: "吉尔吉斯斯坦" }, { name: "土库曼斯坦", value: 30 }],
        [{ name: "土库曼斯坦" }, { name: "伊朗", value: 30 }],
        [{ name: "伊朗" }, { name: "沙特阿拉伯", value: 30 }],
        [{ name: "沙特阿拉伯" }, { name: "叙利亚", value: 30 }],
        [{ name: "叙利亚" }, { name: "土耳其", value: 30 }],
      ];
    series.push({
        // 白色航线特效图
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[1],
                width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            },
            emphasis: {                 // 正常情况下的线条样式
                color: color[1],
                width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            }
        },
        data: convertData(road2)    // 特效的起始、终点位置
    }, {  // 小飞机航线效果
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[1],
                width: 2,
                opacity: 0.6,
                curveness: 0.3
            },
            emphasis: {
                color: color[1],
                width: 8,
                opacity: 0.6,
                curveness: 0.3
            }
        },
        data: convertData(road2)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },
    );

    // 3 中巴
    let road3 = [
        [{ name: "中国" }, { name: "巴基斯坦", value: 30 }],
      ];
    series.push({
        // 白色航线特效图
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[2],
                width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.3       // 线条曲度
            },
            emphasis: {                 // 正常情况下的线条样式
                color: color[2],
                width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.3       // 线条曲度
            },
        },
        data: convertData(road3)    // 特效的起始、终点位置
    },
    {  // 小飞机航线效果
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[2],
                width: 2,
                opacity: 0.6,
                curveness: -0.3
            },
            emphasis: {
                color: color[2],
                width: 8,
                opacity: 0.6,
                curveness: -0.3
            },
        },
        data: convertData(road3)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },
    );

    // 4 中蒙俄
    let road4 = [
        [{ name: "中国" }, { name: "蒙古国", value: 30 }],
        [{ name: "蒙古国" }, { name: "俄罗斯", value: 30 }],
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[3],
                width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            },
            emphasis: {                 // 正常情况下的线条样式
                color: color[3],
                width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            }
        },
        data: convertData(road4)    // 特效的起始、终点位置
    }, {  // 小飞机航线效果
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[3],
                width: 2,
                opacity: 0.6,
                curveness: 0.3
            },
            emphasis: {
                color: color[3],
                width: 8,
                opacity: 0.6,
                curveness: 0.3
            },
        },
        data: convertData(road4)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },
    );

    // 5 中国-中南半岛
    let road5 = [
        [{ name: "中国" }, { name: "越南", value: 30 }],
        [{ name: "越南" }, { name: "老挝", value: 30 }],
        [{ name: "老挝" }, { name: "缅甸", value: 30 }],
        [{ name: "缅甸" }, { name: "泰国", value: 30 }],
        [{ name: "泰国" }, { name: "柬埔寨", value: 30 }],
        [{ name: "柬埔寨" }, { name: "马来西亚", value: 30 }],
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[4],
                width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            },
            emphasis: {                 // 正常情况下的线条样式
                color: color[4],
                width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            },
        },
        data: convertData(road5)    // 特效的起始、终点位置
    }, {  // 小飞机航线效果
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[4],
                width: 2,
                opacity: 0.6,
                curveness: 0.3
            },
            emphasis: {
                color: color[4],
                width: 8,
                opacity: 0.6,
                curveness: 0.3
            }
        },
        data: convertData(road5)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },
    );

    // 6 孟中印缅
    let road6 = [
        [{ name: "中国" }, { name: "缅甸", value: 30 }],
        [{ name: "缅甸" }, { name: "孟加拉国", value: 30 }],
        [{ name: "孟加拉国" }, { name: "印度", value: 30 }]
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[5],
                width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2       // 线条曲度
            },
            emphasis: {                 // 正常情况下的线条样式
                color: color[5],
                width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2       // 线条曲度
            },
        },
        data: convertData(road6)    // 特效的起始、终点位置
    }, {  // 小飞机航线效果
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[5],
                width: 2,
                opacity: 0.6,
                curveness: -0.2
            },
            emphasis: {
                color: color[5],
                width: 8,
                opacity: 0.6,
                curveness: -0.2
            },
        },
        data: convertData(road6)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },
    );


    // 7 21世纪海上丝绸之路
    let road7 = [
        [{ name: "中国" }, { name: "菲律宾", value: 30 }],
        [{ name: "菲律宾" }, { name: "印度尼西亚", value: 30 }],
        [{ name: "印度尼西亚" }, { name: "泰国", value: 30 }],
        [{ name: "泰国" }, { name: "印度", value: 30 }],
        [{ name: "印度" }, { name: "马尔代夫", value: 30 }],
        [{ name: "马尔代夫" }, { name: "巴基斯坦", value: 30 }],
        [{ name: "巴基斯坦" }, { name: "阿富汗", value: 30 }],
        [{ name: "阿富汗" }, { name: "埃及", value: 30 }],
        // [{ name: "埃及" }, { name: "希腊", value: 30 }],
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: {
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[6],
                width: 1,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            },
            emphasis: {                 // 正常情况下的线条样式
                color: color[6],
                width: 4,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: 0.3       // 线条曲度
            }
        },
        data: convertData(road7)    // 特效的起始、终点位置
    }, {  // 小飞机航线效果
        type: 'lines',
        "coordinateSystem": "amap",
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[6],
                width: 2,
                opacity: 0.6,
                curveness: 0.3
            },
            emphasis: {
                color: color[6],
                width: 8,
                opacity: 0.6,
                curveness: 0.3
            },
        },
        data: convertData(road7)     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },
    //     { // 散点效果
    //     type: 'effectScatter',
    //     coordinateSystem: 'amap',       // 表示使用的坐标系为地理坐标系
    //     zlevel: 3,
    //     rippleEffect: {
    //         brushType: 'stroke'        // 波纹绘制效果
    //     },
    //     label: {
    //         normal: {                  // 默认的文本标签显示样式
    //             show: true,
    //             position: 'left',      // 标签显示的位置
    //             formatter: '{b}'       // 标签内容格式器
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: color[7]
    //         }
    //     },
    //     data: road7.map(function(dataItem) {
    //         return {
    //             name: dataItem[1].name,
    //             value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
    //             symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
    //         };
    //     })
    // }
    );

    // var disWorld = new AMap.DistrictLayer.World({
    //     zIndex:10,
    //     styles:{
    //         'nation-stroke':function(props){
    //             if(props.type=='Nation_Border_China'){
    //                 return 'red'
    //             }else{
    //                 return 'white'
    //             }
    //         },
    //         'coastline-stroke': [0.8, 0.63, 1, 1],
    //         'fill':function(props){
    //             return getColorBySOC(props.SOC)
    //         }
    //     }
    // });


    // 2.指定配置项和数据
    let option = {
        tooltip : {
            // position: function(point, params, dom, rect, size){
            //     return [point[0]+20,point[1]];
            // },
            show:true,
            trigger: 'item',
            formatter:function (params) {
                if(params.seriesType==="lines"){
                    let index=color.indexOf(params.color);
                    // let lineName=["新亚欧大陆桥","中国-中亚-西亚经济走廊","中巴经济走廊","中蒙俄经济走廊","中国-中南半岛经济走廊","孟中印缅经济走廊","21世纪海上丝绸之路"];
                    let lineName=["New Eurasian Land Bridge","The China-Central Asia-West Asia Economic Corridor","China-Pakistan Economic Corridor","China-Mongolia-Russia Economic Corridor","China-Indochina Peninsula economic corridor","Bangladesh-China-India-Myanmar Economic Corridor","21st Century Maritime Silk Road"];
                    let countryInLine=[
                        ["中国","哈萨克斯坦","俄罗斯","乌克兰","白俄罗斯","格鲁吉亚","阿塞拜疆","亚美尼亚","摩尔多瓦","波兰","立陶宛","爱沙尼亚","拉脱维亚","捷克","斯洛伐克","匈牙利","斯洛文尼亚","克罗地亚","波黑","塞尔维亚","阿尔巴尼亚","罗马尼亚","保加利亚","北马其顿"],
                        ['中国','哈萨克斯坦','乌兹别克斯坦','土库曼斯坦','塔吉克斯坦','吉尔吉斯斯坦','伊朗','伊拉克','土耳其','叙利亚','约旦','黎巴嫩','以色列','沙特阿拉伯','也门','阿曼','阿联酋','卡塔尔','科威特','巴林','希腊','塞浦路斯','埃及'],
                        ['中国','巴基斯坦'],
                        ['中国','蒙古国','俄罗斯'],
                        ['中国','越南','老挝','柬埔寨','缅甸','泰国','新加坡','马来西亚'],
                        ['中国','印度','孟加拉国','缅甸'],
                        ['中国','印度尼西亚','马来西亚','菲律宾','新加坡','泰国','文莱','越南','老挝','缅甸','柬埔寨','印度','巴基斯坦','孟加拉国','阿富汗','斯里兰卡','马尔代夫','尼泊尔','埃及','希腊']
                    ];
                    let str=""
                    for(let i=0;i<countryInLine[index].length;i++){
                        str+=EnglishMap[countryInLine[index][i]]+",";
                        if(i!=0 && i%5===0){
                            str+="<br/>&nbsp&nbsp&nbsp&nbsp";
                        }
                    }
                    str=str.substr(0, str.length - 1);
                    return lineName[index]+"<br/>"+
                        "countries on the line: <br/>&nbsp&nbsp&nbsp&nbsp"+str
                }
                // if(params.name==="")
                //     return "非沿线65国，无相关数据";
                if(params.name===EnglishMap["中国"]) {
                    let country_data = data[ChineseMap[params.name]];
                    return params.name + "<br/>" +
                        year + " Gross Domestic Product: " + (parseFloat(country_data.GDP.substr(0, country_data.GDP.length - 1)) / 10).toFixed(2) + " billion dollars<br/>" +
                        year + " total: " + (parseFloat(country_data.Total.substr(0, country_data.Total.length - 3)) / 100).toFixed(2) + " million dollars<br/>" +
                        year + " foreign direct investment: " + (parseFloat(country_data.FDI.substr(0, country_data.FDI.length - 3)) / 10).toFixed(2) + " billion dollars<br/>" +
                        year + " foreign trade dependence: " + country_data.YiCunDu + "<br/>";
                }
                let country_data = data[ChineseMap[params.name]];
                return params.name + "<br/>" +
                    year + " Gross Domestic Product: " + (parseFloat(country_data.GDP.substr(0, country_data.GDP.length - 1)) / 10).toFixed(2) + " billion dollars<br/>" +
                    year + " total: " + (parseFloat(country_data.Total.substr(0, country_data.Total.length - 3)) / 100).toFixed(2) + " million dollars<br/>" +
                    year + " foreign direct investment: " + (parseFloat(country_data.FDI.substr(0, country_data.FDI.length - 3)) / 10).toFixed(2) + " billion dollars<br/>" +
                    year + " foreign trade dependence: " + country_data.YiCunDu + "<br/>";
            }
        },

        amap: {
          lang: "en",
          // 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
          viewMode: '3D',
          // 高德地图中心经纬度
          center: [100.97, 32.71],
          // 高德地图缩放
          zoom: 4,
          // 启用resize
          // zoomEnable:false,
          resizeEnable: false,
          // 自定义地图样式主题
          mapStyle: 'amap://styles/dark',
          // 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
          renderOnMoving: false,
          // ECharts 图层的 zIndex 默认 2000
          // 从 v1.9.0 起 此配置项已被弃用 请使用 `echartsLayerInteractive` 代替
          echartsLayerZIndex: 2019,
          // 设置 ECharts 图层是否可交互 默认为 true
          // 设置为 false 可实现高德地图自身图层交互
          // 此配置项从 v1.9.0 起开始支持
          echartsLayerInteractive: true,
          // 是否启用大数据模式 默认为 false
          // 此配置项从 v1.9.0 起开始支持
          largeMode: false
          // 说明：如果想要添加卫星、路网等图层
          // 暂时先不要使用layers配置，因为存在Bug
          // 建议使用amap.add的方式，使用方式参见最下方代码
        },
        // 解决重影问题
        animation: false,
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        series : series
    };

    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);

    // 获取 ECharts 高德地图组件
    var amapComponent = mychart.getModel().getComponent('amap');
    // 获取高德地图实例，使用高德地图自带的控件
    var amap = amapComponent.getAMap();
    // 添加控件 和高德地图API用法相同
    // amap.addControl(new AMap.Scale());
    // amap.addControl(new AMap.ToolBar());

    var marker = new AMap.Marker({
        position: new AMap.LngLat(116.2, 39.55),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '中国'
    });
    amap.remove(amap.getAllOverlays());

    mychart.on('click',  function(param){
       if(param.name!=""){
           changeAllChartByCountry(param.name);
           // console.log(param);
           amap.remove(marker);
           marker = new AMap.Marker({
                position: new AMap.LngLat(jinWeiDuDict[param.name][0],jinWeiDuDict[param.name][1]),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: param.name,
            });
           amap.add(marker);
       }
    });

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });

    return mychart;
}