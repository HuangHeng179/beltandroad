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

    ##�������õĹ���
    countries=[
     "�й�","��������","�չ��������͹�����","�����˹","���ն�","��Ħ��","����","������","������Ⱥ��","����","���������","��������","��³","����·˹","�����","¬ɭ��","�����","�Ű�","�ͰͶ�˹","��Ŭ��ͼ","����","���Ⱥ��","��϶��","������","쳼�","�ܿ�������������","�����","�����߶�","�������","����","��Ħ��","������","�����ɴ�","ί������","���","�Ա���","�ڸɴ�","��ý�","��¡��","̹ɣ����","��Ͳ�Τ","�չ�������","է��","��������","������","������","���ױ���","����","Īɣ�ȿ�","�ޱ���","����","�����","���յ�","����¡","��������","���ص���","����������","��˹�����","������","ë��������","������","������","ϣ��","������","Ŧ��","�������","������","¬����","���ڼӶ�","ͻ��˹","������","�Ͳ����¼�����","����ά��","����ϺͰͲ���","�������Ͷ�͸�","�µ���","����˹��","������","Ħ���","���������","�յ�","������","����","��ɽ","������˹̹","������","����ά��","����˹̹","����������","������","��ɳ����","�ͻ�˹̹","˹��������","���޵���","�����","����","����","Ҳ��","����","Լ��","������","ӡ��������","���ɱ�","���","����","������","����","������","̩��","Խ��","�¼���","��ɫ��","�����ݽ�","��������","�ݿ�","�ϼ�����","�׶���˹","����կ","��³����","������","������","����","������˹˹̹","����","������˹̹","������","������","Ħ������","�������","��������","�������","�ɹŹ�","�Ჴ��","����","��������","��������","����ά��","ɳ�ذ�����","˹�工��","������˹̹","����˹","�Ϸ�","˹������","����","������","�ڿ���","���ȱ��˹̹"
    ]
    useful_country=[]
    for country_and_number in get_country:
        if country_and_number[0] in countries:
            useful_country.append(country_and_number)
    # print(str(i)+'��'+str(len(useful_country))+'�����ҵ�������:')
    # print(useful_country)
    for j in useful_country:
        TC=j[0]
        TCM=j[1]
        if "����" in TCM:
            TCM="{:.1f}".format(float(TCM.replace("����",""))*10000)+"��"
        print("UPDATE country SET {}_total_gdp='{}' WHERE country_name='{}';".format(i,TCM,TC))