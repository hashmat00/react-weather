//365c322cbad80cabaf0458e709a58732


var axios = require('axios');



//generate the base url
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=fbc064799de5ca4c7b28ed82407bdd98&units=imperial`;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(error) {
      throw new Error('Unable to fetch weather.');
    });
  }
}