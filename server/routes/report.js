const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { stationId, fuel, status } = req.body;

  res.json({
    success: true,
    message: "Hisobot qabul qilindi",
    data: {
      stationId,
      fuel,
      status
    }
  });
});

module.exports = router;
