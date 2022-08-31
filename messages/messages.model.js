import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    roomID: {
        type: mongoose.Types.ObjectId,
        ref: 'room',
    },

    room: {
        type: mongoose.Types.ObjectId,
        ref: 'room',
    },
    isFlagged: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    editedAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('message', messageSchema);
