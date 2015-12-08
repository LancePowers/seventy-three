var https = require('https');
var request = require('request')
var fs = require('fs');
var sharp = require('sharp');

var images = ['https://static.pexels.com/photos/1543/landscape-nature-man-person.jpg', 'https://static.pexels.com/photos/5076/light-person-woman-fire.jpeg', 'https://static.pexels.com/photos/7921/pexels-photo.jpg', 'https://static.pexels.com/photos/7366/startup-photos.jpg', 'https://static.pexels.com/photos/2133/man-person-cute-young.jpg', 'https://static.pexels.com/photos/6972/summer-office-student-work.jpg', 'https://static.pexels.com/photos/1613/person-woman-summer-girl.jpg', 'https://static.pexels.com/photos/7394/pexels-photo.jpg', 'https://static.pexels.com/photos/6822/sunglasses-woman-model-fall.jpg', 'https://static.pexels.com/photos/16010/pexels-photo.jpg', 'https://static.pexels.com/photos/7529/pexels-photo.jpeg'];

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

for (var i = 0; i < images.length; i++) {
    download(images[i], 'large/survivor' + i + '.jpg', function () {
        console.log('done');
    });
}