var express = require('express');
var router = express.Router();
var request = require('request');

var url = 'http://demo.ckan.org/api/3/action/group_list';
var headers = {
    api_key: 'Pu9Y6eTI8FyPmh6x3RZYhhV2lPoCKRpjiYsSia6n'
};
request.get('https://findtreatment.samhsa.gov/locator/listing?', function (err, response, profile) {
    console.log((err, response, profile))
})