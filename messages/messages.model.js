import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    roomID: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    },
    isFlagged: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    editedAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Message', messageSchema);
