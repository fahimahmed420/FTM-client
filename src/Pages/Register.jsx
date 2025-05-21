import React, { useState, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { FaUser, FaImage } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    photo: "",
  });

  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photoFile" && files[0]) {
      const fileURL = URL.createObjectURL(files[0]);
      setImagePreview(fileURL);
      setFormData((prev) => ({ ...prev, photo: fileURL }));
    } else if (name === "photoUrl") {
      setImagePreview(value);
      setFormData((prev) => ({ ...prev, photo: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData.email, formData.password);
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      alert("Signed in with Google!");
      navigate("/");
    } catch (error) {
      alert("Google Sign-in failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="flex bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl text-white max-w-3xl w-full overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center p-6 relative w-1/2">
          <img
            src={imagePreview || "/assets/undraw_signup_7g2z.svg"}
            alt="Preview"
            className="w-80 h-80 rounded-full object-cover border-4 border-white/30 mt-10"
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8">
          <Link
            to={"/"}
            className="absolute top-4 left-4 text-white text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
          >
            ← Back Home
          </Link>
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
          <form className="space-y-6 mb-4" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="relative">
              <label htmlFor="fullName" className="block text-sm mb-1">
                Full Name
              </label>
              <FaUser className="absolute top-10 left-3 text-gray-300" size={18} />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

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
                value={formData.email}
                onChange={handleChange}
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
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
                value={formData.password}
                onChange={handleChange}
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                Must be 8+ characters with uppercase, lowercase, and a number.
              </p>
            </div>

            {/* Photo URL */}
            <div className="relative">
              <label htmlFor="photoUrl" className="block text-sm mb-1">
                Photo URL (optional)
              </label>
              <FaImage className="absolute top-10 left-3 text-gray-300" size={18} />
              <input
                type="url"
                id="photoUrl"
                name="photoUrl"
                onChange={handleChange}
                placeholder="https://example.com/photo.jpg"
                className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Local Upload */}
            <div className="mt-2">
              <label className="block text-sm mb-1">Or upload a photo</label>
              <input
                type="file"
                name="photoFile"
                accept="image/*"
                onChange={handleChange}
                className="text-sm text-gray-300 file:bg-purple-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-none file:cursor-pointer"
              />
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
                            <span className="relative">Sign Up</span>
                        </button>
          </form>

          {/* Google Sign Up */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="btn bg-white w-full text-black border-[#e5e5e5] flex items-center justify-center gap-2 py-2 mt-2"
          >
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </g>
            </svg>
            Sign Up with Google
          </button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
