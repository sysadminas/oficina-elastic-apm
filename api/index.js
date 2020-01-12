'use strict';

const apm = require('./apm-agent')

const Hapi = require('@hapi/hapi');

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
        apm.addLabels({"request-url": "/hello"});
        apm.setUserContext({
            id: 12345,
            username: "test-user",
            email: "test-user@rapido.bike"
        })
        return 'Hello World!'
      },
    },
    {
      method: 'GET',
      path: '/byebye',
      handler: () => 'Bye bye',
    },
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
