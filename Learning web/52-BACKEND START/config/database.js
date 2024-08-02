import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my_database");
    console.log('connected to database.')
  } catch (error) {
    console.log(error)
  }
};

export default connectDb