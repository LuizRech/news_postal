const connection = require('../database/connection');

module.exports = {
    async listLastFiveNews(request, response){
       const dados =  await connection('news')
                            .select('*')
                            .orderBy('created_at', 'desc')
                            .limit(5);

        return response.json(dados);
    }
}