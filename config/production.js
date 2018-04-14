'use strict';

const packageJson = require('../package.json');

module.exports = {
    debug: false,
    port: process.env.PORT || 8080,
    staticBasePath: `//${packageJson.name}.surge.sh/`
};
