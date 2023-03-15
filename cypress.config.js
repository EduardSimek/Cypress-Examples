const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default


module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000, 
    pageLoadTimeout: 120000,
    reporter: "cypress-multi-reporters",
    reporterOptions:{
      configFile: "reporter-config.json"
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com"
    },
   

  },

  
});



