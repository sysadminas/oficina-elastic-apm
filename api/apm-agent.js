const apmNode = require('elastic-apm-node').start({
  serviceName: 'node-app',
  secretToken: '<apm-token>',
  serverUrl: '<apm-server-url>',
  logLevel: 'trace',
  serviceVersion: '0.1',
  distributedTracingOrigins: ['http://localhost:4200'],
  captureBody: true,
  captureHeaders: true,
  captureErrorLogStackTraces: 'always',
  usePathAsTransactionName: true,
  sourceLinesErrorAppFrames: 5
});

module.exports = apmNode;
