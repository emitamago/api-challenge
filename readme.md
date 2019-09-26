#Take home challenge practice

## About this project
* One of practice takehome challenge from Rithm school shared with us.
* For specification and detail please read below.

## How to run code
* Download this repository
* At root, run `pspl < data.sql` to seed cvs data to database
* From terminal run `npm start` to start server
* Use Insomnia or similar API testing tool to make HTTP request

## Challenges 
I have build few basic nodejs API servers but I had couples of new concept and technologies to learn
to solve this challenge.

* How to handle CSV file. 
* How to tackle GeoJson

## Key technologies for this project
* [Leaflet](https://leafletjs.com/)


### Original Readme
-----------------------------------------------------------------------------------------------------------------------

## API Design Challenge

## What’s Required

Write an API endpoint that returns a filtered set of users from the csv provided below.

* Your API endpoint URL is /users
* Your API responds in the above format with valid GeoJSON
* Your API should correctly filter any combination of API parameters
* Your API should utilize a datastore
* Your API should support paginating the number of resulting users

## API Structure

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| gender    | Your gender preference: m (male) or f (female) |
| dist      | Maximum match distance in miles                |
| origin    | lat/long string of your location               |
| min_age   | Minimum age preference                         |
| max_age   | Maximum age preference                         |

Given the following request:

GET `/users?gender=f&dist=100&origin=37.774929,-122.419416&min_age=21&max_age=29`

The expected response should contain the following:

```json
{
  "metadata": {
    "path": "/users",
    "query": {
      "gender": "f",
      "dist": 100,
      "origin": "37.774929,-122.419416",
      "min_age": 21,
      "max_age": 29
    }
  },
  "num_results": 1,
  "results": [
    {
      "type": "user",
      "locationHistory": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "city": "Oakland"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-122.08007812499999, 37.78808138412046]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "city": "San Francisco"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-120.498046875, 36.24427318493909]
            }
          }
        ]
      },
      "properties": {
        "id": 1,
        "name": "Taylor Swift",
        "age": 27,
        "gender": "f"
      }
    }
  ]
}
```

All query parameters are optional. If a query parameter is missing or the value is invalid, you should skip the related filter.

All minimum and maximum fields should be inclusive (e.g. min_age=21&max_age=23 should return users with an age of 21, 22, or 23).
