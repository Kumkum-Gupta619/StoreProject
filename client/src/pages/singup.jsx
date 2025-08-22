import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(API_BASE);
        try {
            const res = await axios.post(`http://localhost:3000/api/auth/signup`, formData, {
                withCredentials: true, // send cookies if needed
            });

            toast.success("Signup successful! 🎉");
            console.log("User registered:", res.data);

            navigate("/login");
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Signup failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    StoreRating
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@company.com"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="address"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="123 Main St, NY"
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                {loading ? "Signing up..." : "Sign Up"}
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <a
                                    href="/login"
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Login here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
