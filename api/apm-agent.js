const apm = require('elastic-apm-node').start({
  serviceName: 'node-app',
  secretToken: '<apm-token>',
  serverUrl: '<apm-server-url>',
  logLevel: 'debug',
  serviceVersion: '0.1',
});

module.exports = apm;
