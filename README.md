<a name="HOLTitle"></a>

# 🚀 Oficina Elastic APM

<a name="Overview"></a>

## Você já ouviu falar sobre observabilidade? ##

A observabilidade tem como base, três elementos que compoe sua estrutura:

- Logs 

Os logs sāo registros que sua aplicaçāo ou serviços geram, por exemplo, sua aplicaçāo pode retornar um status http 500 e essa informaçāo vai servir para que você entenda que algo deu errado com aquela transaçāo devido ao status http que ela retornou. 

- Métricas 

As métricas sāo um agrupamento de registros de log, por exemplo, se apenas 1 usuário recebeu status http 500 em 10 minutos ao tentar fazer uma transaçāo, isso nao me diz muita coisa, mas e se 100 usuários receberam esse status nesse mesmo período, será que isso nāo pode ser um indicador de falha na minha aplicacāo?

SIM, pode!

Além disso, outros pontos podem ser usados como métricas como nos últimos 3 minutos o consumo de CPU do meu host foi 30%.

- APM 

O Application Performance Monitoring (APM) tem como principal característica a monitoraçāo da performance da aplicaçāo, como o próprio nome já diz, mas na prática o que isso quer dizer?

É isso que vamos aprender nesse lab!


## O que é o Elastic APM? ##

Como já foi dito anteriormente, o APM monitora a performance da aplicacāo, incluindo métricas de infraestrutura e serviços. Através dele é possível ver tudo que aconteceu na sua aplicaçāo, de ponta a ponta, isso é muito útil quando se quer entender como os serviços interagem entre si, quantos recursos eles consomem e quais sao os gargalos existentes na aplicaçāo como um todo.

## Como configurar o monitoramento com Elastic APM?

Configurar a aplicação para enviar os dados de monitoramento para o Elastic APM é o que chamamos de instrumentação, que consiste em configurar um agente utilizado para enviar os dados de monitoramento para o Elastic APM. Este agente é uma biblioteca que deve ser instalada na sua aplicação. A Elastic disponibiliza suporte para várias linguagens para fazer isso sendo elas:

* Go (Golang)
* Java
* Javacript
* .Net
* Node.js
* Python
* Ruby

Nesta nossa oficina vamos utilizar os agentes para Node.JS e Javascript.

## Tech Stack do Lab
Criamos uma aplicação simples com uma API e um Frontend:

### API
  - Node.JS v13.5
  - Hapi.JS v18.4

### Frontend
  - Angular CLI v8.3

## Configuração dos Agentes

Vamos precisar de um agente para a API e outro para o Frontend.

## Agente da API Node
Para configurar o agente na API, é necessário instalar a biblioteca para o Node.JS conforme abaixo:
```
npm i elastic-apm-node --save
```
Após a instalação, implementamos o agente na interface principal do serviço da API, no nosso lab foi criado um arquivo `apm-agent.js` com o seguinte conteúdo:

```
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
```
Lembrando de substituir o conteúdo do campo `secretToken` pelo token de autenticação do seu servidor e o conteúdo do campo `serverUrl` pela url do servidor do Elastic APM disponível no Elastic Cloud. Com essas informações, sua aplicação já será monitorada em qualquer chamada feita na API. Depois disso alteramos nosso serviço da API para utilizar o nosso agente nas requisições aos endpoints.
No começo do arquivo no import das dependência, antes de qualquer comando require, adicione o comando abaixo:
```
const apm = require('./apm-agent');
```
Isso já efetua o monitoramento da nossa API, mas podemos determinar algumas informações para fazer um monitoramento com mais contexto, principalmente para troubleshottig de erros na aplicação, então no handler do endpoint `\byebye` vamos enriquecer com informações os dados de monitoramento:
```
apm.addLabels({ 'request-url': '/byebye' });
apm.setUserContext({
  id: correlationId,
  username: 'test-user',
  email: 'test-user@rapido.bike',
});
```
Pronto, agora é só iniciar nossa API com o seguinte comando:
```
npm run start-api
```

## Agente do Frontend Angular
Para configurar o agente no Frontend, é necessário instalar a biblioteca para o Angular.JS conforme abaixo:
```
npm i @elastic/apm-rum-angular --save
```
Após a instalação, implementamos o agente na interface principal do serviço da Aplicação Angular, sendo colocado no arquivo `/ui/src/app/app.module` os seguintes pedaços de código:

Nos imports, adicione o seguinte:
```
import { ApmService } from '@elastic/apm-rum-angular';
```
Inclua esse serviço nas dependências da sua aplicação como um `provider`:
```
@NgModule({
  declarations: [ ... ],
  imports: [ ... ],
  providers: [
    ByebyeService,
    { provide: ApmService, useClass: ApmService, deps: [Router] }
  ],
  bootstrap: [AppComponent]
})
```
Depois adicione a inicialização do serviço do APM na classe `AppModule`:
```
constructor(@Inject(ApmService) service: ApmService) {
    const apm = service.init({
      serviceName: 'angular-app',
      secretToken: '<apm-token>',
      serverUrl: '<apm-server-url>',
      logLevel: 'trace',
      serviceVersion: '0.1',
      distributedTracingOrigins: ['http://localhost:3000'],
      captureBody: true,
      captureHeaders: true,
      captureErrorLogStackTraces: 'always',
      usePathAsTransactionName: true,
      sourceLinesErrorAppFrames: 5
    });
  }
```
Lembrando de substituir o conteúdo do campo `secretToken` pelo token de autenticação do seu servidor e o conteúdo do campo `serverUrl` pela url do servidor do Elastic APM disponível no Elastic Cloud. Com essas informações, sua aplicação já será monitorada em qualquer chamada feita no Frontend Angular.

Agora só iniciar o serviço do Frontend:
```
ng serve
```

Prontinho, agora só abrir o Dashboard no Kibana para visualizar os dados de monitoramento da sua aplicação! =]
