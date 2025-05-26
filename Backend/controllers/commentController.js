import Comment from "../models/commentModel.js";
import Video from "../models/videoModel.js";

export const addComment=async(req,res)=>{
    try{
        const {videoId,text}=req.body;
        const userId=req.user.userId;
        const newCom=new Comment({userId,videoId,text});
        const savecom=await newCom.save();
        await Video.findByIdAndUpdate(videoId,{
            $push:{comments:savecom._id}
        });
            res.status(201).json(savecom);

    }catch(e){
            res.status(500).json({ message: 'Failed..... To add comment', error: e.message });

    }
};

export const getCommentsByVideo=async(req,res)=>{
    try{  
         const Id=req.params.videoId
         const comments = await Comment.find({videoId:Id})
      .populate('userId', 'name avatar')
      .sort({ timestamp: -1 });

    res.json(comments);

    }catch(e){
    res.status(500).json({ message: 'Failed to fetch comments', error: e.message });

    }
};

export const delComment=async(req,res)=>{
    try{
        const Id=req.params.id
        const comment=await Comment.findById(Id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (comment.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
       }

    await comment.deleteOne();
    res.json({ message: 'Comment deleted' });


    }catch(e){
     res.status(500).json({ message: 'Error...while  deleting comment', error: e.message });

    }
}
