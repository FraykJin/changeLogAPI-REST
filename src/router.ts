import { Router } from "express";
import { body, validationResult } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./controllers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./controllers/update";
import { createUpdatePoint, deleteUpdatePoint, getOneUpdatePoint, getUpdatePoints, updateUpdatePoint } from "./controllers/updatepoint";
import { handleInputErrors } from "./utils/middleware";

const router = Router();

// Product
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put("/product/:id",
  body('name').isEmail(), 
  handleInputErrors, 
updateProduct);
router.post("/product", body('name').isString() , handleInputErrors ,createProduct);
router.delete("/product/:id", deleteProduct);

// Update
router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);

router.put("/update/:id", 
  body('title').optional(),
  body('body').optional(), 
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']), 
  body('version').optional(),
updateUpdate
);
router.post("/update", 
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),
createUpdate);
router.delete("/update/:id", deleteUpdate);

// Update Point
router.get("/updatepoint", getUpdatePoints);
router.get("/updatepoint/:id", getOneUpdatePoint);
router.put("/updatepoint/:id", 
  body('name').optional().isString(),
  body('description').optional().isString(),
  handleInputErrors,
updateUpdatePoint);
router.post("/updatepoint", 
  body('name').exists().isString(),
  body('description').exists().isString(),
  handleInputErrors,
createUpdatePoint);
router.delete("/updatepoint/:id", deleteUpdatePoint);

export default router;
