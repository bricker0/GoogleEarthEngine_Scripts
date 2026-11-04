# GoogleEarthEngine_Scripts

I keep my favorite and most-used Google Earth Engine Scripts here. I use these primarily in teaching.

Here I share scripts that can be reused. They show you how to render, view, and export Sentinel-2 satellite imagery from a location that you specify. This script will render an orthomosaic with the median value for each pixel within the time range specified, and filter out clouds (when possible). In this example, the orthomosaic is rendered as a true color composite; you may change the band combinations based on what you want to "see". You may modify any of these variables for your own purposes. Think about what you are mapping to decide how and when to call your data. Is there a rainy season that you want to avoid due to cloud cover? Or do you want the rainy season because that is when the vegetation is most healthy? Are you interested in growing patterns? Think carefully. You can modify this script manually to center and clip to your region of interest, then export the image to use as you wish. Both scripts also offer the ability to export an image as a GeoTIFF to your Google Drive. From there, you can save it locally and use it in QGIS... 

<a href="https://github.com/bricker0/GoogleEarthEngine_Scripts/blob/main/GEE_clip_bounding_box.js">This script</a> uses a bounding box that you set yourself using the <b>drawing tools in the Google Earth Engine interface</b>. If you do not make a bounding box, this script will not work. Also pay attention to the variable name of the bounding box, make sure it matches your script. geometry2 for example.

If you would like to clip an image based on the country boundaries <a href="GEE_clip_country_UN.js"> use this script </a>, which calls country boundaries based on the official United Nations Global Administrative Unit Layer (GAUL) Data. You can read more about <a href="https://www.fao.org/agroinformatics/training-and-resources/data-sets/data-set-detail/global-gaul-new-2024-release/en"> GAUL </a> and the <a href="https://salb.un.org/en">Second Administrative Level Boundary here</a>.

In this next example - instead of Sentinel 2 data - we call a processed Land Cover Classification file from the year 2018.  <a href="landCover_Corine_example.js">In this script</a>, we call the  European Commission  CORINE (Coordination of Information on the Environment) which is a standardized continent-scale land cover, biotope, and air quality maps. You can <a href="https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_CORINE_V20_100m">read more about the dataset here.</a> In this example, I have also generated a color palette for all of the different classes. You may wish to combine classes or only highlight the ones that interest you. Like the other examples, you may change the name of the country to the one you are interested in investigating. If you try this script with other land cover maps, do not forget to update the legend to match their classification scheme. There are so many different land cover classification files to pick from!

Finally in the AHN4_clipProv.js you can call 0.5 meter elevation data from a digital terrain model for a Dutch province you pick. In this example, I call Zeeland. Read more about how this can be fun and useful in this paper I wrote titled <a href="https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2025.1507385/full">Digital elevation models, old maps, and cultural heritage—geospatial assets for the digital humanities</a>.

Next - for the EIA course I teach - a basic change-over-time exercise. 
In this script, I call a location where I know a data centers were built between 2016-2026, comparing winter - calling Sentinel-2 data - 
Generate the Orthomosaic 
Identify the EO sensor – Sentinel 2 
Identify the area of interest – set the geometry
Create a cloudless composite – cloud mask 
Median pixel value over a given date range - 
Then generate Normalized Difference Vegetation Index, Normalized Difference Built Up index,  
Do all of the above for the two time periods
calculate change over time 

You can play with the 
<a href="https://ee-bricker0.projects.earthengine.app/view/eia-course-example"> interactive app here </a>, where you can turn the layers on and off to explore change over time. <br>

<a href="[https://ee-bricker0.projects.earthengine.app/view/eia-course-example](https://code.earthengine.google.com/6e6313593fb5969f1086da96e1a9cb98)">. And then here is the script itself </a> - I think the quantified hectares for the new built-up values are underestimated - what do you think? I made this script with the help of ChatGPT. 


