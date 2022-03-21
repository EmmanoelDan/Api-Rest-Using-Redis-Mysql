# Api-Rest-Using-Redis-Mysql
Api em desenvolvimento, que cria um usuario e cria rota de login

# Install Mysql com docker

Para instalar o mysql no seu docker, precisa ir diretamente no site do docker hub. Onde encontramos a imagem necessaria para criar nosso container

-Utilizamos o mariadb

Instalando a imagem no docker

 **sudo docker pull mariadb**
 
 Criando um docker do mariadb
 
 **docker run --detach --name some-mariadb --env MARIADB_USER=example-user --env MARIADB_PASSWORD=my_cool_secret --env MARIADB_ROOT_PASSWORD=my-secret-pw  mariadb:latest**
 
Agora nosso container ja esta criado e rodando em nossa maquina, para verificarmos e so digitar o seguinte comando:
**sudo docker ps**

![image](https://user-images.githubusercontent.com/63883466/159366612-027540ca-af5c-42c3-9bd0-a80e41d47f32.png)

a imagem mostra seus containers, se ele realmente esta funcionando e so verificar o estatus. Se estiver stop, entao seu container nao executou.
Para executar, e so pegar o id do container e dar o seguinte comando **docker start <id_do_container>**

# Criando minha database do docker

Para a criar minha database, eu utilizei o workbench. Vou deixar em baixo o tutorial que segui.

https://www.youtube.com/watch?v=qa7SWCozY_A&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=6 & https://www.youtube.com/watch?v=Ra-1ZB6vYlw&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=7

# Bibliotecas & versoes

bcrypt - "^5.0.1"
body-parser - "^1.19.2"
express - "4.17.3"
jsonwebtoken - "^8.5.1"
morgan - "^1.10.0"
mysql - "^2.18.1"
nodemon - "^2.0.15"
redis - "^3.1.2"

# Inciando nossa api

Para iniciar a api, primeiro instalei as dependencias que precisaria no projeto.
Onde criamos nosso servidor com express:

![image](https://user-images.githubusercontent.com/63883466/159368243-1f3fc5a9-d07b-48c8-90b2-0d5f42a5b0d1.png)

Nesse projeto, o intuito e aprendizagem. Entao os requisitos era a cricao de 5 rotas principas:

***Rota POST /users - Essa rota e responsavel, em persistir os dados no docker MYSQL***
***Rota POST /users/login - Essa rota e reponsavel em fazer o login dos usuarios cadastrados no Banco de dados;***

***Rota GET/users - Essa rota mostra todos meus dados do banco de dados***

Criamos duas rotas para armazenar nossas requisicoes no REDIS:

***Rota POST/redis - Persisti os dados de usuario em um banco de dados REDIS***
***Rota POST/redis/login - Faz o login dos usuarios, cadastrados no REDIS***

OBS: Nao vou da detalhes, de instalacao do redis. Pois, no meu repositorio anterior tenho todos os passos la.

# Melhorias a serem desenvolvidas

01 - Melhorar a estrutura do projeto, utilizando de scripts mais limpos;
02 - Implementar Testes unitarios;
03 - Implementar documentacao com Swagger;
04 - Tratamento de erros.

# Consideracoes Finais

A Api tem muito que melhorar, estou no inicio da minha carreira dev, e ja vejo que preciso muito melhorar minha logica e meus scripts.
A rota de login Redis ainda esta em desenvolvimento, estou com dificuldades. Qualquer ajuda estou aqui!



