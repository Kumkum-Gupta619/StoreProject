import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "@/api/api";
const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        role: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // Handle file change
    const handleFileChange = (e) => {
        setInput({ ...input, profile: e.target.files?.[0] });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append("name",);
        // formData.append();
        // formData.append();
        // formData.append();
        // formData.append();

        // if (input.profile) formData.append("file", input.profile);
        console.log("here is the form data", {
            "name": input.name,
            "email": input.email,
            "password": input.password,
            "address": input.address,
            "role": input.role

        });
        try {
            setIsLoading(true);
            const res = await api.post(`/api/auth/signup`, {
                "name": input.name,
                "email": input.email,
                "password": input.password,
                "address": input.address,
                "role": input.role

            },
                { withCredentials: true });
            console.log(res.data, "res.data.success", res.data.success);
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error.message);
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };
    console.log(input);
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) navigate("/stores");
    }, [])
    return (
        <section className="pt-10 pb-10">
            <div className="max-w-2xl mx-auto border-1 shadow-2xs rounded-2xl">
                <form className="bg-white px-10 py-5" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-5">
                        <Label className="block text-gray-700 mb-2">Full Name</Label>
                        <Input
                            name="name"
                            value={input.name}
                            onChange={handleChange}
                            type="text"
                            className="w-full"
                            placeholder="Full Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <Label className="block text-gray-700 mb-2">Your Email</Label>
                        <Input
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            type="text"
                            className="w-full"
                            placeholder="Email"
                        />
                    </div>
                    {/* address */}
                    <div className="mb-5">
                        <Label className="block text-gray-700 mb-2">address</Label>
                        <Input
                            name="address"
                            value={input.address}
                            onChange={handleChange}
                            type="address"
                            className="w-full"
                            placeholder="address"
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

                    {/* Role */}
                    <div className="mb-5">
                        <Label className="block text-gray-700 mb-3">Select Your Role</Label>
                        <RadioGroup className="flex gap-4">
                            <div className="flex gap-2 border-1 px-5 rounded-3xl shadow-2xs">
                                <Input
                                    name="role"
                                    value="Vender"
                                    checked={input.role === "Vender"}
                                    onChange={handleChange}
                                    type="radio"
                                    className="cursor-pointer"
                                />
                                <Label className="text-gray-700">Vender</Label>
                            </div>
                            <div className="flex gap-2 border-1 px-5 rounded-3xl shadow-2xs">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="User"
                                    checked={input.role === "User"}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                />
                                <Label className="text-gray-700">User</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Profile Photo */}
                    {/* <div className="mb-5">
                        <Label className="block text-gray-700 mb-3">Profile Photo</Label>
                        <Input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full"
                            accept="image/*"
                        />
                    </div> */}

                    {/* Submit */}
                    <div className="mb-3 items-center gap-2">
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                        >
                            {isLoading ? "Please Wait..." : "Register"}
                        </button>
                    </div>

                    {/* Login Link */}
                    <span className="text-gray-700 text-sm font-mono">
                        Already have an account?{" "}
                        <Link to="/login" className="text-red-700 underline">
                            Login
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    );
};

export default Register;
