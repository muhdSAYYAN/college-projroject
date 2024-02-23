import express from "express"
import { acceptOrder, getOrder, getRecentOrder, postOrder ,shipOrder} from "../controllers/Order.js";

const router = express.Router()

router.post("/postOrder",postOrder)
router.get("/getOrder",getOrder)
router.get("/getRecentOrder",getRecentOrder)
router.put("/acceptOrder/:orderId", acceptOrder);
router.put("/shipOrder/:orderId", shipOrder);


export default router;