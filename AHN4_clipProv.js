
 // ============================================
 // Clip AHN4 elevation data to Zeeland
 // ============================================

 // 1. Load Netherlands provincial boundaries
 var adminNL = ee.FeatureCollection(
   "https://code.earthengine.google.com/?asset=projects/ee-bricker0/assets/provincies_NL"
 );

 // 2. Select province
 var provName = "Zeeland";

 // 3. Filter boundary
 var prov = adminNL.filter(
   ee.Filter.eq('naam', provName)
 );

 // 4. Center map
 Map.centerObject(prov, 8);

 // Show province boundary
 Map.addLayer(prov, {color: 'red'}, 'Zeeland boundary');

 // 5. Filter AHN4 elevation collection
 var elevationCollection = AHN4_collection
   .filterBounds(prov)
   .select('dtm');

 // 6. Convert the ImageCollection to one Image
 var elevation = elevationCollection.mosaic();

 // 7. Clip to Zeeland boundary
 var clipped = elevation.clip(prov.geometry());

 // 8. Visualization parameters
 var elevationVis = {
   min: -5,
   max: 30,
   palette: ['253494', '2c7fb8', '7fcdbb', 'ffffcc', 'd95f0e']
 };

 // 9. Add to map
 Map.addLayer(clipped, elevationVis, 'AHN4 DTM — Zeeland');

 // 10. Check the collection
 print('AHN4 images found:', elevationCollection.size());
 print('Selected province:', prov);
 
 // ============================================
// 9. Export to your personal Google Drive - name will update based on the country you select
// ============================================

Export.image.toDrive({
  image: clipped,
  description: provName + "DTM",
  folder: "GEE_Exports",
  scale: 10,
  region: prov.geometry(),
  maxPixels: 1e13
});
