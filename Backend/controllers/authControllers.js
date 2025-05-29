import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser=async(req,res)=>{
    try{
        const {name,email,password,avatar}=req.body;
        const checkUser=await User.findOne({email});
        if (checkUser){
            return  res.status(400).json({message:"user already exits try another mail"})
        }
        const hpassword=await bcrypt.hash(password,10);
        const user=new User({name,email,password:hpassword,avatar});
        await user.save();
       res.status(201).json({message:"user registerd successfully"})
    }
    catch(e){
    res.status(500).json({message:"server error",error:e.message})
    }
}

export const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;        
        const user=await User.findOne({email});
        if (!user){
            return res.status(404).json({message:"user not found"})
        }
        const check=await bcrypt.compare(password,user.password);
        if (!check){
            res.status(400).json({message:"invalid email or password"});

        }
        const t=jwt.sign({userId:user._id},process.env.SECRET_CODE,{expiresIn:'365d'});
        res.json({
            token:t,
            user:
            {
                id:user._id,
                name:user.name,
                email:user.email,
                avatar:user.avatar
        }})
    }
    catch(e){
        res.status(500).json({message:"server error",error:e.message})
    }
};       

