import Fastify from 'fastify';
import { setupSocket } from './socket.js';

export function buildServer() {
  const app = Fastify();
  setupSocket(app);
  return app;
}
