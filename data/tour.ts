export const tour = {
    "name":"TourForn53",
    "duration": 10,
    "description":"Could be",
    "maxGroupSize": 10,
    "summary": "Test tour",
    "difficulty": difficulty(),
    "price": 100,
    "rating": 4.8,
    "imageCover": "tour-3-cover.jpg",
    "ratingsAverage": 4.9,
    "guides":[],
    "startDates":["2024-04-04"],
      "location": {
        "latitude": 40.712776,
        "longitude": -74.005974,
        "description": "Central Park, New York",
        "address": "123 Park Ave, New York, NY 10001"
    },
    "startLocation":{
        "type": "Point",
        "coordinates": [-74.005974, 40.712776]
    }
  };

  function difficulty(){
    const array = ['easy', 'medium', 'difficult']
    const index = Math.floor(Math.random() * 3) + 1;
    return array[index];
  }
        