const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples_cypress_concept/*.js",
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
  },
});
