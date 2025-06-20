import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({handleOrderPopup}) => {
  const dropdownLinks = [
    {
      name: "Our Services",
      link: "/#services",
    },
    {
      name: "Top Brands",
      link: "/#mobile-brands",
    },
    {
      name: "Location",
      link: "/#location",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-grow shadow-md fixed top-0 right-0 w-full z-9999999999999">
        {" "}
        <div className="bg-grow text-back ">
          <div className="align-center bg-gradient-to-r from-primary to-secondary px-5 sm:px-10 lg:px-30 hidden sm:block">
            <div className="flex justify-between text-grow py-[2px]">
              <p>20% off on next booking</p>
              <p>Mobile No. +880 1703 202276</p>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-10 lg:px-30 shadow py-2 sm:py-1">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.scrollTo(0, 0)}
              >
                <h2 className="text-primary font-mono tracking-tight text-2xl font-bold">ChillTrip</h2>
              </NavLink>
            </div>
            {/* Desctop Navlink */}
            <div className="hidden sm:block ">
              <ul className="flex items-center gap-6 font-medium">
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown Section */}
                <li className="relative py-4 group cursor-pointer">
                  <div className="dropdown flex items-center">
                    <span className="">Quick Link</span>
                    <span>
                      <MdOutlineArrowDropDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-back w-[150px] bg-grow  p-2 ">
                    <ul>
                      {dropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <Link
                              to={data.link}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            >
                              {data.name}
                            </Link>{" "}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* Book Now Button */}
            <div className="flex items-center gap-4">
              <button
              onClick={()=>handleOrderPopup(true)}
              className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-300 text-grow px-3 py-1 rounded-full cursor-pointer font-medium">
                Book Now
              </button>
              {/* Mobile Humberger Menu */}
              <div className="sm:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all "
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all "
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  );
};

export default Navbar;
