const connection = require('../database/connection');

module.exports = {
    async newsDetail(require, response){
        const dados = await connection('news').select('*').where('id', require.params.id);

        return response.json(dados);
    }

}