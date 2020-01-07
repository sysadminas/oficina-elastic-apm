'use strict';

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
      handler: () => 'Hello World!',
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
