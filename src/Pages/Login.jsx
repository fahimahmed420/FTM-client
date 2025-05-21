import React, { useState, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInUser(email, password);
            navigate("/"); // or wherever you want to redirect after login
        } catch (err) {
            setError("Invalid email or password.");
            console.error(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (err) {
            setError("Google sign-in failed.");
            console.error(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
            <div className="flex bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl text-white max-w-3xl w-full overflow-hidden">
                {/* Left Side */}
                <div className="hidden md:flex flex-col items-center justify-center p-6 relative w-1/2">
                    <img
                        src="/assets/undraw_login_weas.svg"
                        alt="Login visual"
                        className="w-40 h-40 rounded-full object-cover border-4 border-white/30 mt-10"
                    />
                </div>

                {/* Right Side */}
                <div className="flex-1 p-8">
                    <Link
                        to="/"
                        className="absolute top-4 left-4 text-white text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
                    >
                        ← Back Home
                    </Link>
                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                    {error && (
                        <p className="text-red-400 text-center mb-4">{error}</p>
                    )}

                    <form className="space-y-6" onSubmit={handleLogin}>
                        {/* Email */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm mb-1">
                                Email
                            </label>
                            <MdEmail className="absolute top-10 left-3 text-gray-300" size={20} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm mb-1">
                                Password
                            </label>
                            <PiPasswordFill className="absolute top-10 left-3 text-gray-300" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password1"
                                className="w-full pl-10 pr-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute right-3 top-10 text-white hover:text-purple-400"
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <p className="text-xs text-gray-300 mt-1">
                                Must contain at least 8 characters, including uppercase, lowercase, and a number.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="relative cursor-pointer w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-5"></span>
                            <span className="relative">Login</span>
                        </button>
                    </form>

                    {/* Google Button */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn w-full mt-4 bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-center text-sm text-gray-300">
                        Don't have an account?{" "}
                        <Link to="/registation" className="text-purple-400 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
