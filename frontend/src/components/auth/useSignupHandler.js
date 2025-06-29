import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useSignupHandler() {
  const navigate = useNavigate();

  const handleSubmit = async (e, { name, email, password }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify({ name, email }));
      localStorage.setItem("userEmail", email);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed 💔");
    }
  };

  return handleSubmit;
}
