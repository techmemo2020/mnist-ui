# -*- coding: utf-8 -*-

from PIL import Image
import numpy

from sklearn.externals import joblib

import sys

pkl = "etc/svc-best.pkl"

if len(sys.argv)==2:
	fn = sys.argv[1]

def predict(fn):
	im = Image.open(fn)

	im0 = im.resize((28,28),Image.LANCZOS)
	im.close()
	im1 =  numpy.asarray(im0.convert('L'))
	im1 = 255 - im1
	im1 = im1 / 255.
	im1 = im1.reshape(784)

	es = joblib.load(pkl)

	label = es.predict( numpy.array([im1]) )
	return label[0]

