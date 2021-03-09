#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch build &&
git checkout build &&
git remote add origin git@github.com:CHANGsome/poket-book.git &&
git push -u origin build -f &&
cd -