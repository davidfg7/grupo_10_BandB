const express = require("express");
const router = express.Router();

const productListController = require("../controllers/productListController")

router.get('/', productListController.productList)

module.exports = router;