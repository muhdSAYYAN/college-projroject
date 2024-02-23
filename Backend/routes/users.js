import express from "express"
import { blockUsers, deleteUser, getAllSellers, getAllUsers, getBlockedlist, unBlockUsers } from "../controllers/user.js";



const router = express.Router();


router.get("/getAllUsers", getAllUsers);
router.get("/getAllSellers", getAllSellers);
router.put("/blockUsers/:userId", blockUsers);
router.get("/blockedlist", getBlockedlist);
router.put("/unblock/:userId", unBlockUsers);
router.delete("/deleteUser/:userId", deleteUser);

export default router;