const mongoose = require('mongoose');

// Connect to MongoDB
const db_connection = () => {

    mongoose.connect('mongodb+srv://abdmata2000:mtLy2ZY39OH7zg5c@cluster0.4rlhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}


module.exports = db_connection();

