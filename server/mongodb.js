const DBConnection = require('../server/mondb.js');
const mongoose = require('mongoose');
DBConnection.DBConnection();

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

module.exports = {
    collection,
}

