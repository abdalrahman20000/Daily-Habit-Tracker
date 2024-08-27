const User = require("../modules/modules");
const mongoose = require('mongoose');


exports.sign_up = async (req, res) => {

    console.log("inside sign up controller");

    const { name, email, pass } = req.body;

    console.log(name, email, pass);

    const data = [
        {
            name: name,
            email: email,
            pass: pass

        },
    ];

    User.insertMany(data)
        .then(() => console.log('Data inserted'))
        .catch(err => console.log(err));


    const user_found =  User.findOne({ name: name })
        .then(user => {
            if (user) {
                console.log('User found:', user);
            } else {
                console.log('No user found with that name');
            }
        })
        .catch(err => {
            console.error('Error retrieving user:', err);
        });


        console.log("test");
        console.log(user_found);
        console.log("test");


    





    res.json(user_found);
}