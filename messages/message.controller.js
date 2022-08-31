import express from 'express';
import messageService from './message.service.js';
const MessageService = new messageService();
class Controller {
    constructor() {
        this.path = '/room';
        this.router = express.Router();
        this.initializeRoutes();
    }

    async sendMessage(req, res, next) {
        try {
            const result = await MessageService.sendMessage(
                req.headers.authorization,
                req.body,
                req.params
            );
            res.status(201).json({
                success: true,
                message: 'Message Sent!',
                data: result,
            });
        } catch (e) {
            next(e);
        }
    }
    initializeRoutes() {
        this.router.post(`${this.path}/:roomID`, this.sendMessage);
    }
}
export default Controller;
