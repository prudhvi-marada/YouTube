import jwt from 'jsonwebtoken';

const checkUser=(req,res,next)=>{
     const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_CODE);
    req.user = { userId:decoded.userId }; //  Needed for createChannel
    next();
  } catch (e) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
 
export default checkUser;