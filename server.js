import * as dotenv from 'dotenv';
dotenv.config();
// import adminController from './admin/admin.controller.js';
import roomController from './room/room.controllers.js';
import userController from './user/user.controller.js';
import messageController from './messages/message.controller.js';
import App from './app.js';
import './lib/db/mongoCon.js';
import './lib/db/redisCon.js';
import './sockets/socket.service.js';
let a = {};
a.$match = { $match: {}, $unwind: {} };
console.log('step 1: ', a);

const app = new App([
    new roomController(),
    new messageController(),
    // new adminController(),
    new userController()
]);

app.listen();
