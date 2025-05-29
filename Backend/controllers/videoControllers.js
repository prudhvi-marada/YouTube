import Video from '../models/videoModel.js'
import Channel from '../models/channelModel.js'
import Comment from '../models/commentModel.js';
const userVideoAction = {};
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
        .populate('channel', 'channelName').populate('uploader','name avatar')
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

export const likeFun=async(req,res)=>{
   const { videoId, userId } = req.body;
  if (!userId) return res.status(400).json({ message: 'User ID required' });

  const key = `${userId}:${videoId}`;
  const action = userVideoAction[key];

  try {
    let update = {};

    if (action === 'like') {
      // Remove like
      update = { $inc: { likes: -1 } };
      delete userVideoAction[key];
    } else {
      // Add like
      update = { $inc: { likes: 1 } };
      if (action === 'dislike') {
        update.$inc.dislikes = -1;
      }
      userVideoAction[key] = 'like';
    }

    const updatedVideo = await Video.findByIdAndUpdate(videoId, update, { new: true });
    res.status(200).json({
      likes: updatedVideo.likes,
      dislikes: updatedVideo.dislikes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

export const disLikeFun=async(req,res)=>{
  
    const { videoId, userId } = req.body;
  if (!userId) return res.status(400).json({ message: 'User ID required' });

  const key = `${userId}:${videoId}`;
  const action = userVideoAction[key];

  try {
    let update = {};

    if (action === 'dislike') {
      update = { $inc: { dislikes: -1 } };
      delete userVideoAction[key];
    } else {
      update = { $inc: { dislikes: 1 } };
      if (action === 'like') {
        update.$inc.likes = -1;
      }
      userVideoAction[key] = 'dislike';
    }

    const updatedVideo = await Video.findByIdAndUpdate(videoId, update, { new: true });
    res.status(200).json({
      likes: updatedVideo.likes,
      dislikes: updatedVideo.dislikes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};


