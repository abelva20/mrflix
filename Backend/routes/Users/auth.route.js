import express from "express";
import { authCheck, login, logout, signup } from "../../controller/Users/auth.controller.js";
import { middleware } from "../../middleware/protectRoutes.js";

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.get('/auth', middleware, authCheck)

export default router;