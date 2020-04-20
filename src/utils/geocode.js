const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibHVpei1mZWxpcGUiLCJhIjoiY2s5MnZkdjk4MDc1ODNnbHFhNmV1amFycCJ9.XoS8_3EVN73nI-4GiF0X1w&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service.', undefined);
        } else if (!body.features || body.features.length == 0) {
            callback('Unable to find location, try again with different search.', undefined);
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1]
            });
        }
    })
}

module.exports = geocode;