import mongoose from 'mongoose';
const commentSchema=new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
    required: true,
  },
  text: {
    type: String,
    required: true, 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },

})

const Comment=mongoose.model('Comment',commentSchema);
export default Comment;