import express from 'express';
import { createChannel,getChannel } from '../controllers/channelController.js';
import checkUser from '../middleware/checkUser.js';
const router=express.Router();

router.get("/:id",checkUser,getChannel);
router.post("/",checkUser, createChannel)

export default router;