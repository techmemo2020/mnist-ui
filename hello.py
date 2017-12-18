#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask

import os

app = Flask(__name__)

@app.route('/')
def hello():
	name = "Hello world"
	return name

if __name__ == "__main__":
	#port = os.environ.get("PORT","33507")
	#port = os.environ.get("PORT","5000")
	#app.run(port=int(port))
	#app.run(port=9999)
	app.run()
"""
	port = os.environ.get("PORT")
	if port:
		app.run(port=int(port))
		#app.run(host="0.0.0.0",port=port)
	else:
		app.run()
		#app.run(host="0.0.0.0")
	#app.run(host="0.0.0.0",port=5000,debug=True)
"""

