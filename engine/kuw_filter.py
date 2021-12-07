#%%
import sys

import numpy as np
import cv2
import matplotlib.pyplot as plt
# from ipywidgets import interact
from PIL import Image

#%%

imgname = sys.argv[1]

def kuwahara(pic, r=5, resize=False, rate=0.5):
    h, w, _ = pic.shape
    if resize:
        pic = cv2.resize(pic, (int(w*rate), int(h*rate)))
        h, w, _ = pic.shape
    pic = np.pad(pic, ((r, r), (r, r), (0, 0)), "edge")
    ave, var = cv2.integral2(pic)
    ave = ((ave[:-r-1, :-r-1]+ave[r+1:, r+1:] -
           ave[r+1:, :-r-1]-ave[:-r-1, r+1:])/(r+1)**2)
    var = ((var[:-r-1, :-r-1]+var[r+1:, r+1:]-var[r+1:, :-r-1] -
           var[:-r-1, r+1:])/(r+1)**2-ave**2).sum(axis=2)

    def filt(i, j):
        return np.array([ave[i, j], ave[i+r, j], ave[i, j+r], ave[i+r, j+r]])[(np.array([var[i, j], var[i+r, j], var[i, j+r], var[i+r, j+r]]).argmin(axis=0).flatten(), j.flatten(), i.flatten())].reshape(w, h, _).transpose(1, 0, 2)
    filtered_pic = filt(
        *np.meshgrid(np.arange(h), np.arange(w))).astype(pic.dtype)
    return filtered_pic
#%%
img_path = '/home/long/Workspace/Personal/Learn/filter_app/gui/images/'
img_name = imgname
url = img_path + img_name
img_after_name = "after_filter_"+img_name 
url_after_img = img_path + img_after_name
pic = np.array(Image.open(
url))
im = pic.copy()
r = 5
rate = 20
filtered_pic = kuwahara(im, r, 1, rate/100)
color_ture_pic = cv2.cvtColor(filtered_pic, cv2.COLOR_BGR2RGB)
cv2.imwrite(url_after_img, color_ture_pic)
print("Done!🥳")
sys.stdout.flush()
# %%
# Using for adjust prama

# url = "/home/long/Workspace/Personal/Learn/filter_app/images/bojie.jpg"

# pic = np.array(Image.open(
# url))
# im = pic.copy()
# r = 1
# rate = 20
# filtered_pic = kuwahara(im, r, 1, rate/100)
# plt.subplot(121)
# plt.imshow(pic)
# plt.subplot(122)
# plt.imshow(filtered_pic)

# %%
