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

@app.route('/getSomeCountries',methods=['GET','POST'])
def getsomecountries():
    if request.method=="POST":
        countryString=request.form.get('str_country')
        return make_response(jsonify(functions.fuzzySearchCountry(countryString)))


if __name__ == '__main__':
    app.run(host='127.0.0.1',port=5000,debug=True)
    # print(jsonify({'info': "收到了ajax请求"}))
    # print(jsonify([1,2,3]))
    # print(jsonify({1:1,2:2,3:3}))