# @Time : 2021/3/27 20:46 
# @Author : HengHuang
# @File : functions.py 
# @Software: PyCharm

# 2 逻辑层

import getDataFromDB


# 1 根据字符串查找相关的国家返回
def fuzzySearchCountry(countryString:str):
    res=[]
    allCountries=getDataFromDB.allCountries
    for i in allCountries:
        if countryString in i:
            res.append(i)
    return res


# 2 根据年份获取GDP前8的国家
def getGDPTop8(year:int):
    allCountriesAndGdps=getDataFromDB.getGDPData(year)
    # 排序前的数据预处理
    for i in allCountriesAndGdps:
        if i[1]==None:
            i[1]=0
        else:
            i[1]=float(i[1][:-1])
    # 排序
    allCountriesAndGdps.sort(key=lambda x:x[1],reverse=True)
    # 返回值的收集
    topN=8
    countries=["" for i in range(topN)]
    gdps=[0 for i in range(topN)]
    for i in range(topN):
        countries[i] = allCountriesAndGdps[i][0]
        gdps[i] = allCountriesAndGdps[i][1]
    # 返回值数据结构的构建
    res = {'countries': countries, 'gdps': gdps}
    return res


def getBilateralInvestmentByCountryName(country_name):
    temp=getDataFromDB.getBIDataByCountryName(country_name)

    # 对数据进行返回值的构建
    total=[]
    inside=[]
    outside=[]
    year=['2013年','2014年','2015年','2016年','2017年','2018年']
    res = {'country_name':country_name,'year':year,'total': total, 'inside': inside, 'outside': outside}
    if temp==():
        return res
    else:
        bidata = [[]]
        for i in range(23):
            bidata[0].append(temp[0][i])
        # 只获取2013年-2018年的数据
        for i in range(len(bidata[0])):
            if i==0:
                pass
            elif i==1:
                country_name=bidata[0][i]
            else:
                if (i-2)//7==0 and (i-2)%7!=6:
                    total.append(float(bidata[0][i][:-3]))
                elif (i-2)//7==1 and (i-2)%7!=6:
                    inside.append(float(bidata[0][i][:-3]))
                else:
                    # (i-2)//7==1
                    if (i-2)%7!=6:
                        outside.append(float(bidata[0][i][:-3]))
    return res


# 获取2014年-year年加入一带一路的国家
def getJoinCountryByYear(year):
    # 返回值的构建
    res={'亚洲':0,'非洲':0,'大洋洲':0,'南美洲':0,'北美洲':0,'欧洲':0}
    for i in range(2014,year+1):
        temp=getDataFromDB.getAreaDataByYear(i)
        for j in temp:
            res[j]+=1
            # print(res)
    temp=0
    for i in res:
        temp+=res[i]
    # res['total']=temp
    return res


# 获取year年外贸依存度Top10
def getDependenceByYear(year):
    data=getDataFromDB.getDependenceDataByYear(year)
    data.sort(key=lambda x: x[1],reverse=True)
    # 返回值的构建
    res=[]
    for i in range(10):
        res.append(data[i])
    return res


# 6.获取year年进口额、出口额和进出口总额Top8
def getBilateralInvestmentByYear(year):
    data = getDataFromDB.getBIDataByYear(year)
    data.sort(key=lambda x: x[1], reverse=True)
    # 返回值的构建
    res = []
    for i in range(8):
        res.append(data[i])
    return res


# 7.根据国家名获取2014-2019年GDP数据
def getGDPByCountryName(country_name):
    data = getDataFromDB.getGDPDataByCountryName(country_name)
    # 收集data[0]处理之后的结果
    tempdata0=[]
    # 收集data[1]处理之后的结果
    tempdata1=[]

    # 年份数据处理
    for i in data[0]:
        tempdata0.append(str(i)+"年")

    # gdp数据处理
    for i in data[1]:
        if i==None:
            tempdata1.append(0)
        else:
            tempdata1.append(float(i[:-1]))

    # 返回值的构建
    res = {}
    res['years']=tempdata0
    res['gdps']=tempdata1
    return res


def getDependenceByCountryName(country_name):
    data = getDataFromDB.getDependenceDataByCountryName(country_name)
    # 收集data[0]处理之后的结果
    tempdata0 = []
    # 收集data[1]和data[2]处理之后的结果
    tempdata1 = []
    # 年份数据处理
    for i in data[0]:
        tempdata0.append(str(i)+"年")

    # 外贸依存度数据处理
    for i in range(len(data[1])):
        tempdata1.append(int(float(data[2][i][:-3])/(100*float(data[1][i][:-1]))))
    # 返回值的构建
    res = {}
    res['years'] = tempdata0
    res['dependence'] = tempdata1
    return res


def getFDITop10ByYear(year):
    data = getDataFromDB.getFDIDataByYear(year)
    data.sort(key=lambda x: x[1], reverse=True)
    # 返回值的构建
    res = {'countrys':[],'fdiData':[]}
    for i in range(10):
        res['countrys'].append(data[i][0])
        res['fdiData'].append(round(data[i][1],2))
    res['countrys'].reverse()
    res['fdiData'].reverse()
    return res


def getFDIByCountryName(country_name):
    data = getDataFromDB.getFDIDataByCountryName(country_name)
    # 收集data[0]处理之后的结果
    tempdata0 = []
    # 收集data[1]和data[2]处理之后的结果
    tempdata1 = []
    # 年份数据处理
    for i in data[0]:
        tempdata0.append(str(i)+"年")

    # 外贸依存度数据处理
    for i in data[1]:
        tempdata1.append(round(i,2))
    # 返回值的构建
    res = {}
    res['years'] = tempdata0
    res['fdiData'] = tempdata1
    return res

def get10News():
    data=getDataFromDB.get10News()

    # 返回值的构建
    res={'title':data[0],'link':data[1],'value':data[2]}
    return res

def getMapDatasByYear(year):
    data=getDataFromDB.getDatasByYear(year)
    return data


def fuzzySearchCountry_en(countryname_en):
    res=[]
    allCountries_en=getDataFromDB.allCountries_en
    for i in allCountries_en:
        if countryname_en in i:
            res.append(i)
    return res

if __name__ == '__main__':
    # print(fuzzySearchCountry('斯坦'))
    # print(getGDPTop8(2014))
    print(getBilateralInvestmentByCountryName('俄罗斯'))
    # print(getBilateralInvestmentByYear(2016))
    pass