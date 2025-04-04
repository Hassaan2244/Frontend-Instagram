import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    bio: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle signup logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black p-8 border-1 border-gray-500 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-1 rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"

            required
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"

            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"

            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"

            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"

            required
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"

            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-white">
          Already have an account? 
          <button
            onClick={() => navigate("/")}
            className="pl-2 text-blue-500 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
