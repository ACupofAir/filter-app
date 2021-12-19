# %%
from PIL import Image
import numpy as np
import sys
import cv2 as cv
import numpy as np
import os

def median_filter(image, win=3):
    H, W, C = image.shape
    result = image.copy()
    for h in range(1, H-2):
        for w in range(1, W-2):
            for c in range(C):
                result[h, w, c] = np.median(result[h:h+win, w:w+win, c])
    return result




#%%
imgname = sys.argv[1]
img_path = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
img_name = imgname
img_url = os.path.join(img_path, "gui","images", img_name)
img_after_name = "after_mean_filter_"+img_name 
img_after_url = os.path.join(img_path, "gui","images", img_after_name)

img_original = cv.imread(img_url)
MedianFilter_img=median_filter(img_original)

cv.imwrite(img_after_url, MedianFilter_img)
print("Done!")
sys.stdout.flush()


# %%
