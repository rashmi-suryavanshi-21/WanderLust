const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const MONGO_URL = process.env.MONGODB_URI;

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
.then(() => {
    console.log("connected to DB");
    initDB();
})
.catch((err) => {
    console.log(err);
});

const initDB = async () => {
   await Listing.deleteMany({});

   initData.data = initData.data.map((obj) => ({
      ...obj,
       owner: '69ff0152e27722ccf5ec43fc'
   }));

   await Listing.insertMany(initData.data);

   console.log("data was initialized");
};