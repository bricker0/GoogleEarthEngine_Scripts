// In this example we call a land use map and clip it by country
//1. Load UN SALB Level 0 (Countries)
// GAUL is used here as a UN-aligned administrative dataset.
// GAUL is the most up to date UN Data file https://www.fao.org/hih-geospatial-platform/news/detail/now-available--the-global-administrative-unit-layers-(gaul)-dataset---2024-edition/en
//Read more about SALB here www.salb.un.org// NOTE: UN Second Administrative Level Boundary (SALB) is not officially hosted in GEE at the time of writing.

var countries = ee.FeatureCollection("FAO/GAUL/2015/level0");  

// 2. Define country name
var countryName = "Netherlands";  // Change to your country

// 3. Call the boundary file and name of your country

var country = countries.filter(ee.Filter.eq('ADM0_NAME', countryName));

// 4. Call the land cover data - in this case is  and clip it to the country you are interested in.

var dataset = ee.Image('COPERNICUS/CORINE/V20/100m/2018');
var landCover = dataset.select('landcover')
   .clip(country);

// 5. Center map on the country you have selected and set the zoom level

Map.centerObject(country, 6);
Map.addLayer(landCover, {}, 'Land Cover');

//clip for export


var clipped = landCover.clip(country);


//Export image - set the scale based on the bounding box size - I have it set on Netherlands
Export.image.toDrive({
image: dataset,
region: clipped,
description: 'Nederland_CORINE',
scale: 30,
})



//6. Make a color pallette 

// =========================================================
// OFFICIAL CORINE COLOR PALETTE
// RGB values from the CLC legend
// =========================================================

var corinePalette = [
  'E6004D', // 1  Continuous urban fabric
  'FF0000', // 2  Discontinuous urban fabric
  'CC4DF2', // 3  Industrial or commercial units
  'CC0000', // 4  Road and rail networks and associated land
  'E6CCCC', // 5  Port areas
  'E6CCE6', // 6  Airports
  'A600CC', // 7  Mineral extraction sites
  'A64D00', // 8  Dump sites
  'FF4DFF', // 9  Construction sites
  'FFA6FF', // 10 Green urban areas
  'FFE6FF', // 11 Sport and leisure facilities

  'FFFFA8', // 12 Non-irrigated arable land
  'FFFF00', // 13 Permanently irrigated land
  'E6E600', // 14 Rice fields
  'E68000', // 15 Vineyards
  'F2A64D', // 16 Fruit trees and berry plantations
  'E6A600', // 17 Olive groves
  'E6E64D', // 18 Pastures
  'FFE6A6', // 19 Annual crops associated with permanent crops
  'FFE64D', // 20 Complex cultivation patterns
  'E6CC4D', // 21 Land principally occupied by agriculture, with significant areas of natural vegetation
  'F2CCA6', // 22 Agro-forestry areas

  '80FF00', // 23 Broad-leaved forest
  '00A600', // 24 Coniferous forest
  '4DFF00', // 25 Mixed forest
  'CCF24D', // 26 Natural grasslands
  'A6FF80', // 27 Moors and heathland
  'A6E64D', // 28 Sclerophyllous vegetation
  'A6F200', // 29 Transitional woodland-shrub
  'E6E6E6', // 30 Beaches, dunes, sands
  'CCCCCC', // 31 Bare rocks
  'CCFFCC', // 32 Sparsely vegetated areas
  '000000', // 33 Burnt areas
  'A6E6CC', // 34 Glaciers and perpetual snow

  'A6A6FF', // 35 Inland marshes
  '4D4DFF', // 36 Peat bogs
  'CCCCFF', // 37 Salt marshes
  'E6E6FF', // 38 Salines
  'A6A6E6', // 39 Intertidal flats

  '00CCF2', // 40 Water courses
  '80F2E6', // 41 Water bodies
  '00FFA6', // 42 Coastal lagoons
  'A6FFE6', // 43 Estuaries
  'E6F2FF'  // 44 Sea and ocean
];



// =========================================================
// CORINE CLASS NAMES
// =========================================================

var corineNames = [

  'Continuous urban fabric',
  'Discontinuous urban fabric',
  'Industrial or commercial units',
  'Road and rail networks and associated land',
  'Port areas',
  'Airports',
  'Mineral extraction sites',
  'Dump sites',
  'Construction sites',
  'Green urban areas',
  'Sport and leisure facilities',

  'Non-irrigated arable land',
  'Permanently irrigated land',
  'Rice fields',
  'Vineyards',
  'Fruit trees and berry plantations',
  'Olive groves',
  'Pastures',
  'Annual crops associated with permanent crops',
  'Complex cultivation patterns',
  'Land principally occupied by agriculture, with significant areas of natural vegetation',
  'Agro-forestry areas',

  'Broad-leaved forest',
  'Coniferous forest',
  'Mixed forest',
  'Natural grasslands',
  'Moors and heathland',
  'Sclerophyllous vegetation',
  'Transitional woodland-shrub',
  'Beaches, dunes, sands',
  'Bare rocks',
  'Sparsely vegetated areas',
  'Burnt areas',
  'Glaciers and perpetual snow',

  'Inland marshes',
  'Peat bogs',
  'Salt marshes',
  'Salines',
  'Intertidal flats',

  'Water courses',
  'Water bodies',
  'Coastal lagoons',
  'Estuaries',
  'Sea and ocean'
];


// =========================================================
// LEVEL 1 CATEGORIES
// =========================================================

var level1 = [

  '1. Artificial surfaces',
  '2. Agricultural areas',
  '3. Forest and semi-natural areas',
  '4. Wetlands',
  '5. Water bodies'

];


// =========================================================
// LEGEND PANEL
// =========================================================

var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '10px 12px',
    width: '360px',
    maxHeight: '80%',
    backgroundColor: 'white'
  }
});


// Legend title
legend.add(ui.Label({
  value: 'CORINE Land Cover 2012',
  style: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '0 0 3px 0'
  }
}));

legend.add(ui.Label({
  value: '44 Level-3 classes',
  style: {
    fontSize: '11px',
    color: '555555',
    margin: '0 0 8px 0'
  }
}));


// ---------------------------------------------------------
// Function to create a legend row
// ---------------------------------------------------------

function makeRow(color, label, code) {

  var colorBox = ui.Label({
    style: {
      backgroundColor: '#' + color,
      padding: '7px',
      margin: '0 7px 3px 0'
    }
  });

  var description = ui.Label({
    value: code + '  ' + label,
    style: {
      fontSize: '11px',
      margin: '0 0 3px 0'
    }
  });

  return ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
}


// =========================================================
// ADD LEVEL-1 HEADINGS + CLASSES
// =========================================================

// Artificial surfaces
legend.add(ui.Label({
  value: '1. ARTIFICIAL SURFACES',
  style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '8px 0 4px 0'
  }
}));

for (var i = 0; i < 11; i++) {
  legend.add(
    makeRow(
      corinePalette[i],
      corineNames[i],
      i + 1
    )
  );
}


// Agricultural areas
legend.add(ui.Label({
  value: '2. AGRICULTURAL AREAS',
  style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '8px 0 4px 0'
  }
}));

for (var i = 11; i < 22; i++) {
  legend.add(
    makeRow(
      corinePalette[i],
      corineNames[i],
      i + 1
    )
  );
}


// Forest and semi-natural areas
legend.add(ui.Label({
  value: '3. FOREST AND SEMI-NATURAL AREAS',
  style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '8px 0 4px 0'
  }
}));

for (var i = 22; i < 34; i++) {
  legend.add(
    makeRow(
      corinePalette[i],
      corineNames[i],
      i + 1
    )
  );
}


// Wetlands
legend.add(ui.Label({
  value: '4. WETLANDS',
  style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '8px 0 4px 0'
  }
}));

for (var i = 34; i < 39; i++) {
  legend.add(
    makeRow(
      corinePalette[i],
      corineNames[i],
      i + 1
    )
  );
}


// Water bodies
legend.add(ui.Label({
  value: '5. WATER BODIES',
  style: {
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '8px 0 4px 0'
  }
}));

for (var i = 39; i < 44; i++) {
  legend.add(
    makeRow(
      corinePalette[i],
      corineNames[i],
      i + 1
    )
  );
}


// Add legend to map
Map.add(legend);
