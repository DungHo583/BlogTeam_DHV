require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const route = require("./src/routers");
const mongoose = require("mongoose");

app.use(cors())
app.use(express.json());

async function connectDB() {
  try {
    let connect = await mongoose.connect(
      "mongodb+srv://dungho583:Acy1memt@cluster0.qwuoy.mongodb.net/tblBlogDHV?retryWrites=true&w=majority"
    );
    if (connect) {
      console.log("dbconect");
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

connectDB();

app.use(route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server run on port ${process.env.PORT}`));
