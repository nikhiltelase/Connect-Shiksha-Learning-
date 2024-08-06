import mongoose from "mongoose";

const connectDb = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/app_data")
        console.log("connected to database succefullly.")
    } catch (error) {
        console.log("database error", error)
    }
}

export default connectDb