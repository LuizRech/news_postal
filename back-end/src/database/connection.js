const knex = require('knex');
const configuration = require('../../knexfile');

const config = knex(configuration.development);

module.exports = config;

