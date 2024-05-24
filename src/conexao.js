const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '2808',
        database: 'exercicio_query_builder'
    }
});
module.exports = knex;