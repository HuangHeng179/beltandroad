# coding=gbk
from selenium import webdriver
from lxml import etree
from time import sleep

bro=webdriver.Chrome(executable_path='./chromedriver')
for i in range(2014,2020):
    bro.get('https://www.kylc.com/stats/global/yearly/g_gdp/'+str(i)+'.html')
    # all_countries=bro.find_elements_by_xpath('/html/body/div[2]/div[1]/div[5]/div[1]/div/div/div/table/tbody/tr')

    page_text=bro.page_source
    tree=etree.HTML(page_text)
    all_countries=tree.xpath('/html/body/div[2]/div[1]/div[5]/div[1]/div/div/div/table/tbody/tr')

    get_country=[]
    for country in all_countries:
        temp_country=[]
        # temp_country.append(country.xpath('./td[2]/text()')[0])
        # temp_country.append(country.xpath('./td[4]/text()')[0])

        # url = div.xpath('./div/span/@data-id')[0]
        if len(country.xpath('./td[2]/text()'))!=0 and country.xpath('./td[4]/text()')!=0:
            temp_country.append(country.xpath('./td[2]/text()')[0])
            temp_country.append(str(country.xpath('./td[4]/text()')[0]).split("(")[0].replace(' ',''))
            get_country.append(temp_country)
    # print(get_country)

    ##留下有用的国家
    countries=[
     "中国","博茨瓦纳","刚果民主共和国国家","基里巴斯","尼日尔","科摩罗","贝宁","莱索托","所罗门群岛","马里","赤道几内亚","利比里亚","秘鲁","塞浦路斯","牙买加","卢森堡","意大利","古巴","巴巴多斯","瓦努阿图","汤加","库克群岛","厄瓜多尔","葡萄牙","斐济","密克罗尼西亚联邦","马耳他","萨尔瓦多","多米尼加","智利","萨摩亚","苏里南","格林纳达","委内瑞拉","多哥","冈比亚","乌干达","佛得角","布隆迪","坦桑尼亚","津巴布韦","刚果（布）","乍得","尼日利亚","肯尼亚","安哥拉","纳米比亚","加蓬","莫桑比克","赞比亚","加纳","塞舌尔","南苏丹","喀麦隆","塞拉利昂","科特迪瓦","阿尔及利亚","哥斯达黎加","吉布提","毛里塔尼亚","几内亚","索马里","希腊","乌拉圭","纽埃","多米尼克","圭亚那","卢旺达","塞内加尔","突尼斯","利比亚","巴布亚新几内亚","玻利维亚","安提瓜和巴布达","特立尼达和多巴哥","奥地利","马达加斯加","巴拿马","摩洛哥","埃塞俄比亚","苏丹","新西兰","波黑","黑山","土库曼斯坦","立陶宛","拉脱维亚","巴勒斯坦","阿尔巴尼亚","阿富汗","爱沙尼亚","巴基斯坦","斯洛文尼亚","克罗地亚","黎巴嫩","阿曼","巴林","也门","埃及","约旦","叙利亚","印度尼西亚","菲律宾","缅甸","文莱","东帝汶","不丹","阿联酋","泰国","越南","新加坡","以色列","阿塞拜疆","亚美尼亚","捷克","孟加拉国","白俄罗斯","柬埔寨","格鲁吉亚","匈牙利","伊拉克","伊朗","吉尔吉斯斯坦","老挝","哈萨克斯坦","卡塔尔","科威特","摩尔多瓦","马尔代夫","马来西亚","北马其顿","蒙古国","尼泊尔","波兰","保加利亚","罗马尼亚","塞尔维亚","沙特阿拉伯","斯洛伐克","塔吉克斯坦","俄罗斯","南非","斯里兰卡","韩国","土耳其","乌克兰","乌兹别克斯坦"
    ]
    useful_country=[]
    for country_and_number in get_country:
        if country_and_number[0] in countries:
            useful_country.append(country_and_number)
    # print(str(i)+'年'+str(len(useful_country))+'个国家地区数据:')
    # print(useful_country)
    for j in useful_country:
        TC=j[0]
        TCM=j[1]
        if "万亿" in TCM:
            TCM="{:.1f}".format(float(TCM.replace("万亿",""))*10000)+"亿"
        print("UPDATE country SET {}_total_gdp='{}' WHERE country_name='{}';".format(i,TCM,TC))