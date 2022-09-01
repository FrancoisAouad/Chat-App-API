// import roomModel from './room.model.js';
import globalService from '../utils/globalService.js';
import userModel from '../user/user.model.js';
import roomModel from './room.model.js';
import mongoose from 'mongoose';
import error from 'http-errors';
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
            members: id
        });
        //update room field inside user model
        await userModel.updateOne({ _id: id }, { $push: { rooms: newRoom._id } });
    }
    async deleteRoom(header, params) {
        const id = GlobalService.getUser(header);
        const exists = await roomModel.findOne({
            _id: params.roomID,
            creatorID: id
        });
        if (!exists) throw error.NotFound('Room not found...');
        await roomModel.deleteOne({
            _id: params.roomID,
            creatorID: id
        });
        console.log(exists);
    }
    async addMember(params, body) {
        // const id = GlobalService.getUser(header);
        const addedUser = await findOne({ _id: body });
        if (!addedUser) throw error.NotFound('user not found..');
        await userModel.updateOne({ $addToSet: { rooms: params.roomID } });
        await roomModel.updateOne({ $addToSet: { members: addedUser._id } });

        // await roomModel.
    }
    async getRoomDetails() {}
}
export default Service;
