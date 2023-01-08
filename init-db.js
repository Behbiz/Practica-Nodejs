const mongoose = require("mongoose");
const Ad = require("./schema/Ad");
const fs = require("fs");
const anuncios = fs.readFileSync("./schema/anuncios.json");

mongoose.connect("mongodb://localhost/webapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("Database connection established");

  try {
    await Ad.deleteMany();

    const newAds = JSON.parse(anuncios);

    await Ad.insertMany(newAds);

    console.log("New ads added");
  } catch (err) {
    console.error(err);
  }
});
