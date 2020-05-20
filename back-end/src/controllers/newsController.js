const connection = require('../database/connection');

module.exports = {
    async listNews(request, response){
       const dados =  await connection('news')
                            .select('*')
                            .orderBy('created_at', 'desc');

        return response.json(dados);
    }
}