import roomModel from './room.model.js';
import globalService from '../utils/globalService.js';
import userModel from '../user/user.model.js';
import mongoose from 'mongoose';
const GlobalService = new globalService();

class Service {
    constructor() {}

    async createRoom(header, body) {
        //get user id
        const id = GlobalService.getUser(header);
        //create new room
        const newRoom = await roomModel.create({
            name: body.name,
            description: body.description,
            creatorID: id,
            members: id,
        });
        //update room field inside user model
        const user = await userModel.updateOne(
            { _id: id },
            { $push: { rooms: newRoom._id } }
        );
    }
    async deleteRoom() {}
    async addMember() {}
    async getRoomDetails() {}
}
export default Service;
