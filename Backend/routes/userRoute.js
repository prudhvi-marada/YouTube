import express from 'express';
import checkUser from '../middleware/checkUser.js';
import updateAvatar from '../controllers/userController.js'

const router=express.Router();

router.put('/avatar',checkUser , updateAvatar);


export default router;