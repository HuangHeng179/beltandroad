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
    bidata=getDataFromDB.getBIDataByCountryName(country_name)
    # 对数据进行返回值的构建
    total=[]
    inside=[]
    outside=[]
    year=['2013年','2014年','2015年','2016年','2017年','2018年']
    res = {'country_name':country_name,'year':year,'total': total, 'inside': inside, 'outside': outside}
    if bidata==():
        return res
    else:
        # 只获取2013年-2018年的数据
        for i in range(len(bidata[0])):
            if i==0:
                pass
            elif i==1:
                country_name=bidata[0][i]
                pass
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


if __name__ == '__main__':
    # print(fuzzySearchCountry('斯坦'))
    # print(getGDPTop8(2014))
    # print(getBilateralInvestmentByCountryName('俄罗斯'))
    print(getDependenceByYear(2016))
    pass