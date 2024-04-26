import { io } from 'socket.io-client';

const SERVER_ENDPOINT = 'http://localhost:3000';
const autoConnect = true;

export const socket = io(SERVER_ENDPOINT, {
  autoConnect,
});
