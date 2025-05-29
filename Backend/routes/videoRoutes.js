import express from 'express';
import {uploadVideo,getVideos,getVideoById,deleteVideo,disLikeFun,likeFun} from '../controllers/videoControllers.js';

import checkUser from '../middleware/checkUser.js' ; 
const router=express.Router();

router.get("/",getVideos);
router.get("/:id",getVideoById);
router.post("/",checkUser,uploadVideo)
router.delete("/:id",deleteVideo) ; 
router.put('/dislike/:id',disLikeFun);   
router.put('/like/:id',likeFun);

export default router;