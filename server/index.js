const express = require("express");
const cors = require("cors");
const stationRoutes = require("./routes/stations");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("UzFuelMap API ishlayapti!");
});
app.use("/stations", stationRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});

