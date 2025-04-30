const express = require("express");
const router = express.Router();
const { categoryModel, validateCategory } = require("../models/category");
const { validateAdmin } = require("../middlewares/admin");
const { productModel } = require("../models/product");

router.post("/create", validateAdmin, async function (req, res) {
  let category = await categoryModel.create({
    name: req.body.name,
  });

  const resultArray = await productModel.aggregate([
    {
      $addFields: {
        normalizedCategory: { $toLower: { $trim: { input: "$category" } } }, // Normalize category
      },
    },
    {
      $group: {
        _id: "$normalizedCategory", // Group by the normalized category field
        products: { $push: "$$ROOT" },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id", // Rename '_id' to 'category'
        products: { $slice: ["$products", 10] },
      },
    },
  ]);

  // Convert the resultArray into an object for easier rendering
  const products = resultArray.reduce((acc, item) => {
    acc[item.category] = item.products;
    return acc;
  }, {});

  res.render("index", { products, rnproducts, somethingInCart, cartCount });
});

module.exports = router;
