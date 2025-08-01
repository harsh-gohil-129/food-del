import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrder,
  placeOrder,
  updateStatus,
  userOrder,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrder);
orderRouter.get("/list", listOrder);
orderRouter.post("/status", updateStatus);

export default orderRouter;
