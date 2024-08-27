const Habit = require("../modules/habit_module");
const mongoose = require('mongoose');


exports.add_habit = async (req, res) => {

    console.log("inside habit controller");

    const { newHabit, newCategory } = req.body;

    console.log(newHabit, newCategory);

    const data = [
        {
            habit: newHabit,
            category: newCategory,
            is_deleted: false,

        },
    ];

    Habit.insertMany(data)
        .then(() => console.log('Habit inserted'))
        .catch(err => console.log(err));




    res.json("");
}


exports.delete_habit = async (req, res) => {

    console.log("inside delete habit controller");

    const { id } = req.body;

    console.log(id);

    Habit.findByIdAndUpdate(
        id, // ID of the document to update
        { $set: { is_deleted: true } }, // Update operation
        { new: true } // Option to return the updated document
    )
        .then(updatedUser => {
            console.log('Updated user:', updatedUser);
        })
        .catch(err => {
            console.error('Error updating user:', err);
        });



    res.json("");
}

exports.get_habit = async (req, res) => {
    console.log("inside get data");

    try {
        const habits = await Habit.find({ is_deleted: false });
        console.log('All habits:', habits);
        res.json(habits); // Send the data directly
    } catch (err) {
        console.error('Error retrieving habits:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// exports.get_habit = async (req, res) => {

//     console.log("inside get data");

//     const habits = await Habit.find()
//         .then(users => {
//             console.log('All habits:', users);
//         })
//         .catch(err => {
//             console.error('Error retrieving habit:', err);
//         });



//     res.json(habits);
// }