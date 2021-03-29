# @Time : 2021/3/27 20:46 
# @Author : HengHuang
# @File : functions.py 
# @Software: PyCharm

# 2 逻辑层

import getDataFromDB


# 根据字符串查找相关的国家返回
def fuzzySearchCountry(countryString):
    res=[]
    allCountries=getDataFromDB.getAllCountries()
    for i in allCountries:
        if countryString in i:
            res.append(i)
    return res


if __name__ == '__main__':
    print(fuzzySearchCountry('斯坦'))