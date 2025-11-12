const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://threestep.com',
    experimentalStudio: true,
  },
});
