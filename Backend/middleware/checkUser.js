import jwt from 'jsonwebtoken';

const checkUser=(req,res,next)=>{
    const t=req.headers.authorization;
    if (!t){
        return res.status(401).json({message:"token not found"});    
    }
    try {
       const checkToken=jwt.verify(t.split(' ')[1],process.env.SECRET_CODE);
       req.user = { userId: checkToken.userId };
       next()
    }
    catch(e){
   return res.status(401).json({message:'Invalid Token'})
    }
}

export default checkUser;