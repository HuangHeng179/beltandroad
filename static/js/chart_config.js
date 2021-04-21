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
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart1"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option= {
        color:["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                // console.log(params)
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+params[0].value+"亿美元"
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
                data: countries,
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
                name: '国民生产总值',
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
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart2"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function (params) {
                let str=params[0].axisValue+"<br/>";
                params.forEach(function (e) {
                    str+=e.marker+e.seriesName+": "+e.value+"万美元<br/>";
                });
                return str
            }
        },
        legend: {
            data: ['进口额','出口额','进出口总额'],
            textStyle:{
                color:"#FFF",
            },
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xData,
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
                name: '进口额',
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
                name: '出口额',
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
                name: '进出口总额',
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
// 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart3"));

    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: year+"年",
                type: 'pie',
                radius: [20, 80],
                roseType: 'radius',
                data: areaArr,
                label: {
                    fontSize: 10,
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


function chart1_4(countrys,fdiData) {
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
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+params[0].value+"亿美元"
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
            data: countrys
        },
        series: [
            {
                name: 'FDI外商直接投资',
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
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart5"));

    // console.log(indicator)
    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let str="外贸依存度Top10"+"<br>";
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

function chart1_6(){
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector(".horizon .chart"));


    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        // title: {
        //     text: '世界人口总量',
        //     subtext: '数据来自网络'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            // data: ['2011年', '2012年']
            data: [ '2012年']
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国']
        },
        series: [
            // {
            //     name: '2011年',
            //     type: 'bar',
            //     data: [18203, 23489, 29034, 104970, 131744, 630230]
            // },
            {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    // 3.将配置项设置给echarts实例对象
    mychart.setOption(option);
}

function chart2_1(years,gdps) {
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
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+params[0].value+"亿美元"
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
                data: years,
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
                name: '国民生产总值',
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

function chart2_2(year,total,inside,outside) {
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
            // orient:"vertical",
            // align:"left",
        },
        tooltip: {
            formatter:function(params){
                let str="";
                str+=params[0].axisValue+'<br/>';
                for(let i=0;i<3;i++){
                    str+=params[i].marker+params[i].seriesName+": "+params[i].value+"万美元"+"<br/>"
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
        // grid: {
        //     top: '15%',
        //     left: '5%',
        //     right: '5%',
        //     bottom: '15%',
        //     // containLabel: true
        // },
        grid: {
            left: '0%',
            top:'10px',
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
            data: year,
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
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',

                },
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
                name: '进口额',
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
                name: '出口额',
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
                name: '进出口总额',
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
                return params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+": "+params[0].value+"亿美元"
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
            data: years
        },
        series: [
            {
                name: 'FDI外商直接投资',
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
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector("#chart5"));

    // 2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let str="外贸依存度展示"+"<br>";
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


function chart_map(){
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector(".map .chart"));


    // console.log(mychart);
    // 2.指定配置项和数据
    let option = {
        // color:["#2f89cf"],
        title : {
            // text: 'World Population (2010)',
            // subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
            // sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'item',
            formatter : function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                        + '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },
        // toolbox: {
        //     show : true,
        //     orient : 'vertical',
        //     x: 'right',
        //     y: 'center',
        //     feature : {
        //         mark : {show: true},
        //         dataView : {show: true, readOnly: false},
        //         restore : {show: true},
        //         saveAsImage : {show: true}
        //     }
        // },
        // dataRange: {
        //     min: 0,
        //     max: 1000000,
        //     text:['High','Low'],
        //     realtime: false,
        //     calculable : true,
        //     color: ['orangered','yellow','lightskyblue']
        // },
        series : [
            {
                // name: 'World Population (2010)',
                type: 'map',
                mapType: 'world',
                roam: true,
                mapLocation: {
                    y : 60
                },
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                data:[
                    // {name : 'Afghanistan', value : 28397.812},
                    // {name : 'Angola', value : 19549.124},
                    // {name : 'Albania', value : 3150.143},
                    // {name : 'United Arab Emirates', value : 8441.537},
                    // {name : 'Argentina', value : 40374.224},
                    // {name : 'Armenia', value : 2963.496},
                    // {name : 'French Southern and Antarctic Lands', value : 268.065},
                    // {name : 'Australia', value : 22404.488},
                    // {name : 'Austria', value : 8401.924},
                    // {name : 'Azerbaijan', value : 9094.718},
                    // {name : 'Burundi', value : 9232.753},
                    // {name : 'Belgium', value : 10941.288},
                    // {name : 'Benin', value : 9509.798},
                    // {name : 'Burkina Faso', value : 15540.284},
                    // {name : 'Bangladesh', value : 151125.475},
                    // {name : 'Bulgaria', value : 7389.175},
                    // {name : 'The Bahamas', value : 66402.316},
                    // {name : 'Bosnia and Herzegovina', value : 3845.929},
                    // {name : 'Belarus', value : 9491.07},
                    // {name : 'Belize', value : 308.595},
                    // {name : 'Bermuda', value : 64.951},
                    // {name : 'Bolivia', value : 716.939},
                    // {name : 'Brazil', value : 195210.154},
                    // {name : 'Brunei', value : 27.223},
                    // {name : 'Bhutan', value : 716.939},
                    // {name : 'Botswana', value : 1969.341},
                    // {name : 'Central African Republic', value : 4349.921},
                    // {name : 'Canada', value : 34126.24},
                    // {name : 'Switzerland', value : 7830.534},
                    // {name : 'Chile', value : 17150.76},
                    // {name : 'China', value : 1359821.465},
                    // {name : 'Ivory Coast', value : 60508.978},
                    // {name : 'Cameroon', value : 20624.343},
                    // {name : 'Democratic Republic of the Congo', value : 62191.161},
                    // {name : 'Republic of the Congo', value : 3573.024},
                    // {name : 'Colombia', value : 46444.798},
                    // {name : 'Costa Rica', value : 4669.685},
                    // {name : 'Cuba', value : 11281.768},
                    // {name : 'Northern Cyprus', value : 1.468},
                    // {name : 'Cyprus', value : 1103.685},
                    // {name : 'Czech Republic', value : 10553.701},
                    // {name : 'Germany', value : 83017.404},
                    // {name : 'Djibouti', value : 834.036},
                    // {name : 'Denmark', value : 5550.959},
                    // {name : 'Dominican Republic', value : 10016.797},
                    // {name : 'Algeria', value : 37062.82},
                    // {name : 'Ecuador', value : 15001.072},
                    // {name : 'Egypt', value : 78075.705},
                    // {name : 'Eritrea', value : 5741.159},
                    // {name : 'Spain', value : 46182.038},
                    // {name : 'Estonia', value : 1298.533},
                    // {name : 'Ethiopia', value : 87095.281},
                    // {name : 'Finland', value : 5367.693},
                    // {name : 'Fiji', value : 860.559},
                    // {name : 'Falkland Islands', value : 49.581},
                    // {name : 'France', value : 63230.866},
                    // {name : 'Gabon', value : 1556.222},
                    // {name : 'United Kingdom', value : 62066.35},
                    // {name : 'Georgia', value : 4388.674},
                    // {name : 'Ghana', value : 24262.901},
                    // {name : 'Guinea', value : 10876.033},
                    // {name : 'Gambia', value : 1680.64},
                    // {name : 'Guinea Bissau', value : 10876.033},
                    // {name : 'Equatorial Guinea', value : 696.167},
                    // {name : 'Greece', value : 11109.999},
                    // {name : 'Greenland', value : 56.546},
                    // {name : 'Guatemala', value : 14341.576},
                    // {name : 'French Guiana', value : 231.169},
                    // {name : 'Guyana', value : 786.126},
                    // {name : 'Honduras', value : 7621.204},
                    // {name : 'Croatia', value : 4338.027},
                    // {name : 'Haiti', value : 9896.4},
                    // {name : 'Hungary', value : 10014.633},
                    // {name : 'Indonesia', value : 240676.485},
                    // {name : 'India', value : 1205624.648},
                    // {name : 'Ireland', value : 4467.561},
                    // {name : 'Iran', value : 240676.485},
                    // {name : 'Iraq', value : 30962.38},
                    // {name : 'Iceland', value : 318.042},
                    // {name : 'Israel', value : 7420.368},
                    // {name : 'Italy', value : 60508.978},
                    // {name : 'Jamaica', value : 2741.485},
                    // {name : 'Jordan', value : 6454.554},
                    // {name : 'Japan', value : 127352.833},
                    // {name : 'Kazakhstan', value : 15921.127},
                    // {name : 'Kenya', value : 40909.194},
                    // {name : 'Kyrgyzstan', value : 5334.223},
                    // {name : 'Cambodia', value : 14364.931},
                    // {name : 'South Korea', value : 51452.352},
                    // {name : 'Kosovo', value : 97.743},
                    // {name : 'Kuwait', value : 2991.58},
                    // {name : 'Laos', value : 6395.713},
                    // {name : 'Lebanon', value : 4341.092},
                    // {name : 'Liberia', value : 3957.99},
                    // {name : 'Libya', value : 6040.612},
                    // {name : 'Sri Lanka', value : 20758.779},
                    // {name : 'Lesotho', value : 2008.921},
                    // {name : 'Lithuania', value : 3068.457},
                    // {name : 'Luxembourg', value : 507.885},
                    // {name : 'Latvia', value : 2090.519},
                    // {name : 'Morocco', value : 31642.36},
                    // {name : 'Moldova', value : 103.619},
                    // {name : 'Madagascar', value : 21079.532},
                    // {name : 'Mexico', value : 117886.404},
                    // {name : 'Macedonia', value : 507.885},
                    // {name : 'Mali', value : 13985.961},
                    // {name : 'Myanmar', value : 51931.231},
                    // {name : 'Montenegro', value : 620.078},
                    // {name : 'Mongolia', value : 2712.738},
                    // {name : 'Mozambique', value : 23967.265},
                    // {name : 'Mauritania', value : 3609.42},
                    // {name : 'Malawi', value : 15013.694},
                    // {name : 'Malaysia', value : 28275.835},
                    // {name : 'Namibia', value : 2178.967},
                    // {name : 'New Caledonia', value : 246.379},
                    // {name : 'Niger', value : 15893.746},
                    // {name : 'Nigeria', value : 159707.78},
                    // {name : 'Nicaragua', value : 5822.209},
                    // {name : 'Netherlands', value : 16615.243},
                    // {name : 'Norway', value : 4891.251},
                    // {name : 'Nepal', value : 26846.016},
                    // {name : 'New Zealand', value : 4368.136},
                    // {name : 'Oman', value : 2802.768},
                    // {name : 'Pakistan', value : 173149.306},
                    // {name : 'Panama', value : 3678.128},
                    // {name : 'Peru', value : 29262.83},
                    // {name : 'Philippines', value : 93444.322},
                    // {name : 'Papua New Guinea', value : 6858.945},
                    // {name : 'Poland', value : 38198.754},
                    // {name : 'Puerto Rico', value : 3709.671},
                    // {name : 'North Korea', value : 1.468},
                    // {name : 'Portugal', value : 10589.792},
                    // {name : 'Paraguay', value : 6459.721},
                    // {name : 'Qatar', value : 1749.713},
                    // {name : 'Romania', value : 21861.476},
                    // {name : 'Russia', value : 21861.476},
                    // {name : 'Rwanda', value : 10836.732},
                    // {name : 'Western Sahara', value : 514.648},
                    // {name : 'Saudi Arabia', value : 27258.387},
                    // {name : 'Sudan', value : 35652.002},
                    // {name : 'South Sudan', value : 9940.929},
                    // {name : 'Senegal', value : 12950.564},
                    // {name : 'Solomon Islands', value : 526.447},
                    // {name : 'Sierra Leone', value : 5751.976},
                    // {name : 'El Salvador', value : 6218.195},
                    // {name : 'Somaliland', value : 9636.173},
                    // {name : 'Somalia', value : 9636.173},
                    // {name : 'Republic of Serbia', value : 3573.024},
                    // {name : 'Suriname', value : 524.96},
                    // {name : 'Slovakia', value : 5433.437},
                    // {name : 'Slovenia', value : 2054.232},
                    // {name : 'Sweden', value : 9382.297},
                    // {name : 'Swaziland', value : 1193.148},
                    // {name : 'Syria', value : 7830.534},
                    // {name : 'Chad', value : 11720.781},
                    // {name : 'Togo', value : 6306.014},
                    // {name : 'Thailand', value : 66402.316},
                    // {name : 'Tajikistan', value : 7627.326},
                    // {name : 'Turkmenistan', value : 5041.995},
                    // {name : 'East Timor', value : 10016.797},
                    // {name : 'Trinidad and Tobago', value : 1328.095},
                    // {name : 'Tunisia', value : 10631.83},
                    // {name : 'Turkey', value : 72137.546},
                    // {name : 'United Republic of Tanzania', value : 44973.33},
                    // {name : 'Uganda', value : 33987.213},
                    // {name : 'Ukraine', value : 46050.22},
                    // {name : 'Uruguay', value : 3371.982},
                    // {name : 'United States of America', value : 312247.116},
                    // {name : 'Uzbekistan', value : 27769.27},
                    // {name : 'Venezuela', value : 236.299},
                    // {name : 'Vietnam', value : 89047.397},
                    // {name : 'Vanuatu', value : 236.299},
                    // {name : 'West Bank', value : 13.565},
                    // {name : 'Yemen', value : 22763.008},
                    // {name : 'South Africa', value : 51452.352},
                    // {name : 'Zambia', value : 13216.985},
                    // {name : 'Zimbabwe', value : 13076.978}
                ]
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