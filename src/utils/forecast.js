const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0a8bf0e59c293b5ff2364743ca0521ad&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            console.log(body.current);
            callback(undefined, {
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
                weatherDes: body.current.weather_descriptions[0] || 'Não definido',
                humidity: body.current.humidity
            })
        }

    })
    
}

module.exports = forecast;