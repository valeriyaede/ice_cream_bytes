#! /usr/bin/env bash

./tasks/build.sh
inotifywait -m -e close_write --exclude '\.(swp|swx|tmp)$' -r src | \
  while read dirname events filename; do
    echo "$filename -> $events"
    ./tasks/build.sh
  done
