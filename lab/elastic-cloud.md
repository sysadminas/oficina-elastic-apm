## Criando seu ambiente utilizando o Elastic Cloud ##

## Objetivo ##

O Elastic Cloud é o produto da Elastic que permite aos seus usuários, criar e dimensionar ambientes de maneira prática, segura e automatizada em poucos minutos.

Nesse laboratório, você aprenderá a provisionar um ambiente com os principais componentes do Elastic Stack diretamente na Elastic Cloud.

### Criação de conta no Elastic Cloud

Abra o seu navegador e acesse o seguinte endereço: 

```
https://ela.st/womakerscode-workshop
```

### Provisionamento do ambiente

1. Clique na opção **Create Deployment**:

![](/images/image-1.png)

2. Insira o nome do seu ambiente: 

![](/images/image-2.png)

3. Escolha o provedor de serviço em nuvem e a região. 

Como opções, temos a AWS, Azure e Google Cloud.

![](/images/image-3.png)

4. Escolha a versão do Elastic Stack que você deseja utilizar, recomendamos utilizar a última versão:

![](/images/image-4.png)

4.1 No setup abaixo, existem alguns modelos de arquiteturas de soluções feitos e recomendados pela a Elastic, geralmente selecionamos o que mais nos atende, porém para começar a estudar, basta selecionar o template **I/O Optimized**, pois ele tem os recursos computacionais que precisamos para executar esse laboratório.

![](/images/image-5.png)

5. Termine o deployment clicando na opção **Create Deployment:**

![](/images/image-6.png)

6. Depois de fazer todo o processo de configuração, você receberá as credenciais de acesso ao seu ambiente, guarde elas em um local seguro, pois elas serão necessárias para realizarmos os próximos passos.

![](/images/image-7.png)

7. Depois que o ambiente for criado, você terá acesso a todas as informações referentes a ele, incluindo os endpoints de acesso ao Kibana, Elastic e APM.

![](/images/image-8.png)

