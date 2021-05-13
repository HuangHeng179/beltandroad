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
                return title[params[0].dataIndex]+'<br/>'+params[0].marker+"热度"+": "+params[0].value
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
            data: ['新闻10','新闻9','新闻8','新闻7','新闻6','新闻5','新闻4','新闻3','新闻2','新闻1'],
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
       window.open(link[param.dataIndex])
    });

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
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


function chart_map(year,data){
    // 1.实例化对象
    let mychart=echarts.init(document.querySelector(".map .chart"));
    let name_Map={
        "Afghanistan": "阿富汗",
        "Angola": "安哥拉",
        "Albania": "阿尔巴尼亚",
        "Algeria": "阿尔及利亚",
        "Argentina": "阿根廷",
        "Armenia": "亚美尼亚",
        "Australia": "澳大利亚",
        "Austria": "奥地利",
        "Azerbaijan": "阿塞拜疆",
        "Bahamas": "巴哈马",
        "Bangladesh": "孟加拉国",
        "Belgium": "比利时",
        "Benin": "贝宁",
        "Burkina Faso": "布基纳法索",
        "Burundi": "布隆迪",
        "Bulgaria": "保加利亚",
        "Belarus": "白俄罗斯",
        "Belize": "伯利兹",
        "Bermuda": "百慕大群岛",
        "Bolivia": "玻利维亚",
        "Brazil": "巴西",
        "Brunei": "文莱",
        "Bhutan": "不丹",
        "Botswana": "博茨瓦纳",
        "Cambodia": "柬埔寨",
        "Cameroon": "喀麦隆",
        "Canada": "加拿大",
        "Central African Rep.": "中非共和国",
        "Chad": "乍得",
        "Chile": "智利",
        "China": "中国",
        "Colombia": "哥伦比亚",
        "Congo": "刚果",
        "Costa Rica": "哥斯达黎加",
        "Côte d'Ivoire": "科特迪瓦",
        "Croatia": "克罗地亚",
        "Cuba": "古巴",
        "Cyprus": "塞浦路斯",
        "Czech Rep.": "捷克",
        "Dem. Rep. Korea": "韩国",
        "Dem. Rep. Congo": "民主刚果",
        "Denmark": "丹麦",
        "Djibouti": "吉布提",
        "Dominican Rep.": "多米尼加共和国",
        "Ecuador": "厄瓜多尔",
        "Egypt": "埃及",
        "El Salvador": "萨尔瓦多",
        "Eq. Guinea": "赤道几内亚",
        "Eritrea": "厄立特里亚",
        "Estonia": "爱沙尼亚",
        "Ethiopia": "埃塞俄比亚",
        "Falkland Is.": "福克兰群岛",
        "Fiji": "斐济",
        "Finland": "芬兰",
        "France": "法国",
        "French Guiana": "法属圭亚那",
        "Fr. S. Antarctic Lands": "法属南部领地",
        "Gabon": "加蓬",
        "Gambia": "冈比亚",
        "Germany": "德国",
        "Ghana": "加纳",
        "Greece": "希腊",
        "Greenland": "格陵兰",
        "Guatemala": "危地马拉",
        "Guinea": "几内亚",
        "Guinea-Bissau": "几内亚比绍",
        "Guyana": "圭亚那",
        "Haiti": "海地",
        "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
        "Honduras": "洪都拉斯",
        "Hungary": "匈牙利",
        "Iceland": "冰岛",
        "India": "印度",
        "Indonesia": "印度尼西亚",
        "Iran": "伊朗",
        "Iraq": "伊拉克",
        "Ireland": "爱尔兰",
        "Israel": "以色列",
        "Italy": "意大利",
        "Ivory Coast": "象牙海岸",
        "Jamaica": "牙买加",
        "Japan": "日本",
        "Kashmir": "克什米尔",
        "Kazakhstan": "哈萨克斯坦",
        "Kenya": "肯尼亚",
        "Kosovo": "科索沃",
        "Kuwait": "科威特",
        "Kyrgyzstan": "吉尔吉斯斯坦",
        "Lao PDR": "老挝",
        "Latvia": "拉脱维亚",
        "Lebanon": "黎巴嫩",
        "Lesotho": "莱索托",
        "Liberia": "利比里亚",
        "Libya": "利比亚",
        "Lithuania": "立陶宛",
        "Luxembourg": "卢森堡",
        "Madagascar": "马达加斯加",
        "Macedonia": "北马其顿",
        "Malawi": "马拉维",
        "Malaysia": "马来西亚",
        "Mali": "马里",
        "Mauritania": "毛里塔尼亚",
        "Mexico": "墨西哥",
        "Moldova": "摩尔多瓦",
        "Mongolia": "蒙古国",
        "Montenegro": "黑山",
        "Morocco": "摩洛哥",
        "Mozambique": "莫桑比克",
        "Myanmar": "缅甸",
        "Namibia": "纳米比亚",
        "Netherlands": "荷兰",
        "New Caledonia": "新喀里多尼亚",
        "New Zealand": "新西兰",
        "Nepal": "尼泊尔",
        "Nicaragua": "尼加拉瓜",
        "Niger": "尼日尔",
        "Nigeria": "尼日利亚",
        "Korea": "朝鲜",
        "Northern Cyprus": "北塞浦路斯",
        "Norway": "挪威",
        "Oman": "阿曼",
        "Pakistan": "巴基斯坦",
        "Panama": "巴拿马",
        "Papua New Guinea": "巴布亚新几内亚",
        "Paraguay": "巴拉圭",
        "Peru": "秘鲁",
        "Republic of the Congo": "刚果共和国",
        "Philippines": "菲律宾",
        "Poland": "波兰",
        "Portugal": "葡萄牙",
        "Puerto Rico": "波多黎各",
        "Qatar": "卡塔尔",
        "Republic of Seychelles": "塞舌尔共和国",
        "Romania": "罗马尼亚",
        "Russia": "俄罗斯",
        "Rwanda": "卢旺达",
        "Saint Helena": "圣海伦娜",
        "Samoa": "萨摩亚",
        "Saudi Arabia": "沙特阿拉伯",
        "Seychelles": "塞舌尔",
        "Senegal": "塞内加尔",
        "Serbia": "塞尔维亚",
        "Sierra Leone": "塞拉利昂",
        "Slovakia": "斯洛伐克",
        "Slovenia": "斯洛文尼亚",
        "Solomon Is.": "所罗门群岛",
        "Somaliland": "索马里兰",
        "Somalia": "索马里",
        "South Africa": "南非",
        "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
        "S. Sudan": "南苏丹",
        "Spain": "西班牙",
        "Sri Lanka": "斯里兰卡",
        "Sudan": "苏丹",
        "Suriname": "苏里南",
        "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
        "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
        "Swaziland": "斯威士兰",
        "Sweden": "瑞典",
        "Switzerland": "瑞士",
        "Syria": "叙利亚",
        "Tajikistan": "塔吉克斯坦",
        "Tanzania": "坦桑尼亚",
        "Thailand": "泰国",
        "The Kingdom of Tonga": "汤加王国",
        "Timor-Leste": "东帝汶",
        "Tonga ": "汤加",
        "Togo": "多哥",
        "Trinidad and Tobago": "特立尼达和多巴哥",
        "Turks and Caicos Is.": "特克斯和凯科斯群岛",
        "Tunisia": "突尼斯",
        "Turkey": "土耳其",
        "Turkmenistan": "土库曼斯坦",
        "Uganda": "乌干达",
        "Ukraine": "乌克兰",
        "United Kingdom": "大不列颠联合王国",
        "United Republic of Tanzania": "坦桑尼亚联合共和国",
        "United States": "美国",
        "United States of America": "美利坚合众国",
        "Uruguay": "乌拉圭",
        "U.S. Virgin Is.": "圣母玛利亚",
        "Uzbekistan": "乌兹别克斯坦",
        "Vanuatu": "瓦努阿图",
        "Venezuela": "委内瑞拉",
        "Vietnam": "越南",
        "West Bank": "西岸",
        "W. Sahara": "西撒哈拉",
        "Yemen": "也门",
        "Zambia": "赞比亚",
        "Zimbabwe": "津巴布韦",
        "Palestine": "巴勒斯坦",
        "Singapore": "新加坡",
        "Bahrain": "巴林",
        "Bosnia and Herz.": "波黑",
        "Georgia": "格鲁吉亚",
        "United Arab Emirates": "阿联酋",
        "Jordan": "约旦",
    };
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
        "斯里兰卡": [6.55, 79.52],
        "叙利亚": [36.18, 33.3],
        "希腊": [23.46, 37.58],
        "柬埔寨": [104.55, 11.33],
        "捷克": [50.05, 14.25],
        "摩尔多瓦": [47, 28.5],
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
        "波黑": [43.52, 18.26],
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
        "新加坡": [1.22, 103.45]
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
    let color=['rgb(106,176,184)','green','rgb(47,69,84)','blue','rgb(116,159,131)','black','yellow','#9ae5fc', '#dcbf71'];
    let series=[];
    series.push({
                name: '沿线65国相关数据',
                type:"map",
                mapType: 'world',
                geoIndex: 0,
                coordinateSystem: 'geo',
                right:1000,
                zlevel: 4,
                roam:true,
                data: data
            });

    let country65name=['不丹','东帝汶','中国','乌克兰','乌兹别克斯坦','也门','亚美尼亚','以色列','伊拉克','伊朗','俄罗斯','保加利亚','克罗地亚','匈牙利','北马其顿','卡塔尔','印度','印度尼西亚','叙利亚','吉尔吉斯斯坦','哈萨克斯坦','土库曼斯坦','土耳其','埃及','塔吉克斯坦','塞尔维亚','孟加拉国','尼泊尔','巴勒斯坦','巴基斯坦','巴林','拉脱维亚','捷克','摩尔多瓦','文莱','斯洛伐克','斯洛文尼亚','斯里兰卡','新加坡','柬埔寨','格鲁吉亚','沙特阿拉伯','波兰','波黑','泰国','爱沙尼亚','白俄罗斯','科威特','立陶宛','约旦','缅甸','罗马尼亚','老挝','菲律宾','蒙古国','越南','阿塞拜疆','阿富汗','阿尔巴尼亚','阿曼','阿联酋','马尔代夫','马来西亚','黎巴嫩','黑山']
    let country65=[];
    for(let i=0;i<65;i++){
        country65.push({
                name: country65name[i],
                selected: false,
                itemStyle: {   // 高亮时候的样式
                    normal: {
                        areaColor: 'rgb(213,58,53)'
                    },
                    emphasis: {
                        areaColor: '#2f89cf'
                    }
                },
            });
    }
    country65[2].label={normal:{show:true}};

    // 1 新亚欧大陆桥
    // let country65name=["中国","哈萨克斯坦","俄罗斯","乌克兰","白俄罗斯","格鲁吉亚","阿塞拜疆","亚美尼亚","摩尔多瓦","波兰","立陶宛","爱沙尼亚","拉脱维亚","捷克","斯洛伐克","匈牙利","斯洛文尼亚","克罗地亚","波黑","塞尔维亚","阿尔巴尼亚","罗马尼亚","保加利亚","北马其顿"]
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
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
        }, { // 散点效果
            type: 'effectScatter',
            coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'        // 波纹绘制效果
            },
            label: {
                normal: {                  // 默认的文本标签显示样式
                    show: true,
                    position: 'left',      // 标签显示的位置
                    formatter: '{b}'       // 标签内容格式器
                }
            },
            itemStyle: {
                normal: {
                    color: color[7]
                }
            },
            data: road1.map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                    symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
                };
            })
    });

    // 2 中国-中亚-西亚经济走廊
    // let country65name=['中国','哈萨克斯坦','乌兹别克斯坦','土库曼斯坦','塔吉克斯坦','吉尔吉斯斯坦','伊朗','伊拉克','土耳其','叙利亚','约旦','黎巴嫩','以色列','沙特阿拉伯','也门','阿曼','阿联酋','卡塔尔','科威特','巴林','希腊','塞浦路斯','埃及']
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
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
    }, { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[7]
            }
        },
        data: road2.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });

    // 3 中巴
    // let country65name=['中国','巴基斯坦']
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
    //
    let road3 = [
        [{ name: "中国" }, { name: "巴基斯坦", value: 30 }],
      ];
    series.push({
        // 白色航线特效图
        type: 'lines',
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
    { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[7]
            }
        },
        data: road3.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });

    // 4 中蒙俄
    // let country65name=['中国','蒙古国','俄罗斯']
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
    let road4 = [
        [{ name: "中国" }, { name: "蒙古国", value: 30 }],
        [{ name: "蒙古国" }, { name: "俄罗斯", value: 30 }],
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
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
    }, { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[7]
            }
        },
        data: road4.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });


    // 5 中国-中南半岛
    // let country65name=['中国','越南','老挝','柬埔寨','缅甸','泰国','新加坡','马来西亚']
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
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
    }, { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[7]
            }
        },
        data: road5.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });

    // 6 孟中印缅
    // let country65name=['中国','印度','孟加拉国','缅甸']
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
    //
    let road6 = [
        [{ name: "中国" }, { name: "缅甸", value: 30 }],
        [{ name: "缅甸" }, { name: "孟加拉国", value: 30 }],
        [{ name: "孟加拉国" }, { name: "印度", value: 30 }]
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
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
    }, { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[7]
            }
        },
        data: road6.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });


    // 7 21世纪海上丝绸之路
    // let country65name=['中国','印度尼西亚','马来西亚','菲律宾','新加坡','泰国','文莱','越南','老挝','缅甸','柬埔寨','印度','巴基斯坦','孟加拉国','阿富汗','斯里兰卡','马尔代夫','尼泊尔','埃及','希腊']
    // let country65=[];
    // for(let i=0;i<65;i++){
    //     country65.push({
    //             name: country65name[i],
    //             selected: false,
    //             itemStyle: {   // 高亮时候的样式
    //                 normal: {
    //                     areaColor: 'rgb(190,145,23)'
    //                 },
    //                 emphasis: {
    //                     areaColor: '#2f89cf'
    //                 }
    //             },
    //         });
    // }
    let road7 = [
        [{ name: "中国" }, { name: "菲律宾", value: 30 }],
        [{ name: "菲律宾" }, { name: "印度尼西亚", value: 30 }],
        [{ name: "印度尼西亚" }, { name: "泰国", value: 30 }],
        [{ name: "泰国" }, { name: "印度", value: 30 }],
        [{ name: "印度" }, { name: "阿富汗", value: 30 }],
        [{ name: "阿富汗" }, { name: "埃及", value: 30 }],
        [{ name: "埃及" }, { name: "希腊", value: 30 }],
      ];

    series.push({
        // 白色航线特效图
        type: 'lines',
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
    }, { // 散点效果
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[7]
            }
        },
        data: road7.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: jinWeiDuDict[dataItem[1].name],  // 起点的位置
                symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    });


    // 2.指定配置项和数据
    let option = {
        tooltip : {
            show:true,
            trigger: 'item',
            formatter:function (params) {
                if(params.seriesType==="lines"){
                    let index=color.indexOf(params.color);
                    let lineName=["新亚欧大陆桥","中国-中亚-西亚经济走廊","中巴线","中蒙俄线","中国-中南半岛线","孟中印缅线","21世纪海上丝绸之路"];
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
                        str+=countryInLine[index][i]+",";
                        if(i!=0 && i%5===0){
                            str+="<br/>&nbsp&nbsp&nbsp&nbsp";
                        }
                    }
                    str=str.substr(0, str.length - 1);
                    return lineName[index]+"<br/>"+
                        "线路上的国家：<br/>&nbsp&nbsp&nbsp&nbsp"+str
                }
                if(params.name==="")
                    return "非沿线65国，无相关数据";
                if(params.name==="中国")
                    return "沿线65国："+params.name+"<br/>"+
                        year+"年GDP："+ params.data.GDP+"<br/>"+
                        year+"年对外进出口总额："+params.data.Total+"<br/>"+
                        year+"年FDI："+ params.data.FDI+"<br/>"+
                        year+"年外贸依存度："+ params.data.YiCunDu+"<br/>";
                return "沿线65国："+params.name+"<br/>"+
                    year+"年GDP："+ params.data.GDP+"<br/>"+
                    year+"年对中国进出口总额："+params.data.Total+"<br/>"+
                    year+"年FDI："+ params.data.FDI+"<br/>"+
                    year+"年外贸依存度："+ params.data.YiCunDu+"<br/>";
            }
        },
        geo: {
            map: 'world',       // 与引用进来的地图js名字一致
            roam: true,
            zoom: 5,
            center: [100.97, 29.71],
            itemStyle: {        // 每个区域的样式
                normal: {
                    areaColor: '#FFF'
                },
                emphasis: {
                    areaColor: 'rgb(125,125,125)'
                },
            },
            nameMap:name_Map,
            regions: country65,
            data: {"name":"中国",value:100}
        },
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

    mychart.on('click',  function(param){
       if(param.name!=""){
           changeAllChartByCountry(param.name);
       }
    });

    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        mychart.resize();
    });
}