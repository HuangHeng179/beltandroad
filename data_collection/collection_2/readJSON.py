# -*- coding: gb2312 -*-

import json

if __name__ == '__main__':
    with open('demo52贸易数据.json', 'r') as f:
        data = json.load(f)
    # print(data)
    countries=[]
    # 解析总金额         total
    for i in range(len(data["total"])):
        for j in data["total"][i]:
            # print(j,data["total"][i][j])
            if j not in countries:
                countries.append(j)
    print()
    print()

    # 新增国家
    for i in range(1,len(countries)):
        sqltext="INSERT INTO bilateralinvestment (`id`,`countryname`)VALUES({},'{}');".format(i,countries[i])
        print(sqltext)

    print()
    print()

    for i in range(len(data["total"])):
        for j in data["total"][i]:
            if "年" in data["total"][i][j]:
                year=int(data["total"][i][j][:-1])
            else:
                if data["total"][i][j]=='':
                    num=""
                else:
                    num=data["total"][i][j]+"万美元"
                sqltext = "update bilateralinvestment set "+str(year)+"_total='{}' where countryname='{}';".format(num, j)
                print(sqltext)
    print()
    print()

    # 解析从中国进口      inside
    for i in range(len(data["inside"])):
        for j in data["inside"][i]:
            if "年" in data["inside"][i][j]:
                year=int(data["inside"][i][j][:-1])
            else:
                if data["inside"][i][j]=='':
                    num=""
                else:
                    num=data["inside"][i][j]+"万美元"
                sqltext = "update bilateralinvestment set "+str(year)+"_inside='{}' where countryname='{}';".format(num, j)
                print(sqltext)
    print()
    print()

    # 解析对中国出口      outside
    for i in range(len(data["outside"])):
        for j in data["outside"][i]:
            if "年" in data["outside"][i][j]:
                year=int(data["outside"][i][j][:-1])
            else:
                if data["outside"][i][j]=='':
                    num=""
                else:
                    num=data["outside"][i][j]+"万美元"
                sqltext = "update bilateralinvestment set "+str(year)+"_outside='{}' where countryname='{}';".format(num, j)
                print(sqltext)
    print()
    print()

    pass