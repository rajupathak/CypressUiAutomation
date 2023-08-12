const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples_cypress_concept/*.js",
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    //reporter: "mochawesome",
  },
  retries: {
    runMode: 1,
  },
  projectId: "1sz5e5",
  env: {
    url: "https://st-test4.iris.cwp.pnp-hcl.com/chat/login",
  },
});
