# -*- coding: utf-8 -*-

from flask import render_template, request
import base64
import time
import controller.svm as svm

ddir = 'static/data'

def _resolve_image():
	img = request.form.get('imgBase64')
	fn = None
	res = None
	if img:
		fn = '%s/data.png'%ddir
		img_bin = base64.b64decode(img)
		file = open(fn,'w')
		file.write(img_bin)
		file.close()
		fn_nocache = "%s?t=%f"%(fn,time.time())
	res = svm.predict(fn)
	return render_template('draw/output.html',img_fn=fn_nocache,res=res)
		

def disp():
	if request.method == 'POST':
		return _resolve_image()
	else:
		return render_template('draw/input.html')


