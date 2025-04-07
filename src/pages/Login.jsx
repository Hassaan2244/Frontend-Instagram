import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth"; // Import the login function
import Main from "./HomePage";


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // To handle any error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      console.log("Login success:", response);
      localStorage.setItem("userToken", response.token);
      navigate("/Main");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-96 p-8 border-1 border-gray-500 rounded-xl">
        <h1 className="text-center text-white text-3xl font-bold mb-6">Instagram</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="email"
            placeholder="email or Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-1 rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border-1 rounded bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        {error && <div className="text-red-500 mt-4">{error}</div>}

        <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
        </div>

        <div className="text-center mt-6 text-sm text-white">
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className="pl-2 text-blue-500 font-semibold hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
