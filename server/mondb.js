const mongoose = require('mongoose');

const DBConnection = async () => {
    const MONGO_URI = 'mongodb+srv://admin123:Czd1M0nCANXlqCgU@cluster0.3komplc.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error while connecting to MongoDB", error.message);
    }
};

module.exports = {
    DBConnection,
}