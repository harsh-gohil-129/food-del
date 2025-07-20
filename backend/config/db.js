import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gohilharsh129:nosql%40123@cluster0.0bl8tiq.mongodb.net/food-del"
    )
    .then(console.log("DB Connetected"));
};
