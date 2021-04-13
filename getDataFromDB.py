# @Time : 2021/3/29 14:22 
# @Author : HengHuang
# @File : getDataFromDB.py 
# @Software: PyCharm

# 3 数据层

import pymysql


## 数据库连接与关闭
# 数据库连接
def connectDB():
    # 1.数据库连接
    # 数据库 本地数据库：'121.196.104.224'
    conn = pymysql.connect(
        host='121.196.104.224',
        user='root',
        password='123456',
        db='beltandroad',
        charset='utf8'
        # autocommit=True    # 如果插入数据，是否自动提交和conn.commit()功能一致
    )
    # 2.创建游标对象
    cur = conn.cursor()
    return conn,cur


# 数据库关闭
def closeDB(cur,conn):
    # 提交，不然无法保存新建或者修改的数据
    # conn.commit()
    # 4.关闭游标
    cur.close()
    # 5.关闭连接
    conn.close()


# 1.从数据库中获取65国
def getAllCountries():
    conn,cur=connectDB()
    sqlText="select countryname from bilateralinvestment"
    cur.execute(sqlText)
    allCountries=cur.fetchall()
    closeDB(cur,conn)

    # 对从数据库中取出的数据进行处理
    res=[]
    for i in allCountries:
        res.append(i[0])
    # print(len(res))
    return res


# 2.从数据库中获取某一年所有的国家及相关GDP数据
def getGDPData(year):
    conn, cur = connectDB()
    sqlText = "select country_name,{}_total_gdp from country".format(year)
    cur.execute(sqlText)
    allCountriesAndGdp = cur.fetchall()
    closeDB(cur, conn)

    # 对从数据库中取出的数据进行处理
    res = []
    for i in allCountriesAndGdp:
        res.append([i[0],i[1]])
    return res


# 3.从数据库中某一个国家的双边贸易数据
def getBIDataByCountryName(country_name):
    conn, cur = connectDB()
    sqlText = "select * from bilateralinvestment where countryname='{}'".format(country_name)
    cur.execute(sqlText)
    bidata = cur.fetchall()
    closeDB(cur, conn)
    return bidata


# test:从数据库里获取68国
def get68Country():
    conn, cur = connectDB()
    sqlText = "select countryname from bilateralinvestment"
    cur.execute(sqlText)
    data=cur.fetchall()
    res=[]
    for i in data:
        res.append(i[0])

    closeDB(cur, conn)
    return res


# 4.根据时间获取国家所在的州
def getAreaDataByYear(year):
    conn, cur = connectDB()
    sqlText = "select area from country where time='{}'".format(year)
    cur.execute(sqlText)
    data = cur.fetchall()
    res = []
    for i in data:
        res.append(i[0])
    closeDB(cur, conn)
    return res


# 5.根据时间获取65个国家的外贸依存度
def getDependenceDataByYear(year):
    # 仅支持2014-2018年的外贸依存度
    conn, cur = connectDB()
    sqlText = "SELECT country_name,"+str(year)+"_total,"+str(year)+"_total_gdp FROM `bilateralinvestment` join country on bilateralinvestment.countryname=country.country_name;"
    cur.execute(sqlText)
    data = cur.fetchall()

    # 数据处理
    # 外贸总额的单位是万美元
    # GDP的单位是亿美元
    res = []
    for i in data:
        if i[1]==None or i[1]=="" or i[2]==None or i[2]=="":
            res.append([i[0],0])
        else:
            res.append([i[0],int(float(i[1][:-3])/(100*float(i[2][:-1])))])
    closeDB(cur, conn)
    return res


## 一些全局变量，用于提高访存效率
allCountries=getAllCountries()


if __name__ == '__main__':
    # print(getAllCountries())
    # print(getGDPData(2014))
    # print(len(getBIDataByCountryName('俄罗斯')[0]))
    # print(get68Country())
    # print(getAreaDataByYear(2017))
    getDependenceDataByYear(2018)
    pass
