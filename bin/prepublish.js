#!/usr/bin/env node

var fs = require('fs');
var coffee = require('coffee-script');

if (!fs.existsSync('lib')){
  fs.mkdirSync('lib');
};
fs.writeFileSync('lib/transform.js', coffee.compile(fs.readFileSync('src/transform.coffee', 'utf-8')));
fs.writeFileSync('lib/client.js', coffee.compile(fs.readFileSync('src/client.coffee', 'utf-8')));

