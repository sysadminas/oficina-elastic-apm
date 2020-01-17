const proxy = [
  {
    context: '/',
    target: 'http://localhost:3000'
  },
  {
    context: '/',
    target: 'https://ef5b42bf4d864adb83826a400129eb3d.apm.us-east-1.aws.cloud.es.io:443'
  },
];
module.exports = proxy;