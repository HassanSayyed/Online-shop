const express = require("express");
const app = express();
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
require("dotenv").config();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// sanitize request data
app.use(xss());

// enable cors
app.use(cors());
app.options("*", cors());

// routes
const productRouter = require("./routes/productsRoutes");

app.use("/api/v1/products", productRouter);

app.get("/", (req, res) => res.send("Hello World!"));

// database
const connectDB = require("./db/connect");

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
