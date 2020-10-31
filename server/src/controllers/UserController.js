const knex = require('../database');

module.exports = {
    async index(req, res) {

        // traz usuarios que não foram deletados
        const results = await knex('users')
            .where('deleted_at', null) // trazer usuarios que o tipo deletado seja = a null

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { username } = req.body;
            // Insere na tabela users
            await knex('users').insert({ username })

            return res.status(201).send()
        } catch {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            // Onde o usuario tiver o id, ele vai atualizar
            const { username } = req.body;
            const { id } = req.params;
            // Atualizar dados na tabela users
            await knex('users').update({ username }).where({ id })

            return res.send()
        } catch {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            // Atualizar dados na tabela users
            await knex('users')
                .where({ id })
                .update('deleted_at', new Date())
            // .del()

            return res.send()
        } catch {
            next(error)
        }
    }
}