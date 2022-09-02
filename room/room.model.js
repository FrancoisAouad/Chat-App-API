import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No Description..'
    },
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    messages: {
        type: mongoose.Types.ObjectId,
        ref: 'Message'
    },

    coOwners: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    report: {
        type: Number,
        default: 0
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Room', roomSchema);
