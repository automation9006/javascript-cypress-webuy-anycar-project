const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
    viewportWidth: 1024,
    viewportHeight: 1024,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
    experimentalStudio:false,
    watchForFileChanges:false,
    "chromeWebSecurity": false,
    // reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://webuyanycar.com',
    specPattern:["cypress/e2e/features/*.feature"],
    
    env:{
      commandDelay: 3000,
    },

    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      // require('cypress-mochawesome-reporter/plugin')(off)

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.isHeadless) {
          // in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
          // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

          // for example, to set `somePreference: true` in Preferences:
          launchOptions.preferences.default['preference'] = true
          launchOptions.args.push('--window-size=1400,1200')
        //   launchOptions.args.push('--start-fullscreen')

          return launchOptions
        }

        if (browser.family === 'firefox'  && browser.isHeadless) {
          // launchOptions.preferences is a map of preference names to values
          launchOptions.preferences['some.preference'] = true
          launchOptions.args.push('--width=1400')
          launchOptions.args.push('--height=1200')

          return launchOptions
        }

        if (browser.name === 'electron'  && browser.isHeadless) {
          // launchOptions.preferences is a `BrowserWindow` `options` object
          launchOptions.preferences.darkTheme = true
          launchOptions.preferences.width = 1400
          launchOptions.preferences.height = 1200

          return launchOptions
        }
        
      })
    },
  },

})