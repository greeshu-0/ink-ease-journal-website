import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/profilePic.svg";

export default function ProfileDropdown() {
  const navigate = useNavigate();

  return (
    <div
      className="relative"
      onClick={() => navigate("/profilepage")}
    >
      <img
        src={profilePic}
        alt="Profile"
        className="h-10 w-10 rounded-full cursor-pointer hover:shadow-[0_0_12px_#E9A5F1] transition-shadow duration-300"
      />
    </div>
  );
}
