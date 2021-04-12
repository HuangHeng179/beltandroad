import requests
import json


header={
 "Accept": "application/json, text/javascript, */*; q=0.01",
 "Accept-Encoding": "gzip, deflate, br",
 "Accept-Language": "zh-CN,zh;q=0.9",
 "Connection": "keep-alive",
 "Cookie": "__jsluid_s=dddd8037f608612139aa790ad0d42eb2; yfx_c_g_u_id_10008934=_ck21032317331611970605108475786; __jsl_clearance_s=1617098977.126|0|CtepC%2Bw7MmiKpbnXgRzdN6nJdOo%3D; Hm_lvt_25e78b3fa4b036e241d0874f836fb377=1616491996,1617098980; Hm_lpvt_25e78b3fa4b036e241d0874f836fb377=1617098980; yfx_f_l_v_t_10008934=f_t_1616491996193__r_t_1617098980241__v_t_1617098980241__r_c_1; Lmlist=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8; security_session_verify=5015a587c19b1f1d64ef76cf5391c739; insert_cookie=28312566",
 "Host": "www.yidaiyilu.gov.cn",
 "Referer": "https://www.yidaiyilu.gov.cn/jcsjpc.htm",
 "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
 "sec-ch-ua-mobile": "?0",
 "Sec-Fetch-Dest": "empty",
 "Sec-Fetch-Mode": "cors",
 "Sec-Fetch-Site": "same-origin",
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
 "X-Request-Id": "1150;r=99157593",
 "X-Requested-With": "XMLHttpRequest"
}
res=requests.get('https://www.yidaiyilu.gov.cn/js/SJ/data3.json',headers=header,verify=False)
res_html = res.content.decode(encoding='utf-8')
jsonObj=json.loads(res_html)##这个是json对象 可以直接使用了
print(jsonObj)
print("#############################")
print('进出口总额：')
print(jsonObj['total'])
print('从中国进口：')
print(jsonObj['inside'])
print('对中国出口：')
print(jsonObj['outside'])

