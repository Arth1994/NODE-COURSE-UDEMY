const request = require('request')


const forecast = function (latitude, longitude, callback) {
    const url = 'https://api.darksky.net/forecast/0568a976a0f7062ab525bc9171da5014/' + latitude + ',' + longitude


    request({ url: url, json: true }, function (err, res) {
        if (err) {
            callback('Unable to connect to weather services', undefined);
        } else if (res.body.error) {
            callback('Unable to connect to location services', undefined);
        }
        else {
            callback(undefined, 'The Current weather is:' +res.body.daily.data[0].summary + '\nIt is: ' + res.body.currently.temperature + '\nThe Probabilty is:' + res.body.currently.precipProbability);
        }
    });
}

module.exports = forecast