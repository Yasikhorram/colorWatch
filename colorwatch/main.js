const express = require("express");
const app = express();
const port = 9000;
const userRoute = require("./routes/user");

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
