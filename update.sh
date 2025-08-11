#!/bin/bash
git fetch --all
git reset --hard origin/main
npm i -f
npm run build