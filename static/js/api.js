// 1.模糊查询，获取部分国家
function getSomeCountries(str_country){
    // 定义一个容器接受返回的数据
    let retData=[]
    let data={
        'str_country':str_country
    }

    $.ajax({
        url: "/beltandroad/getSomeCountries",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 2.获取year年GDP前8的国家以及相应的数值
function getGDPTop8(year) {
    let retData=[]
    let data={
        'year':year
    }

    $.ajax({
        url: "/beltandroad/getGDPTop8",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 3.获取country_name国家的进口额、出口额和进出口总额(双边贸易数据)
function getBilateralInvestmentByCountryName(country_name) {
    let retData=[]
    let data={
        'country_name':country_name
    }

    $.ajax({
        url: "/beltandroad/getBilateralInvestmentByCountryName",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}


// 4.获取year年同中国签订共建“一带一路”合作文件国家分布
function getJoinCountryByYear(year) {
    let retData=[]
    let data={
        'year':year
    }

    $.ajax({
        url: "/beltandroad/getJoinCountryByYear",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}


// 5.获取year年外贸依存度Top10
function getDependenceByYear(year) {
    let retData=[]
    let data={
        'year':year
    }

    $.ajax({
        url: "/beltandroad/getDependenceByYear",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}


// 6.获取year年进口额、出口额和进出口总额Top8
function getBilateralInvestmentByYear(year) {
    let retData=[]
    let data={
        'year':year
    }

    $.ajax({
        url: "/beltandroad/getBilateralInvestmentByYear",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 7.根据国家名获取2014-2019年GDP数据
function getGDPDataByCountryName(country_name) {
    let retData=[]
    let data={
        'country_name':country_name
    }

    $.ajax({
        url: "/beltandroad/getGDPByCountryName",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 8.根据国家名获取2014-2018年外贸依存度数据
function getDependenceByCountryName(country_name) {
    let retData=[]
    let data={
        'country_name':country_name
    }

    $.ajax({
        url: "/beltandroad/getDependenceByCountryName",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 9.根据时间获取FDI(外商直接投资总额)Top10
function getFDITop10ByYear(year) {
    let retData=[]
    let data={
        'year':year
    }

    $.ajax({
        url: "/beltandroad/getFDITop10ByYear",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 10.根据国家名获取FDI(外商直接投资总额)Top10
function getFDIByCountryName(country_name) {
    let retData=[]
    let data={
        'country_name':country_name
    }

    $.ajax({
        url: "/beltandroad/getFDIByCountryName",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 10.获取10条新闻
function get10News() {
    let retData=[]

    $.ajax({
        url: "/beltandroad/get10News",
        type: 'get',
        async : false,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 获取map数据
function getMapDatasByYear(year) {
    let retData=[]
    let data={
        'year':year
    }

    $.ajax({
        url: "/beltandroad/getMapDatasByYear",
        type: 'post',
        async : false,
        data: data,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}

// 获取world.json文件
function getWorldJson() {
    let retData=[]

    $.ajax({
        url: "/static/json/world.json",
        type: 'get',
        async : false,
        success: function (res) {
            // 将数据放进retData中
            retData=res
            // console.log(retData)
        },
        error: function (error) {
            // 输出错误信息
            console.log(error)
            // 不对retData进行操作
        }
    });

    // console.log(retData);
    return retData;
}