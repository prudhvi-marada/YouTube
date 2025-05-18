import express from 'express';
import { addComment,delComment,getCommentsByVideo } from '../controllers/commentController.js';
import checkUser from '../middleware/checkUser.js';

const router=express.Router();

router.post("/",checkUser,addComment);
router.get("/:videoId",getCommentsByVideo);
router.delete("/:id",checkUser,delComment);

export default router;