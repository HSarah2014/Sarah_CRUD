module.exports = (app) => {
  const crud = require('./controller.js');

  app.post('/user', crud.create);
  app.get('/user/:userId', crud.findOne);
  app.put('/user/:userId', crud.update);
  app.delete('/user/:userId', crud.delete);
  app.get('/user', crud.findAll);

  }