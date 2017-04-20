#! /usr/bin/env bash

echo "[icb] starting build"
mkdir -p build # ensures build dir exists
rm -rf build/* # ensures build dir is empty
node tasks/build.js # runs the JS in this file, which converts hbs to html
cp -r src/static/* build
echo "[icb] completed build"
