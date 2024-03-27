const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b9r379',
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com/#/home',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
