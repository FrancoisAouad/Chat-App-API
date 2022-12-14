import * as dotenv from 'dotenv';
dotenv.config();
// import adminController from './admin/admin.controller.js';
// import categoryController from './categories/category.controller.js';
// import notesController from './notes/notes.controller.js';
import roomController from './room/room.controllers.js';
import userController from './user/user.controller.js';
import messageController from './messages/message.controller.js';
import App from './app.js';
import './lib/db/mongoCon.js';
import './lib/db/redisCon.js';
import './sockets/socket.service.js';
const app = new App([
    new roomController(),
    new messageController(),
    // new adminController(),
    // new categoryController(),
    // new notesController(),
    new userController(),
]);

app.listen();
