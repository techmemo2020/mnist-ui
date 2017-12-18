#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
	name = "Hello world"
	return name

if __name__ == "__main__":
	app.run(debug=True)

