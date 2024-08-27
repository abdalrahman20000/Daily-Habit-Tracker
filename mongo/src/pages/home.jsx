import React from 'react';
import { CheckCircle, List, Calendar, User } from 'lucide-react';
import {  Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Welcome to Your To-Do List</h1>
          <p className="text-xl text-gray-600">Stay organized and boost your productivity</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: CheckCircle, title: "Create Tasks", description: "Easily add and manage your daily tasks" },
            { icon: List, title: "Organize", description: "Categorize and prioritize your to-dos" },
            { icon: Calendar, title: "Set Deadlines", description: "Never miss an important date again" },
            { icon: User, title: "Personalized", description: "Tailored experience for your needs" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Ready to get started?</h2>
          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up Now
          </button> */}
          <Link to="/sign-up" className="m-10 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">Sign Up Now</Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;