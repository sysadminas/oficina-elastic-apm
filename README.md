<a name="HOLTitle"></a>

# 🚀 Oficina Elastic APM

<a name="Overview"></a>

## Visão Geral ##

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

Como já foi dito anteriormente, o APM monitora a performance da aplicacāo, incluindo métricas de infraestrutura e serviços. Através dele é possível ver tudo que aconteceu na sua aplicaçāo, de ponta a ponta, isso é muito útil quando se quer entender como os serviços interagem entre si, quantos recursos eles consomem e quais sao os gargalos existentes na aplicaçāo como um todo.

### Objetivos ###

Neste laboratório prático, você aprenderá como preparar o seu ambiente de laboratório utilizando a Elastic Cloud com os principais elementos do Elastic Stack (Elasticsearch, Kibana e APM Server) e depois fará a instrumentação do agente de APM para .NodeJs em uma aplicação.

### Pré-requisitos ###

O seguinte é necessário para completar este laboratório prático

- Um computador com acesso a internet
- Sistema Operacional Windows ou Linux

### Próximos passos ###

1. [Criar sua instancia na Elastic CLoud](https://github.com/sysadminas/oficina-elastic-apm/blob/master/lab/elastic-cloud.md)


Autoras: [@thebeaoliveira](https://github.com/thebeaoliveira), [@valescaf](https://github.com/valescaf) e [@marylly](https://github.com/marylly)

