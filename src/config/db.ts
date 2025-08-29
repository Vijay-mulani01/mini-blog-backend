import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongo_uri  = process.env.MONGO_URI || '';

const connection = () => {
    mongoose.connect(mongo_uri).then((res) => {
        console.log("Connected to MongoDB Successfully");
    })
    .catch(error => {
        console.log("Error connecting to DB")
    })
}

export default connection;