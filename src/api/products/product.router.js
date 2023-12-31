const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getProducts, getProductById, createProduct, getProductByItemId, createImport, getProductsForImport, updateSize, updatePrice } = require("./product.controller");
router.get("/", getProducts);
router.get("/import", getProductsForImport);
router.get("/:id", getProductById);
router.get("/items/:id", getProductByItemId);
router.post("/", checkToken, createProduct);
router.post("/import", checkToken, createImport);
router.put("/size/:id", checkToken, updateSize);
router.put("/price/:id", checkToken, updatePrice);
module.exports = router;