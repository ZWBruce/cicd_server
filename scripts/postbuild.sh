#!/bin/bash

set -e;

DIR=$(pwd);

echo "$DIR";

cp "$DIR/package.json" "$DIR/output";
cp "$DIR/package-lock.json" "$DIR/output/";