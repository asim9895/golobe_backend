import mongoose from "mongoose";

// creating mongodb connection
const connect_mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect_mongodb;
