const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("you just created a user ");
});

module.exports = router;
