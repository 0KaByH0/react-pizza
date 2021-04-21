const { static } = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({ static: './build' });

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log('JSON Server running');
});
