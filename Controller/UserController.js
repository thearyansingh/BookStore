import User from "../Modal/UserModal.js";
import bcrypt from "bcrypt"
export const signUp=async(req,res)=>{
try {
    const {fullname,email,password}=req.body;  // sending data to body
   
    const user = await User.findOne({ email }); // Make sure to use await for asynchronous calls
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const saltround=10;
    const hashPassword=await bcrypt.hash(password,saltround);
    const createdUser=new User({
        fullname,
        email,
        password:hashPassword
    })
   await createdUser.save()   // to save the data to the database
    const created = await User.findOne({email});
    res.status(200).json(created);
    // res.status(201).json({message:"user created successfully"})
} catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({message:"internal service error"})
    
}
}  

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body; //user enter email and password 
        const user = await User.findOne({email});
           // to get the data of the user from the database
           if (!user) {
            return res.status(400).json({ message: "Invalid user" });
          }
          console.log(user)
        const isMatch= await bcrypt.compare(password,user.password)// user.password is user in database
      
       
       
        if(!isMatch){
            res.status(400).json({message:"invalid password"})
        }
        else 
        res.status(200).json({message:"login successful",user:{
    _id:user.id,
    fullname:user.fullname,
    email:user.email
    }})
    } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({message:"internal service error"})
        
    }
}