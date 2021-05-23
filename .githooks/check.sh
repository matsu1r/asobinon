#!/bin/sh
runOnChange() {
	echo -e "$1"
}
FILES_PATTERN='(eula|EULA|CODE_OF_CONDUCT|LICENSE|license)'
if git diff --cached --name-only | grep -qE $FILES_PATTERN; then
    runOnChange "\033*******************************************************************************\n*重要なファイルが変更されました。事前にイシューで相談の上マージしてください。 *\n*******************************************************************************"
    exit 1;
else
    exit 0;
fi