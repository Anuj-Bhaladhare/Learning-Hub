const bcrypt = require("bcrypt");
const User = require("./../modals/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        console.log("boddddyyyyy", req.body);
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the required fields',
            });
        }
        //check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err) {
            return res.status(500).json({
                success:false,
                message:'Error inn hashing Password',
            });
        }

        //create entry for User
        const user = await User.create({
            fullName,
            email,
            password:hashedPassword,
        })

        return res.status(200).json({
            user: user,
            success:true,
            message:'User Created Successfully',
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({         
            success:false,
            message:'User cannot be registered, please try again later',
        });
    }
}

//login
exports.login = async (req,res) => {
    try {
        //data fetch
        const {email, password} = req.body;
        //validation on email and password
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:'PLease fill all the details carefully',
            });
        }

        //check for registered user
        let user = await User.findOne({email});
        //if not a registered user
        if(!user) {
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }

        const payload = {
            email:user.email,
            id:user._id,
        };

        const userDetails = {
            fullName: user?.fullName,
            email: user?.email,
        }
        //verify password & generate a JWT token
        if(await bcrypt.compare(password, user.password) ) {
            //password match
            let token =  jwt.sign(payload, 
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"24h",
                                });

            return res.status(200).json({
                success:true,
                message:'Login Successfull',
                token,
                userDetails
            })

        }
        else {
            //passwsord do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });

    }
}
