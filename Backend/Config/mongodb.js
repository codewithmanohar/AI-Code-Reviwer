import mongoose from "mongoose";


// Replace with your MongoDB URI
const uri = process.env.MONGODB_URI; // For a local database


const connectDB = () => {
    mongoose.connect(uri )
    mongoose.connection.on('connected' , () => {
        console.log("MongoDB Connected !");
    })
}


export default connectDB;