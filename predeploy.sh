#!/bin/bash

filename="crowdin.yml"
replace="REPLACE_THIS_WITH_API_TOKEN"
with=$CROWDIN_API_TOKEN

# this won't work on macos
if [[ $replace != "" && $with != "" ]]; then
  sed -i "s/$replace/$with/" $filename
  echo "Successfully copied Crowdin API Key"
fi
