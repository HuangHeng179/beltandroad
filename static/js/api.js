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

// 2.获取country_name国家的进口额、出口额和进出口总额(双边贸易数据)
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