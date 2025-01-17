import express from "express";
import CartController from "../controllers/cartController.mjs";
import ProductController from "../controllers/productController.mjs";

const router = express.Router();

router.get("/", CartController.getCartDetails);
router.get("/:id", ProductController.getById);
router.post("/", CartController.addProduct);
router.put("/", CartController.updateProductAmount);
router.delete("/", CartController.deleteProduct);

export default router;
