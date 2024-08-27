const express = require('express');
const mongoose = require('mongoose');
const body_parser = require("body-parser");
const cors = require("cors");
const routers = require("./routers/routers");
const db_connection = require("./config");

const app = express();
app.use(express.json());
app.use(cors());
app.use(body_parser.json());

const PORT = process.env.PORT || 3000;

db_connection;

app.use("/mongo",routers);

// // Middleware

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://abdmata2000:mtLy2ZY39OH7zg5c@cluster0.4rlhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Define a schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   }
// });

// Define a model
// const User = mongoose.model('User', userSchema);

// // Sample data
// const data = [
//   { name: "abood" },
//   { name: "hashem" },
//   { name: "abo-jboor" },
//   { name: "abdalraouf" },
//   { name: "ata" },
//   { name: "basil" },
//   { name: "ata" }
// ];

// // Insert data into the database
// User.insertMany(data)
//   .then(() => console.log('Data inserted'))
//   .catch(err => console.log(err));








//   // User.find()
//   // .then(users => {
//   //   console.log('All users:', users);
//   // })
//   // .catch(err => {
//   //   console.error('Error retrieving users:', err);
//   // });



//   // User.findById('66cd79dcc6f88ebb1c2f28f4')
//   // .then(user => {
//   //   if (user) {
//   //     console.log('User found:', user);
//   //   } else {
//   //     console.log('User not found');
//   //   }
//   // })
//   // .catch(err => {
//   //   console.error('Error retrieving user:', err);
//   // });



//   // User.findOne({ name: 'abood' })
//   // .then(user => {
//   //   if (user) {
//   //     console.log('User found:', user);
//   //   } else {
//   //     console.log('No user found with that name');
//   //   }
//   // })
//   // .catch(err => {
//   //   console.error('Error retrieving user:', err);
//   // });



//   User.findByIdAndUpdate(
//     '66cd79dcc6f88ebb1c2f28f4', // ID of the document to update
//     { $set: { name: 'aboood2000' } }, // Update operation
//     { new: true } // Option to return the updated document
//   )
//     .then(updatedUser => {
//       console.log('Updated user:', updatedUser);
//     })
//     .catch(err => {
//       console.error('Error updating user:', err);
//     });



// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
