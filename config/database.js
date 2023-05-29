import mongoose from "mongoose";

mongoose
  .connect(process.env.URL_DATABASE)
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error)); 