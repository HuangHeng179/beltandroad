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
    # 数据库 本地数据库：'localhost','121.196.104.224'
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


# 1.从数据库中获取所有国家
def getAllCountries():
    conn,cur=connectDB()
    sqlText="select country_name from country"
    cur.execute(sqlText)
    allCountries=cur.fetchall()
    closeDB(cur,conn)

    # 对从数据库中取出的数据进行处理
    res=[]
    for i in allCountries:
        res.append(i[0])
    return res


# 2.从数据库中获取某一年所有的国家及相关GDP数据
def getGDPData(year):
    conn, cur = connectDB()
    sqlText = "select country_name,"+str(year)+"_total_gdp from country"
    cur.execute(sqlText)
    allCountriesAndGdp = cur.fetchall()
    closeDB(cur, conn)

    # 对从数据库中取出的数据进行处理
    res = []
    for i in allCountriesAndGdp:
        res.append([i[0],i[1]])
    return res


if __name__ == '__main__':
    # print(getAllCountries())
    print(getGDPData(2014))