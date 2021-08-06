# ABCMouse

Clone this repo by running:

- git clone https://github.com/snetch-gym/ABCMouse.git

Get all the packages up to date:

- npm i

How to run tests:

Run all specs: ./node_modules/.bin/wdio wdio.conf.js

Run specific spec:

- ./node_modules/.bin/wdio wdio.conf.js --spec specs/login/login-spec.js

Run two specs:

./node_modules/.bin/wdio wdio.conf.js --spec specs/login/login-spec.js --spec specs/homepage/homepage-spec.js

Framework information:

- wdio.conf.js - configuration file to setup url, amount of threads etc

- page_objects - folder where we keep all selectors and helpers(Page Object Model)

- spec - folder with all of the test scripts
