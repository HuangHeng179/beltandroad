from flask import Flask
from flask import request
from flask import render_template
from flask import redirect

app = Flask(__name__)

app.secret_key='abcdefg'

@app.route('/beltandroad',methods=['GET','POST'])
def beltandroad():
    if request.method == "GET":
        return render_template('index.html')
    else:
        pass

@app.route('/')
def index():
    return redirect('/beltandroad')



if __name__ == '__main__':
    app.run(host='127.0.0.1',port=80,debug=True)
