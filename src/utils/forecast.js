const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f263052e7f2f3deb44ff56fa693407b9&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error)
        {
            callback("Unable to connect to weather sevice!", undefined)
        }
        else if (body.error)
        {
            callback("Unable to find location!", undefined)
        }
        else
        {
            const data = body.current
            callback(undefined, data.weather_descriptions[0] + ". It is currently " + data.temperature + " degrees. It feels like " + data.feelslike + " degrees out. The humidity is " + data.humidity + "%.")
        }
    })
}

module.exports = forecast