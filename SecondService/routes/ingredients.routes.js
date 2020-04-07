const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const Ingredient = require("../models/Ingredient");

router.post(
  "/add",
  [
    check("name", "Error name").isString(),
    check("calories", "Error calories").isNumeric(),
    check("squirrels", "Error squirrels").isNumeric(),
    check("fats", "Error fats").isNumeric(),
    check("carbohydrates", "Error carbohydrates").isNumeric(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(201)
          .json({ errors: errors.array(), message: "Failed data" });
      }

      const { name, calories, squirrels, fats, carbohydrates } = req.body;

      const existing = await Ingredient.findOne({ name });

      if (existing) {
        res.status(201).json({ message: "This ingredient is already added." });
      }

      const ingredient = new Ingredient({
        name,
        calories,
        squirrels,
        fats,
        carbohydrates,
      });

      await ingredient.save();

      res.status(201).json({ message: "Ingredient was added." });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try again." });
    }
  }
);

router.post("/delete", async (req, res) => {
  const { name } = req.body;
  await Ingredient.deleteOne({ name });
  res.status(201).json({ message: "Ingredient was deleted." });
});

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find({});
    res.json(ingredients);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong. Try again." });
  }
});

module.exports = router;
