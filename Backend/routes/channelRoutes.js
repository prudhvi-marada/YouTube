import express from 'express';
import { createChannel,getChannel,getChannelByUserId } from '../controllers/channelController.js';
import checkUser from '../middleware/checkUser.js';
const router=express.Router();

router.get("/:id",checkUser,getChannel);
router.post("/create",checkUser, createChannel)
router.get('/user/:userId', getChannelByUserId);


export default router;