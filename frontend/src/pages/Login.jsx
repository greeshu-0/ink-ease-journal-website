import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import AlreadyLoggedIn from "../components/auth/AlreadyLoggedIn";

function Login() {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setAlreadyLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
      });

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", res.data.user.email);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed 😢");
    }
  };

  if (alreadyLoggedIn) return <AlreadyLoggedIn />;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <LoginForm onSubmit={handleSubmit} />
      <p className="text-sm text-center mt-4 text-gray-700">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="underline hover:text-gray-500 font-medium"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
