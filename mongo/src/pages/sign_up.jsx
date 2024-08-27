import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUpPage = () => {

    const navigate = useNavigate();


    const [name, set_name] = useState("");
    const [email, set_email] = useState("");
    const [pass, set_pass] = useState("");
    const [user_id, set_user_id] = useState("");



    function sign_up_handle(e) {
        e.preventDefault();

        // console.log("Name : "+name);
        // console.log("Email : "+email);
        // console.log("Password : "+pass);
        try {

            const response = axios.post('http://localhost:3000/mongo/users', { name, email, pass })
                .then(res => { set_user_id(res.data) })
                .catch(err => { console.log(err) });

            console.log(response.data);

            alert("Sign up Successfully !!!");

            // navigate(`/${}`);

        }
        catch (err) {
            console.log(err);
        }





    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>
                <form >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <div className="relative">
                            <User className="absolute top-3 left-3 text-gray-400" size={20} />
                            <input
                                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => { set_name(e.target.value) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                            <input
                                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => { set_email(e.target.value) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                            <input
                                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                value={pass}
                                onChange={(e) => { set_pass(e.target.value) }}
                                required
                            />
                        </div>
                    </div>
                    <button
                        onClick={sign_up_handle}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold text-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    );
};

export default SignUpPage;