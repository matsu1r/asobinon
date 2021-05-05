#!/bin/bash

filename="crowdin.yml"
replace="REPLACE_THIS_WITH_API_TOKEN"
with=$CROWDIN_API_TOKEN

if [[ $replace != "" && $with != "" ]]; then
  sed -i .bak "s/$replace/$with/" $filename
fi
