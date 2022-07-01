module.exports = (app) => {
  var Company = require('../controller/Company');
  var router = require('express').Router();
  var cors = require('cors');
  router.post('/', Company.create);
  router.get('/', Company.findall,cors());
  router.get('/search', Company.search);
  router.get('/:id', Company.findone);
  router.delete('/:id', Company.delete);
  router.patch('/:id', Company.update);

  app.use('/companys', router);
};
