#! /usr/bin/env node

var PARTIALS_DIR = "./src/templates/partials";
var MAIN_TEMPLATE = "./src/templates/index.hbs";
var OUTPUT_FILE = "./output.html";

var fs = require("fs");
var Handlebars = require("handlebars");
var json = require("./src/example.json")

var template = fs.readFileSync(MAIN_TEMPLATE, "utf8");
var render = Handlebars.compile(template);
var html = render(json);
console.log(html);
