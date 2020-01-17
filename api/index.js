'use strict';

const apm = require('./apm-agent');
const logger = require('./logging');

const Hapi = require('@hapi/hapi');
const uuid = require(`uuid`);

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: { origin: ['*'],
              additionalHeaders: [
              'Access-Control-Allow-Origin',
              'Access-Control-Request-Method',
              'Allow-Origin',
              'Origin',
              'access-control-allow-origin',
              'access-control-request-method',
              'allow-origin',
              'origin',
              'Accept',
              "Authorization",
              "Content-Type",
              "If-None-Match",
              "Accept-language"
          ]
        }
      }
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
        return h.response('Hello World =]')
                .header('Access-Control-Allow-Origin', 'http://localhost:4200')
                .header('x-correlation-id', correlationId)
                .header('origin', 'http://localhost:4200');
      },
    },
    {
      method: 'GET',
      path: '/byebye',
      handler: (request, h) => {
        const correlationId = request.headers['x-correlation-id'] || uuid.v4();
        return h.response('Bye bye *-*')
                .header('Access-Control-Allow-Origin', 'http://localhost:4200')
                .header('x-correlation-id', correlationId)
                .header('origin', 'http://localhost:4200');
      }
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
