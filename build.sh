#! /usr/bin/env bash

mkdir -p build
rm -rf build/*
node build.js
cp -r src/static/* build
