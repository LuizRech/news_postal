const connection = require('../database/connection');

module.exports = {
    async newsDetail(require, response){
        const dados = await connection('news').select('*').where('id', 2);

        return response.json(dados);
    }

}