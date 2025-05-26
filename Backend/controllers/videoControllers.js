import Video from '../models/videoModel.js'
import Channel from '../models/channelModel.js'
import Comment from '../models/commentModel.js';
export const uploadVideo=async(req,res)=>{
    try{
        const { title, thumbnailUrl, videoUrl, description, channelId, category } = req.body;
        const uploaderId = req.user.userId;
        const newVideo=new Video({title, thumbnailUrl, videoUrl, description,channel: channelId,uploader: uploaderId,category})
        const v=await newVideo.save();
        await Channel.findByIdAndUpdate(channelId,{
            $push:{videos:v._id}
        });
        res.status(201).json(v);
    }
    catch(e){
        res.status(500).json({ message: 'failed....To Upload', error: e.message });

    }
};



export const getVideos=async(req,res)=>{
    try {
         const videos=await Video.find().populate('channel', 'channelName').populate('uploader', 'name avatar');
         res.json(videos)
    }catch(e){
         res.status(500).json({message:"failed...To fetch videos ",error: e.message})
    }
};  

 export const getVideoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const video=await Video.findById(id)
        .populate('channel uploader', 'channelName username')
        .populate({
        path: 'comments',
        populate: {
          path: 'userId',
          select: 'username'
        }
         });
        if (!video){
            return res.status(404).json({message:"Video Not Found"})           
        }
        res.json(video);

    }catch(e){
     res.status(500).json({message:"Error... While fetching video",error: e.message})
    }
};

export const deleteVideo=async(req,res)=>{
    try{
        const Id=req.params.id;
       
        const video=await Video.findById(Id);
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }
       
        await Comment.deleteMany({ _id: { $in: video.comments } });


        await video.deleteOne()
        res.json({ message: 'Video deleted' });

    }catch(e){
        res.status(500).json({ message: 'Error.... while deleting video',error:e.message });

    }
};

