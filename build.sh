#! /usr/bin/env bash

node build.js
ln -sFv ../src/static/normalize.css build/normalize.css
ln -sFv ../src/static/styles.css build/styles.css
ln -sFv ../src/static/img build/img
ln -sFv ../src/static/dotty.ttf build/dotty.ttf
