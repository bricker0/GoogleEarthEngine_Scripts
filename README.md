# GoogleEarthEngine_Scripts
This is where I will keep my favorite Google Earth Engine Scripts I use primarily in teaching

First, I will share scripts that show how to render, view, and export satellite data based on the location that you specify.

In this script - you call Sentinel 2 data for the whole world, you can change the date range in this script for the time period you wish to have for your image. This script will help you create an orthomosaic that find the median value for each pixel within that time range that you specify, and make a mosaic filtering out clouds (when possible). You can modify this script manually to center and clip to your region of interest, then export the image to use as you wish. 

<a href="https://github.com/bricker0/GoogleEarthEngine_Scripts/blob/main/GEE_clip_bounding_box.js">This script</a> uses a bounding box that you set yourself using the drawing tools in the Google Earth Engine interface. If you do not make a bounding box, this script will not work. 

If you would like to clip an image based on the country boundaries <a href="GEE_clip_country_UN.js"> use this script </a> which calls country boundaries based on the official United Nations Global Administrative Unit Layer (GAUL) Data. 

You can read more about <a href="https://www.fao.org/agroinformatics/training-and-resources/data-sets/data-set-detail/global-gaul-new-2024-release/en"> GAUL </a> and the <a href="https://salb.un.org/en">Second Administrative Level Boundary here</a>.
