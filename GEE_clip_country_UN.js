// ============================================
// Clip Image by Country by the UN Boundary 
// ============================================

// 1. Load UN SALB Level 0 (Countries)

var countries = ee.FeatureCollection("FAO/GAUL/2015/level0");  

// NOTE: UN SALB is not officially hosted in GEE.
// GAUL is used here as a UN-aligned administrative dataset.
// GAUL is the most up to date UN Data file https://www.fao.org/hih-geospatial-platform/news/detail/now-available--the-global-administrative-unit-layers-(gaul)-dataset---2024-edition/en
//Read more about SALB here www.salb.un.org

// 2. Define country name
var countryName = "Aruba";  // Change to your country

// 3. Filter country

var country = countries.filter(ee.Filter.eq('ADM0_NAME', countryName));

// 4. Center map

//center the map on the country you have selected and set the zoom level

Map.centerObject(country, 6);


//if you would like the boundary to be visible - take a way the // on the next line
//Map.addLayer(country, {color: 'red'}, "Country Boundary");

// ============================================
// 5. Load Your Image (Example: Sentinel-2)
// Replace this with your own dataset
// ============================================
//Call the Sentinel 2 dataset and change the date based on the range that interest you - this will create a cloudless mosaic from pixels within that date range.
var S2_collection = ee.ImageCollection('COPERNICUS/S2_HARMONIZED')
  .filterBounds(country)
  .filterDate('2025-07-01', '2025-12-31')
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE', 'less_than', 5)
  ;

//here create a mosaic of the sentinel 2 images -this takes the median value of each pixel within the date range specified above and then clips the mosaic to the country identified from the UN boundary fall being called

var S2_mosaic = S2_collection.median().clip(country);


// 6. Clip image to country boundary
var clipped = S2_mosaic.clip(country);

// 7. Visualization parameters

// Next call bands B4 as red B3 as green and B2 as blue to make a true color composite to generate in the results Sentinel-2

var S2_display = {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000};

// 8. Add to map
//Add this layer to the map and name the layer true color - you can change the name if you want

Map.addLayer(S2_mosaic, S2_display, "True Color");


//Export image - set the scale based on the bounding box size - I have it set on Aruba
Export.image.toDrive({
image: S2_mosaic,
region: clipped,
description: 'RGB_Aruba_2025',
scale: 30,
})

// ============================================
// 9. Export to your personal Google Drive - name will update based on the country you select
// ============================================

Export.image.toDrive({
  image: clipped,
  description: countryName + "_Clipped_Image",
  folder: "GEE_Exports",
  scale: 10,
  region: country.geometry(),
  maxPixels: 1e13
});

