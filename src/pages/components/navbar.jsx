import React from "react";
import NavbarLink from "./navbarlink.jsx";

const Navbar = ({}) => {
  return(
    <nav className="bg-[#EE6983] w-full sticky top-0 z-50 p-4">
        <div className="flex flex-row gap-8 justify-end  items-center">
            {/* navbar links */}
            <NavbarLink link="#profile" linkname="Profile" />
            <NavbarLink link="#skillset" linkname="Skillset" />
            <NavbarLink link="#portfolio" linkname="Portfolio" />
            <NavbarLink link="#contact" linkname="Contact Me" />
        </div>
    </nav>
  );
}
export default Navbar;