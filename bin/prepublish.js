#!/usr/bin/env node

var fs = require('fs');
var coffee = require('coffee-script');

if (!fs.existsSync('dist')){
  fs.mkdirSync('dist');
};
fs.writeFileSync('dist/transform.js', coffee.compile(fs.readFileSync('src/transform.coffee', 'utf-8')));
fs.writeFileSync('dist/client.js', coffee.compile(fs.readFileSync('src/client.coffee', 'utf-8')));

