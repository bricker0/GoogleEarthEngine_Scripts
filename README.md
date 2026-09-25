# GoogleEarthEngine_Scripts

I keep my favorite and most-used Google Earth Engine Scripts here. I use these primarily in teaching.

First, I will share scripts that show how to render, view, and export satellite data based on the data and location that you specify. In this script - you call mulitspectral Sentinel 2, you can change the date range, and the region of interest. This script will create an orthomosaic that will render the median value for each pixel within that time range that you specify, and to filter out out clouds (when possible). Think about what you are mapping to decide how and when to call your data. Is there a rainy season? Are you interested in growing patterns? Think carefully. You can modify this script manually to center and clip to your region of interest, then export the image to use as you wish. 

<a href="https://github.com/bricker0/GoogleEarthEngine_Scripts/blob/main/GEE_clip_bounding_box.js">This script</a> uses a bounding box that you set yourself using the <b>drawing tools in the Google Earth Engine interface</b>. If you do not make a bounding box, this script will not work. Also pay attention to the variable name of the bounding box, make sure it matches your script. geometry2 for example.

If you would like to clip an image based on the country boundaries <a href="GEE_clip_country_UN.js"> use this script </a> which calls country boundaries based on the official United Nations Global Administrative Unit Layer (GAUL) Data. You can read more about <a href="https://www.fao.org/agroinformatics/training-and-resources/data-sets/data-set-detail/global-gaul-new-2024-release/en"> GAUL </a> and the <a href="https://salb.un.org/en">Second Administrative Level Boundary here</a>.

This script also gives you the ability to export the image to your Google Drive. From there, you can save it locally and use it in QGIS...
