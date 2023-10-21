const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Serve running on ${port}...`);
});
