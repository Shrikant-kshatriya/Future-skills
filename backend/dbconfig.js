const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = db;