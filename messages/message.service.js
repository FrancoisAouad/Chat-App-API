import roomModel from '../room/room.model.js';
import globalService from '../utils/globalService.js';
import messagesModel from './messages.model.js';
import userModel from '../user/user.model.js';
import mongoose from 'mongoose';
const GlobalService = new globalService();

class Service {
    constructor() {}

    async sendMessage(header, body, params) {
        //get user id
        const id = GlobalService.getUser(header);
        const msg = await messagesModel.create({
            content: body.content,
            creatorID: id,
            roomID: params.roomID,
        });
        await roomModel.updateOne(
            { _id: params.roomID },
            { $push: { messages: msg._id } }
        );
        await userModel.updateOne(
            { _id: id },
            { $push: { messages: msg._id } }
        );
        return msg;
    }
}
export default Service;
