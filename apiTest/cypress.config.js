const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        mochaFile: 'results/my-test-output.xml',
        toConsole: true,
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});