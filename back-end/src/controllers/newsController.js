const connection = require('../database/connection');

module.exports = {
    async listNews(request, response){
       const dados =  await connection('news').select('*');

        return response.json(dados);
    }
}