#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, render_template
import controller.draw
import os

app = Flask(__name__)

@app.route('/')
def main():
	return render_template('main.html')

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
	return render_template('hello.html', name=name)

@app.route('/draw/',methods=['GET','POST'])
def draw():
	return controller.draw.disp()

if __name__ == "__main__":
	app.run(debug=True)	# via gunicorn

