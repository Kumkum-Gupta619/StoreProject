import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "@/api/api";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await api.post(`/api/auth/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(res);

            if (res.data.success) {
                // ✅ Save token to localStorage
                localStorage.setItem("token", res.data.token);

                toast.success(res.data.message || "Login successful!");
                navigate("/"); // redirect to home (or dashboard)
            } else {
                toast.error(res.data.message || "Login failed");
            }
        } catch (error) {
            console.error(error.message);
            toast.error(error.response?.data?.message || "Login failed");
        } finally {
            setIsLoading(false);
        }
    };

    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) navigate("/stores");
    }, [])

    return (
        <section className="pt-10 pb-10">
            <div className="max-w-2xl mx-auto border-1 shadow-2xs rounded-2xl">
                <form className="bg-white px-10 py-5" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-5">
                        <Label className="block text-gray-700 mb-2">Your Email</Label>
                        <Input
                            type="text"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            className="w-full"
                            placeholder="Email"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <Label className="block text-gray-700 mb-2">Password</Label>
                        <Input
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            type="password"
                            className="w-full"
                            placeholder="Password"
                        />
                    </div>

                    {/* Submit */}
                    <div className="mb-3 items-center gap-2">
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                        >
                            {isLoading ? "Please Wait..." : "Login"}
                        </button>
                    </div>

                    {/* Register Link */}
                    <span className="text-gray-700 text-sm font-mono">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-red-700 font-medium underline"
                        >
                            Create Account
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    );
};

export default Login;
