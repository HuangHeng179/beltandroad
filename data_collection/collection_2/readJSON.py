# -*- coding: gb2312 -*-

import json

if __name__ == '__main__':
    with open('demo52ó������.json', 'r') as f:
        data = json.load(f)
    # print(data)
    countries=[]
    # �����ܽ��         total
    for i in range(len(data["total"])):
        for j in data["total"][i]:
            # print(j,data["total"][i][j])
            if j not in countries:
                countries.append(j)
    print()
    print()

    # ��������
    for i in range(1,len(countries)):
        sqltext="INSERT INTO bilateralinvestment (`id`,`countryname`)VALUES({},'{}');".format(i,countries[i])
        print(sqltext)

    print()
    print()

    for i in range(len(data["total"])):
        for j in data["total"][i]:
            if "��" in data["total"][i][j]:
                year=int(data["total"][i][j][:-1])
            else:
                if data["total"][i][j]=='':
                    num=""
                else:
                    num=data["total"][i][j]+"����Ԫ"
                sqltext = "update bilateralinvestment set "+str(year)+"_total='{}' where countryname='{}';".format(num, j)
                print(sqltext)
    print()
    print()

    # �������й�����      inside
    for i in range(len(data["inside"])):
        for j in data["inside"][i]:
            if "��" in data["inside"][i][j]:
                year=int(data["inside"][i][j][:-1])
            else:
                if data["inside"][i][j]=='':
                    num=""
                else:
                    num=data["inside"][i][j]+"����Ԫ"
                sqltext = "update bilateralinvestment set "+str(year)+"_inside='{}' where countryname='{}';".format(num, j)
                print(sqltext)
    print()
    print()

    # �������й�����      outside
    for i in range(len(data["outside"])):
        for j in data["outside"][i]:
            if "��" in data["outside"][i][j]:
                year=int(data["outside"][i][j][:-1])
            else:
                if data["outside"][i][j]=='':
                    num=""
                else:
                    num=data["outside"][i][j]+"����Ԫ"
                sqltext = "update bilateralinvestment set "+str(year)+"_outside='{}' where countryname='{}';".format(num, j)
                print(sqltext)
    print()
    print()

    pass