import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });

    res.cookie("auth-token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true,
        sameSite:"strict",
        secure: ENV_VARS.NODE_ENV !== "development",
    });
    return token;
}