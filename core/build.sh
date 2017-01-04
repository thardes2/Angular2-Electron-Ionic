#!/bin/bash
tsc
cp package.json dist/
cd dist/
npm pack
