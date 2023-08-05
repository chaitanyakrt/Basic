import DBConnection from "../server/mondb.js";
import mongoose from "mongoose";
DBConnection();

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

export default collection;


