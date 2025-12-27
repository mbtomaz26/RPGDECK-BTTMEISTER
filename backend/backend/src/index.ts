import { buildServer } from './server.js';

const server = buildServer();

server.listen({ port: 3001 }, () => {
  console.log('Backend rodando em http://localhost:3001');
});
