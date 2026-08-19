const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("IG Welcome Bot is running!");
});
app.get("/webhook", (req, res) => {
  res.status(200).send("Webhook is working!");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  res.sendStatus(200);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Bot running on port ${PORT}`);
});
