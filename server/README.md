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

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela users

exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});


exports.down = function (knex) {
    return knex.schema.dropTable('users')
};

Agora vamos criar a proxima tabela, pra isso rode

npx knex migrate:make create_table_projects

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela projects

exports.up = knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title')

    // relacionamento
    // 1 - N
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
});


exports.down = knex => knex.schema.dropTable('projects');

Agora vamos criar a proxima tabela, pra isso rode

npx knex migrate:make add_column_delete_at_to_users

Apos criar o arquivo, subistitua as infomações dele por essas, que são as descrições da tabela 

exports.up = knex => knex.schema.alterTable('users', table => {
    table.timestamp('deleted_at')
});

exports.down = knex => knex.schema.alterTable('users', table => {
    table.dropColumn('deleted_at')
});

Apos a configuração dos arquivos rode o comando a seguir para execultar a criação das tabelas

npx knex migrate:latest

No terminal com o banco de dados aberto, rode o seguinte comando para ver se as tabelas foram criadas: 
\c portal_alunos
\dt 

Para ver se os campos estao corretos rode:
\d users
\d projects


