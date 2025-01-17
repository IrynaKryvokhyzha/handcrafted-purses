import express from "express";

import authRoutes from "./authRoutes.mjs";
import userRoutes from "./userRoutes.mjs";
import productRoutes from "./productRoutes.mjs";
import cartRoutes from "./cartRoutes.mjs";
import contactRoutes from "./contactRoutes.mjs";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/contact", contactRoutes);

export default router;
