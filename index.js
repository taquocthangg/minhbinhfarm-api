const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const hoaDonRoute = require("./routes/hoaDon");
const loginRoute = require("./routes/login");


dotenv.config();
//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB");
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors())
app.use(morgan("common"));

//ROUTES
app.use("/v1/hoaDon", hoaDonRoute);
app.use("/v1/login", loginRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});
