#! /usr/bin/env bash

./tasks/build.sh
surge -p build -d icecreambytes.com
