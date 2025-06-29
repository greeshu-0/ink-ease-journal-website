import { Link } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";
import useSignupHandler from "../components/auth/useSignupHandler";

function Signup() {
  const handleSubmit = useSignupHandler();

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center flex-col">
      <SignupForm onSubmit={handleSubmit} />
      <p className="text-sm text-center mt-4 text-gray-700">
        Already have an account?{" "}
        <Link to="/login" className="underline hover:text-gray-500 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
