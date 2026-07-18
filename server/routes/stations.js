
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "UNG Petro",
      city: "Toshkent",
      fuel: ["AI-92", "AI-95"],
      status: "available"
    }
  ]);
});

module.exports = router;
