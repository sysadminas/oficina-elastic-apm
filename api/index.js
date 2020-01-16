'use strict';

const Hapi = require('@hapi/hapi');
const uuid = require(`uuid`);

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
      handler: (request, h) => {
        const correlationId = request.headers['x-correlation-id'] || uuid.v4();
        apm.addLabels({ 'request-url': '/hello' });
        apm.setUserContext({
          id: correlationId,
          username: 'test-user',
          email: 'test-user@rapido.bike',
        });
        logger.log({
          level: 'info',
          message: `Hello said here with context: ${request.uuid}`,
          meta: { 'correlation-id': correlationId, path: request.path, method: request.method }
        });
        return h.response('Hello World').header('x-correlation-id', correlationId);;
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
