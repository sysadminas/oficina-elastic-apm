'use strict';

const Hapi = require('@hapi/hapi');

const apm = require('./apm-agent');
const logger = require('./logging');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route([
    {
      method: 'GET',
      path: '/hello',
      handler: () => {
        apm.addLabels({ 'request-url': '/hello' });
        apm.setUserContext({
          id: 12345,
          username: 'test-user',
          email: 'test-user@rapido.bike',
        });
        return 'Hello World!';
      },
    },
    {
      method: 'GET',
      path: '/byebye',
      handler: () => 'Bye bye',
    },
  ]);

  await server.start();
  logger.log({
    level: 'info',
    message: `Server running on  ${server.info.uri}`,
    meta: { server: server.info.uri },
  });
};


process.on('unhandledRejection', (err) => {
  logger.log({
    level: 'error',
    message: err,
  });

  process.exit(1);
});

init();
