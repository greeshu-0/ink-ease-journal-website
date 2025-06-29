import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <li className="hover:text-gray-500 transition-colors duration-200">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-gray-500 transition-colors duration-200">
        <Link to="/journals">My Journals</Link>
      </li>
      <li className="hover:text-gray-500 transition-colors duration-200">
        <Link to="/vault">Self-Care Vault</Link>
      </li>
      <li className="hover:text-gray-500 transition-colors duration-200">
        <Link to="/connect">Connect</Link>
      </li>
    </>
  );
}
