#! /usr/bin/env node

var path = require("path");

// var PARTIALS_DIR = path.resolve(__dirname, "../src/templates/partials");
var MAIN_TEMPLATE = path.resolve(__dirname, "../src/templates/index.hbs");
var OUTPUT_FILE = path.resolve(__dirname, "../build/index.html");
var DATA_FILE = path.resolve(__dirname, "../src/data.json");

Object.prototype.toString = function () {
  return JSON.stringify(this);
};

var fs = require("fs");
var Handlebars = require("handlebars");
var data = require(DATA_FILE);

var template = fs.readFileSync(MAIN_TEMPLATE, "utf8");
var toHTML = Handlebars.compile(template);
var html = toHTML(data);

fs.writeFileSync(OUTPUT_FILE, html, "utf8");
