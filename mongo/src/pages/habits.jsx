import React, { useState, useEffect } from 'react';
import { PlusCircle, X, CheckCircle, Tag, ChevronDown, Filter } from 'lucide-react';
import axios from 'axios';

const HabitsPage = () => {
    const predefinedCategories = ['Health', 'Learning', 'Productivity'];

    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isCustomCategory, setIsCustomCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All'); // New state for category filter

    useEffect(() => {
        axios.get('http://localhost:3000/mongo/habits')
            .then(res => { setHabits(res.data) })
            .catch(err => { console.log(err) });
    }, []);

    const handleAddHabit = (e) => {
        e.preventDefault();

        try {
            const response = axios.post('http://localhost:3000/mongo/habits', { newHabit, newCategory })
                .then(res => { })
                .catch(err => { console.log(err) });

            console.log(response.data);

            alert("Habit Added Successfully !!!");

            // navigate(`/${}`);
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleDeleteHabit = (id) => {
        axios.patch('http://localhost:3000/mongo/habits', { id })
        .catch(err => {console.log(err)});

        alert("Habit Deleted !!!");
    };

    const handleIncrementStreak = (id) => {
        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
        ));
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustomCategory(true);
            setNewCategory('');
        } else {
            setIsCustomCategory(false);
            setNewCategory(value);
        }
    };

    // Filter habits based on selected category
    const filteredHabits = selectedCategory === 'All' 
        ? habits 
        : habits.filter(habit => habit.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">My Habits</h1>

                {/* Category filter */}
                <div className="mb-4">
                    <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">Filter by Category:</label>
                    <div className="relative">
                        <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                            <option value="All">All Categories</option>
                            {predefinedCategories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <Filter size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {filteredHabits.map(habit => (
                        <div key={habit.id} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{habit.habit}</h3>
                                <button onClick={() => handleDeleteHabit(habit._id)} className="text-red-500 hover:text-red-700">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex items-center mb-2">
                                <Tag size={16} className="text-blue-500 mr-2" />
                                <span className="text-sm text-blue-500">{habit.category}</span>
                            </div>
                            <p className="text-gray-600 mb-2">Streak: {habit.streak} days</p>
                            <button
                                onClick={() => handleIncrementStreak(habit.id)}
                                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition duration-300 flex items-center"
                            >
                                <CheckCircle size={16} className="mr-2" />
                                Complete Today
                            </button>
                        </div>
                    ))}
                </div>

                {!isFormVisible && (
                    <button
                        onClick={() => setIsFormVisible(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300 flex items-center mx-auto"
                    >
                        <PlusCircle size={20} className="mr-2" />
                        Add New Habit
                    </button>
                )}

                {isFormVisible && (
                    <form className="bg-white rounded-lg shadow-md p-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                value={newHabit}
                                onChange={(e) => setNewHabit(e.target.value)}
                                placeholder="Enter new habit"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <select
                                    value={isCustomCategory ? 'custom' : newCategory}
                                    onChange={handleCategoryChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                >
                                    <option value="">Select a category</option>
                                    {predefinedCategories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                                <ChevronDown size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        <button
                            onClick={handleAddHabit}
                            type="submit"
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Add Habit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default HabitsPage;