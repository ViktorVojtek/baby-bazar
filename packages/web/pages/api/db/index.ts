import "dotenv/config";
import mongoose from "mongoose";

const MONGO_URL = `mongodb://localhost:27017/${process.env.DB_NAME}`;

export default async function connectToDb() {
  try {
    mongoose.connect(MONGO_URL, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => console.log("DB connected"));
  } catch (err) {
    throw new Error(err);
  }
}
