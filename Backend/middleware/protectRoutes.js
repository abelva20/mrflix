import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';
import { User } from '../models/usersData.js';

export const middleware = async (req, res, next) => {
    try {
        const token = req.cookies["auth-token"];
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

        if(!decoded){
            res.status(401).json({
                success: false,
                message: "Failed to authenticate token"
            });
        }

        const users = await User.findOne(decoded.userId).select("-password")

        if(!users){
            res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        req.users = users;

        next();

    } catch (error) {
        console.log("error in middleware", error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
        
    }   
}