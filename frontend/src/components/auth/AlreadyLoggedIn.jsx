import { useNavigate } from "react-router-dom";

export default function AlreadyLoggedIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-2xl p-6 text-center text-gray-600">
        <h2 className="text-xl font-bold mb-4">You're already logged in!</h2>
        <button
          onClick={() => navigate("/")}
          className="text-gray-500 underline font-medium"
        >
          Go to homepage
        </button>
      </div>
    </div>
  );
}
