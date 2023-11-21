const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user-routes");
const articleRouter = require("./src/routes/article-routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/user", userRouter);
app.use("/api/article", articleRouter);

//Database Connection
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) =>
    console.log(err.message || "Could Not Establish Connection ")
  );

app.listen(PORT, () =>
  console.log(`Backend Server Is Running On Server ${PORT}`)
);
