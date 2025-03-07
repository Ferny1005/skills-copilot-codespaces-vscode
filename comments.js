// Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));