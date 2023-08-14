const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "server running",
//   });
// });

//port
const port = process.env.PORT;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
