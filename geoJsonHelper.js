const GeoJSON = require('geojson')

function geoJsonParse(jsonData){
    let results = jsonData.map(function(obj){
        let oneObj = GeoJSON.parse(obj, {Point: ['lat', 'long'], include: ['city']})
        oneObj['properties']= {
            'id': obj.id, 
            'name': obj.name, 
            'age': obj.age, 
            'gender': obj.gender
        }
        return oneObj
    });
    
    return results
}

module.exports = geoJsonParse;

// {
//     "metadata": {
//       "path": "/users",
//       "query": {
//         "gender": "f",
//         "dist": 100,
//         "origin": "37.774929,-122.419416",
//         "min_age": 21,
//         "max_age": 29
//       }
//     },
//     "num_results": 1,
//     "results": [
//       {
//         "type": "user",
//         "locationHistory": {
//           "type": "FeatureCollection",
//           "features": [
//             {
//               "type": "Feature",
//               "properties": {
//                 "city": "Oakland"
//               },
//               "geometry": {
//                 "type": "Point",
//                 "coordinates": [-122.08007812499999, 37.78808138412046]
//               }
//             },
//             {
//               "type": "Feature",
//               "properties": {
//                 "city": "San Francisco"
//               },
//               "geometry": {
//                 "type": "Point",
//                 "coordinates": [-120.498046875, 36.24427318493909]
//               }
//             }
//           ]
//         },
//         "properties": {
//           "id": 1,
//           "name": "Taylor Swift",
//           "age": 27,
//           "gender": "f"
//         }
//       }
//     ]
//   }