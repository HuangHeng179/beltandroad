# @Time : 2021/3/29 14:22 
# @Author : HengHuang
# @File : getDataFromDB.py 
# @Software: PyCharm

# 3 数据层

import pymysql
import random


## 数据库连接与关闭
# 数据库连接
def connectDB():
    # 1.数据库连接
    # 数据库 本地数据库：'121.196.104.224'
    conn = pymysql.connect(
        # host='121.196.104.224',
        host='118.31.67.149',
        user='root',
        password='huangheng179@',
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
    sqlText="select countryname from bilateralinvestment;"
    cur.execute(sqlText)
    allCountries=cur.fetchall()
    closeDB(cur,conn)

    # 对从数据库中取出的数据进行处理
    res=[]
    for i in allCountries:
        res.append(i[0])
    # print(len(res))
    return res


def getAllCountries_en():
    conn,cur=connectDB()
    sqlText="select countryname_en from bilateralinvestment;"
    cur.execute(sqlText)
    allCountries_en=cur.fetchall()
    closeDB(cur,conn)

    # 对从数据库中取出的数据进行处理
    res=[]
    for i in allCountries_en:
        res.append(i[0])
    # print(len(res))
    return res


# 2.从数据库中获取某一年所有的国家及相关GDP数据
def getGDPData(year):
    conn, cur = connectDB()
    sqlText = "select country_name,{}_total_gdp from country;".format(year)
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
    sqlText = "select * from bilateralinvestment where countryname='{}';".format(country_name)
    cur.execute(sqlText)
    bidata = cur.fetchall()
    closeDB(cur, conn)
    return bidata


# test:从数据库里获取68国
def get68Country():
    conn, cur = connectDB()
    sqlText = "select countryname from bilateralinvestment;"
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
    sqlText = "select area from country where time='{}';".format(year)
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


# 5.根据时间获取64个国家的对中国进口额、出口额和进出口总额
def getBIDataByYear(year):
    conn, cur = connectDB()
    sqlText = "select countryname,"+str(year)+"_total,"+str(year)+"_inside,"+str(year)+"_outside from bilateralinvestment;"
    cur.execute(sqlText)
    data = cur.fetchall()
    res = []
    for i in data:
        if i[0]!="中国" and i[1]!="" and i[2]!="" and i[3]!="":
            print(i)
            res.append([i[0],float(i[1][:-3]),float(i[2][:-3]),float(i[3][:-3])])
    # print(len(res))
    closeDB(cur, conn)
    return res


# 6.根据国家名称获取2014年-2019年GDP数据
def getGDPDataByCountryName(country_name):
    conn, cur = connectDB()
    years = [2014, 2015, 2016,2017,2018,2019]
    yeargdps=""
    for i in years:
        yeargdps+=str(i)+"_total_gdp,"
    yeargdps=yeargdps[:-1]
    sqlText = "select "+yeargdps+" from country where country_name='{}';".format(country_name)
    cur.execute(sqlText)
    gdpdata = cur.fetchall()
    gdpret=[]
    for i in gdpdata[0]:
        gdpret.append(i)
    closeDB(cur, conn)
    return years,gdpret

# 7.根据国家名称获取2014年-2018年外贸依存度
def getDependenceDataByCountryName(country_name):
    conn, cur = connectDB()
    years = [2014, 2015, 2016,2017,2018]
    # gdp数据
    yeargdps=""
    for i in years:
        yeargdps+=str(i)+"_total_gdp,"
    yeargdps=yeargdps[:-1]
    sqlText = "select "+yeargdps+" from country where country_name='{}';".format(country_name)
    cur.execute(sqlText)
    gdpdata = cur.fetchall()
    gdpret=[]
    for i in gdpdata[0]:
        gdpret.append(i)

    # 对外贸易总额
    yeartotal=""
    for i in years:
        yeartotal+=str(i)+"_total,"
    yeartotal = yeartotal[:-1]
    sqlText = "select " + yeartotal + " from bilateralinvestment where countryname='{}';".format(country_name)
    # print(sqlText)
    cur.execute(sqlText)
    totaldata = cur.fetchall()
    totalret = []
    for i in totaldata[0]:
        totalret.append(i)
    closeDB(cur, conn)
    return years,gdpret,totalret


# 8.根据时间获取64个国家的FDI(外商直接投资)
def getFDIDataByYear(year):
    conn, cur = connectDB()
    sqlText = "select country_name,"+str(year)+"_fdi from FDI;"
    cur.execute(sqlText)
    data = cur.fetchall()
    res = []
    for i in data:
        if i[1]!=None:
            res.append([i[0],float(i[1][:-3])])
    # print(len(res))
    closeDB(cur, conn)
    return res


# 9.根据国家名称获取2014年-2019年FDI数据
def getFDIDataByCountryName(country_name):
    conn, cur = connectDB()
    years = [2014, 2015, 2016,2017,2018,2019]
    yearfdis=""
    for i in years:
        yearfdis+=str(i)+"_fdi,"
    yearfdis=yearfdis[:-1]
    sqlText = "select "+yearfdis+" from FDI where country_name='{}';".format(country_name)
    cur.execute(sqlText)
    fdidata = cur.fetchall()
    fdiret=[]
    for i in fdidata[0]:
        if i!=None:
            fdiret.append(float(i[:-3]))
    closeDB(cur, conn)
    return years,fdiret

# 10.随机获取10条新闻
def get10News():
    newsDict={
        '习近平在博鳌亚洲论坛2021年年会开幕式上发表主旨演讲':'http://www.gov.cn/xinwen/2021-04/20/content_5600759.htm',
        '中国进出口银行董事长胡晓炼：“一带一路”可持续融资需把握四大关键词':'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/170921.htm',
        '黄志刚：加快构建一带一路金融国际合作新体系':'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/170923.htm',
        '王磊：中欧班列巨大优势进一步突显':'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/170943.htm',
        '2021年1-2月海上丝路贸易指数解读：外贸实现开门红，国内外需求强劲':'https://www.yidaiyilu.gov.cn/xwzx/gnxw/170900.htm',
        '“一带一路”奏强音 逆势成长开新局':'https://www.yidaiyilu.gov.cn/xwzx/gnxw/170889.htm',
        '大洋洲蓝皮书：太平洋岛国加快与“一带一路”对接':'https://www.yidaiyilu.gov.cn/xwzx/gnxw/170752.htm',
        '“健康丝绸之路”促进全球抗疫合作 未来发展前景广阔':'https://www.yidaiyilu.gov.cn/xwzx/gnxw/170609.htm',
        '“春苗行动”为中柬“一带一路”项目构筑健康“防火墙”':'https://www.yidaiyilu.gov.cn/xwzx/hwxw/170583.htm',
        '疫情下，与“一带一路”沿线国家贸易缘何稳定增长？':'http://www.gov.cn/xinwen/2021-04/14/content_5599588.htm',
        '共建一带一路，让高铁跑出新天地':'http://www.gov.cn/xinwen/2021-02/07/content_5585512.htm',
        '持续推进高质量共建一带一路':'http://www.gov.cn/xinwen/2020-12/27/content_5573662.htm',
        '中国政府与非洲联盟签署共建“一带一路”合作规划':'http://www.gov.cn/xinwen/2020-12/16/content_5569870.htm',
        '中国在“一带一路”沿线国家可再生能源项目投资额总体呈增长态势':'http://www.gov.cn/xinwen/2020-12/03/content_5566894.htm',
        '“一带一路”税收征管合作机制成果丰硕':'http://www.gov.cn/xinwen/2020-11/02/content_5556600.htm',
        '推动RCEP国家深度参与“一带一路”建设——访中国—东盟博览会秘书处秘书长王雷':'http://www.gov.cn/xinwen/2020-11/29/content_5565674.htm',
        '中哈合拍“一带一路”纪录片《你好，哈萨克斯坦》在哈播出':'http://www.gov.cn/xinwen/2020-10/18/content_5552145.htm',
        '丝路国际智库网络呼吁高质量共建“一带一路”':'http://www.gov.cn/xinwen/2020-09/30/content_5548636.htm',
        '全球战“疫”的重要支撑——代表委员谈“一带一路”合作对全球抗疫的积极作用':'http://www.gov.cn/xinwen/2020-05/26/content_5514964.htm',
        '新华时评：“一带一路”铺通全球复苏路':'http://www.gov.cn/xinwen/2020-09/06/content_5541055.htm',
        '李保东：“一带一路”为完善全球治理提供了一个“亚洲视角”':'https://www.yidaiyilu.gov.cn/xwzx/roll/170552.htm',
        '博鳌新视野：如何实现可持续融资共建“一带一路”？':'http://www.chinanews.com/cj/2021/04-20/9459297.shtml',
        '人类社会应该向何处去？习近平提出四点倡议':'http://www.chinanews.com/gn/2021/04-20/9459195.shtml',
        '博鳌亚洲论坛聚焦“一带一路”合作':'http://www.chinanews.com/gn/2021/04-20/9459129.shtml'
    }
    indexlist=random.sample(range(0,len(newsDict)),10)
    newsTitle=[]
    newsLink=[]
    j=0
    for i in newsDict:
       if j in indexlist:
           newsTitle.append(i)
           newsLink.append(newsDict[i])
       j+=1
    valuelist=random.sample(range(20,101),10)
    valuelist.sort()

    return newsTitle,newsLink,valuelist


# 根据年份获取65国的四个数据:GDP,total,FDI,外贸依存度
def getDatasByYear(year):
    conn, cur = connectDB()
    sqlText = "SELECT B.countryname,B."+str(year)+"_total,C."+str(year)+"_total_gdp,F."+str(year)+"_fdi from bilateralinvestment B left join country C on B.countryname=C.country_name left join FDI F on B.countryname=F.country_name;"
    cur.execute(sqlText)
    data = cur.fetchall()
    res = {}
    for i in data:
        # temp={"name":"","GDP":"","Total":"","FDI":"","YiCunDu":""}
        temp={}
        temp["GDP"]=i[2]
        temp["Total"]=i[1]
        temp["FDI"]=i[3]
        if i[2]!=None and i[1]!=None and i[2]!="" and i[1]!="":
            print(i[1],i[2])
            temp["YiCunDu"]=str(int(float(i[1][:-3])/(100*float(i[2][:-1]))))+"%"
        else:
            temp["YiCunDu"]="暂无数据"
        if i[2] == None:
            temp["GDP"] = "暂无数据"
        if i[3] == None:
            temp["FDI"] = "暂无数据"
        if i[1]==None:
            temp["Total"]="暂无数据"
        res[i[0]] = temp.copy()
    closeDB(cur, conn)
    return res


## 一些全局变量，用于提高访存效率
allCountries=getAllCountries()
allCountries_en=getAllCountries_en()


if __name__ == '__main__':
    # print(getAllCountries())
    # print(getGDPData(2014))
    # print(len(getBIDataByCountryName('俄罗斯')[0]))
    # print(get68Country())
    # print(getAreaDataByYear(2017))
    # print(getDependenceDataByCountryName("中国"))
    # print(get10News())
    # print("[")
    # for i in allCountries:
    #     print("'"+i+"'",end=",")
    print(getDatasByYear(2019),len(getDatasByYear(2019)))
