import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-seashell text-center">
      <h1 className="text-3xl font-bold text-deepsea">Logging you out... 💫</h1>
      <p className="mt-4 text-lg text-seaglass">
        See you soon, sweetheart! Redirecting to login... 💖
      </p>
    </div>
  );
}

export default Logout;
