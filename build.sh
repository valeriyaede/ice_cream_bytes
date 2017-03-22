#! /usr/bin/env bash

mkdir -p build
rm -rf build/*
node tasks/build_js.js
cp -r src/static/* build
