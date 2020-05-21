const express = require('express');
const { Joi, celebrate, Segments, errors } = require('celebrate');

const router = express.Router();

const indexController = require('./controllers/IndexController');
const newsController = require('./controllers/newsController');
const newsDetailController = require('./controllers/newsDetailController');
const createNewsController = require('./controllers/createNewsController');

router.get('/', indexController.listLastFiveNews);

router.get('/news', newsController.listNews);

router.get('/news_detail/:id', newsDetailController.newsDetail);

router.post('/create_news', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().max(100),
        resume: Joi.string().required().max(150),
        new_content: Joi.string().required().max(2500),
        author: Joi.string().required().max(25)
    })
}),  createNewsController.create);


router.use(errors());

module.exports = router; 