import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: 'No Description..',
    },
    members: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        },
    ],
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    messages: {
        type: mongoose.Types.ObjectId,
        ref: 'message',
    },

    coOwners: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        },
    ],
    report: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model('room', roomSchema);
