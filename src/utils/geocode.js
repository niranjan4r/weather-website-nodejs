const request = require('request')

// Geocoding: Location --> Lat and Long. Not neccessary for (weatherstack api)
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmlyYW5qYW40ciIsImEiOiJja2J1czg4YnkwOGkxMnJwZ2E3bnpxaDIwIn0.O4s7JzoK2BR133af7VMI7g&limit=1'

    request({ url, json: true }, (error, { body } = {}) => { // deconstructing response as {body}
        if (error)
        {
            callback("Unable to connect to servers!", undefined)
        }
        else if (body.features.length === 0)
        {
            callback("Unable to find the location!", undefined)
        }
        else 
        {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode