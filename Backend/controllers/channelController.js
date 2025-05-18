import Channel from "../models/channelModel.js";
import User from "../models/userModel.js";

export const createChannel=async(req,res)=>{
    try{
       const {channelName,description,channelBanner} = req.body;
       const ownerId=req.user.userId;
       const newChannel=new Channel({
        channelName, description,channelBanner,owner:ownerId
       })
       const ch=await newChannel.save();
       await User.findByIdAndUpdate(ownerId,{
        $push:{channels:ch._id}
       });
       res.status(201).json(ch)
    }
    catch(e){
       res.status(500).json({message:"Failed...Channel not created",error:e.message});
    }
}

export const getChannel=async(req,res)=>{
    try {
    const chId=req.params.id
     const channel=await Channel.findById(chId).populate('videos');
     if (!channel){
        return res.status(404).json({messags:"channel not found"});

     }
     res.json(channel);
    }
    catch(e){
   res.status(500).json({message:"Error while fetching",error:e.message});
    }
}