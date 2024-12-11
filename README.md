# javascript-cypress-webuy-anycar-project
Cypress is an end-to-end test automation framework that suits modern web application environments. It is a JavaScript framework and runs on node.js. Using Cypress, you can quickly and easily write and run integration, unit, and end-to-end tests.

* npm install cypress --save-dev

* npx cypress open

## to open using npm commands, script in pacakge json is updated with cy:open, so the command can be used as below 

* npm run cy:open

## add cypress config file 

* referene from here : https://docs.cypress.io/app/references/configuration

## to run tests from command line below are the commands

npx cypress run --browser chrome --headed

npx cypress run --browser chrome --headed --spec "path to spec files"

Note : Reports will be generated in this location 'workspace\javascript-cypress-webuy-anycar-project\cypress\reports\html'

  browsers:{
    [
        browser: "Chrome",
        platform: "Windows 11",
        versions: ["latest-1"]
    ],
     {
        browser: "edge",
        platform: "Windows 11",
        versions: ["latest"]
     },
     {
        browser: "Firefox",
        platform: "Windows 11",
        versions: ["latest-1"]
    }
},
// "mocha-junit-reporter": "2.0.0",
    // "mochawesome-merge": "^4.3.0",
    // "mochawesome-report-generator": "^6.2.0",
    // "cypress-mochawesome-reporter": "2.2.1",
    // "cypress-multi-reporters": "1.5.0",