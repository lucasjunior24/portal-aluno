# Comandos usados para rodar projeto 

Para rodar esse projeto voçê precisa ter instalado no seu computador o nodeJS e banco de dados postgreSQL. 
LINK para instalção.

Dentro da pastar "server" rode os sequintes comandos, para as instalar depedencias

npm i

npm start

Com o servidor rodando sera necessario criar um banco de dados
acesse no seu terminal e rode o comando a seguir para criar banco de dados
PSQL -U postgres

dentro do postgres rode o comando parar criar o banco bacalhau
OBS: o banco tem que ter esse nome

CREATE DATABASE portal_alunos;

Para ver se o banco foi criado, rode no terminal: \l
Com o banco rodando ja sera possivel criar as tabelas do banco, para criar a primeira tabela, rode o comando

npx knex migrate:make create_table_users