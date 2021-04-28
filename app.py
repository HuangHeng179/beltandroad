# 1 业务层

from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import jsonify
from flask import make_response
import functions

app = Flask(__name__)

app.secret_key='abcdefg'


@app.route('/beltandroad')
def beltandroad():
    return render_template('index.html')


@app.route('/')
def index():
    return redirect('/beltandroad')


@app.route('/beltandroad/getSomeCountries',methods=['GET','POST'])
def getsomecountries():
    if request.method=="POST":
        countryString=request.form.get('str_country')
        res=make_response(jsonify(functions.fuzzySearchCountry(countryString)))
        # res.headers['Access-Control-Allow-Origin'] = '*'
        # res.headers['Access-Control-Allow-Method'] = '*'
        # res.headers['Access-Control-Allow-Headers'] = '*'
        return res


@app.route('/beltandroad/getGDPTop8',methods=['POST'])
def getGDPTop8():
    year=int(request.form.get('year'))
    res=make_response(jsonify(functions.getGDPTop8(year)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res


@app.route('/beltandroad/getBilateralInvestmentByCountryName',methods=['POST'])
def getBilateralInvestmentByCountryName():
    country_name=request.form.get('country_name')
    res=make_response(jsonify(functions.getBilateralInvestmentByCountryName(country_name)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res

@app.route('/beltandroad/getJoinCountryByYear',methods=['POST'])
def getJoinCountryByYear():
    year=int(request.form.get('year'))
    res=make_response(jsonify(functions.getJoinCountryByYear(year)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res


@app.route('/beltandroad/getDependenceByYear',methods=['POST'])
def getDependenceByYear():
    year=int(request.form.get('year'))
    res=make_response(jsonify(functions.getDependenceByYear(year)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res


@app.route('/beltandroad/getBilateralInvestmentByYear',methods=['POST'])
def getBilateralInvestmentByYear():
    year=int(request.form.get('year'))
    res=make_response(jsonify(functions.getBilateralInvestmentByYear(year)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res


@app.route('/beltandroad/getGDPByCountryName',methods=['POST'])
def getGDPByCountryName():
    country_name=request.form.get('country_name')
    res=make_response(jsonify(functions.getGDPByCountryName(country_name)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res


@app.route('/beltandroad/getDependenceByCountryName',methods=['POST'])
def getDependenceByCountryName():
    country_name=request.form.get('country_name')
    res=make_response(jsonify(functions.getDependenceByCountryName(country_name)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res

@app.route('/beltandroad/getFDITop10ByYear',methods=['POST'])
def getFDITop10ByYear():
    year=int(request.form.get('year'))
    res=make_response(jsonify(functions.getFDITop10ByYear(year)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res

@app.route('/beltandroad/getFDIByCountryName',methods=['POST'])
def getFDIByCountryName():
    country_name=request.form.get('country_name')
    res=make_response(jsonify(functions.getFDIByCountryName(country_name)))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res

@app.route('/beltandroad/get10News',methods=['GET'])
def get10News():
    # country_name=request.form.get('country_name')
    res=make_response(jsonify(functions.get10News()))
    # res.headers['Access-Control-Allow-Origin'] = '*'
    # res.headers['Access-Control-Allow-Method'] = '*'
    # res.headers['Access-Control-Allow-Headers'] = '*'
    return res

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=5000,debug=True)
