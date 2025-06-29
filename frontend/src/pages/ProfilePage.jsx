import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profilePic.svg"; 

function ProfilePage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn || !storedEmail) {
      navigate("/login");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-orchid"
        />
        <h2 className="text-2xl font-bold text-orchid mb-2">Welcome!</h2>
        <p className="text-gray-500 text-xl">📧{email}</p>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
            navigate("/login");
          }}
          className="mt-6 px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
