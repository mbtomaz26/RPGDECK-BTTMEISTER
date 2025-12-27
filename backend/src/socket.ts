import { Server } from 'socket.io';
import { FastifyInstance } from 'fastify';
import { roomState } from './state/roomState.js';

export function setupSocket(app: FastifyInstance) {
  const io = new Server(app.server, { cors: { origin: '*' } });

  io.on('connection', socket => {
    socket.emit('state:init', roomState);

    socket.on('token:move', data => {
      roomState.tokens[data.id] = data.position;
      io.emit('token:update', data);
    });

    socket.on('chat:message', msg => {
      io.emit('chat:message', msg);
    });

    socket.on('dice:roll', roll => {
      io.emit('dice:result', roll);
    });
  });
}
