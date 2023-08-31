import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const Userexist = User.findOne({ email: req.body.email });
    if(Userexist.email == req.body.email) {
      console.log("User already exists");
      return res.status(401).json({ message: "User already exists" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    console.log("User signed up successfully");
    res.status(200).json({ message: "User signed up successfully" });
  } catch (err) {
    console.log("Error while signup");
    console.log(err.message);
  }
};

export const signin = async (req, res) => {
    try{
      const Loginemail = req.body.email;
      const Loginpassword = req.body.password;

      let user = await User.findOne({email: Loginemail, password: Loginpassword});
      if(user==null){
        console.log("User does not exist");
        res.status(401).json({message: "User does not exist"});
        return; 
      }
      console.log("User signed in successfully");
      res.status(200).json({message: "User signed in successfully", userId: user.id, userName: user.firstname});
    }catch(err){
        console.log("Error while Login");
        console.log(err.message);
    }
};