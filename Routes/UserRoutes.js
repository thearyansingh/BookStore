import express from "express"
import { login, signUp } from "../Controller/UserController.js"
const router=express.Router();
// router.post('/',signUp);

router.post('/signUp',signUp);
router.post('/login',login);


export default router;

