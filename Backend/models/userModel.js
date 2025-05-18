import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,   
  },
  avatar:{
    type:String,  
  },
  channels:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Channel'
  }]

})

const User= mongoose.model('User',userSchema);
export default User;