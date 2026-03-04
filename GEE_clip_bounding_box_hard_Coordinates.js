
//here are the hard baked coordinates
var geometry = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-70.08376423386883, 12.630833527946889],
          [-70.08376423386883, 12.39889928537405],
          [-69.85030476121258, 12.39889928537405],
          [-69.85030476121258, 12.630833527946889]]], null, false);
		  
//Call the Sentinel 2 dataset and change the date based on the range that interest you - this will create a cloudless mosaic from pixels within that date range.
var S2_collection = ee.ImageCollection('COPERNICUS/S2_HARMONIZED')
  .filterBounds(geometry)
  .filterDate('2025-07-01', '2025-12-31')
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE', 'less_than', 5)
  ;

//here create a mosaic with the median value of each pixel within the date range specified and clip to the region I identified in the bounding box called geometry

var S2_mosaic = S2_collection.median().clip(geometry);

// Next call bands B4 as red B3 as green and B2 as blue to make a true color composite to generate in the results Sentinel-2

var S2_display = {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000};


//Add this layer to the map and name the layer true color - you can change the name if you want

Map.addLayer(S2_mosaic, S2_display, "True Color");

//center the map on the bounding box

Map.centerObject(geometry);

//Export image - set the scale based on the bounding box size - I have it set on Aruba
Export.image.toDrive({
image: S2_mosaic,
region: geometry,
description: 'RGB_Aruba_2025',
scale: 30,
})

