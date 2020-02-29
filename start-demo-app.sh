#!/bin/bash

# get demo app name
app=$1

# change directory to nuxt demo
cd demos/$app

# run nuxt in dev mode
npm run dev