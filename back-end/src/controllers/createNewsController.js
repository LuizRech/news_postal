const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { title, resume, new_content, author } = request.body;

        connection('news').insert({
            title: title,
            resume: resume,
            new_content: new_content,
            author: author
        }).returning('id').then(function (id) {
            return response.json("id: "+ id);
        });
    }
}
