import NavLinks from "./NavLinks";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {

  return (
    <nav className="ml-auto mr-10">
      <ul className="flex gap-6 text-gray-600 font-medium text-lg items-center">
        <NavLinks />
        <li>
          <ProfileDropdown
            onLogout={() => {
              localStorage.clear();
              window.location.href = "/login"; 
            }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
