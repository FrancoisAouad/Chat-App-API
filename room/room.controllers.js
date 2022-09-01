import roomService from './room.service.js';
import express from 'express';
import userModel from '../user/user.model.js';
// import roomService from './room.service.js';
const RoomService = new roomService();
class Controller {
    constructor() {
        this.path = '/room';
        this.router = express.Router();
        this.initializeRoutes();
    }

    async createRoom(req, res, next) {
        try {
            await RoomService.createRoom(req.headers.authorization, req.body);
            res.status(201).json({ success: true, message: 'Room created!' });
        } catch (e) {
            next(e);
        }
    }
    async deleteRoom(req, res, next) {
        try {
            await RoomService.deleteRoom(req.headers.authorization, req.params);
            res.status(200).json({ success: true, message: 'Room deleted!' });
        } catch (e) {
            next(e);
        }
    }
    async addMember(req, res, next) {
        try {
            await RoomService.addMember(
                req.headers.authorization,
                req.params,
                req.body
            );
            res.status(200).json({
                success: true,
                message: 'user added to group!',
            });
        } catch (e) {
            next(e);
        }
    }
    async getRoomDetails(req, res, next) {
        try {
        } catch (e) {
            next(e);
        }
    }
    async getUserRooms(req, res, next) {
        try {
        } catch (e) {
            next(e);
        }
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:roomID`, this.getRoomDetails);
        this.router.post(`${this.path}`, this.createRoom);
        this.router.delete(`${this.path}/:roomID`, this.deleteRoom);
        this.router.post(`${this.path}/members/:roomID`, this.addMember);
        this.router.get(`${this.path}`, this.getUserRooms);
    }
}
export default Controller;
