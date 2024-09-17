import { User } from "../../models/usersData.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../../util/generateToken.js";

export async function signup(req, res) {
    try {
        const { username, email, password } = req.body;
        if(!email || !password || !username) {
            return res.status(400).json({
                seccess:false,
                message: "All fields are required"
            });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }
        if(password.length < 8){
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const existingEmail = await User.findOne({email:email});
        if(existingEmail){
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }
        
        const existingusername = await User.findOne({username:username});
        if(existingusername){
            return res.status(400).json({
                success: false,
                message: "Username already exists"
            });
        }
        const PROFILE_PIC = ["Backend/Asset/ben-sweet-2LowviVHZ-E-unsplash.jpg", "Backend/Asset/david-becker-crs2vlkSe98-unsplash.jpg", "Backend/Asset/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg"]
        const randomProfilePic = PROFILE_PIC[Math.floor(Math.random() * PROFILE_PIC.length)];
        
        const newUsername = new User({
            username:username,
            email:email,
            password:hashedPassword,
            image: randomProfilePic
        });
        
        generateToken(newUsername._id, res)
        await newUsername.save();
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...newUsername._doc,
                password:""
            }
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });

    }
};

export async function login(req, res) {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "email not found"
            });
        }
        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Password or Email is incorrect"
            });
        }

        generateToken(User._id, res);

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...user._doc,
                password: ""
            }
        });


    } catch (error) {
        console.log("error in login field", error.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
        
    }
};

export async function logout(req, res) {
    try {
        res.clearCookie("auth-token");
        res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

export async function authCheck(req, res) {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        })
    } catch (error) {
        console.log("error in authCheck", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}