import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
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
      <div className="bg-white shadow-md fixed top-0 right-0 w-full z-9999999999999">
        {" "}
        <div className="bg-white text-black ">
          <div className="align-center bg-gradient-to-r from-primary to-secondary px-5 sm:px-10 lg:px-30 hidden sm:block">
            <div className="flex justify-between text-white py-[2px]">
              <p>20% off on next booking</p>
              <p>Mobile No. +880 1703 202276</p>
            </div>
          </div>
        </div>{" "}
        <div className="px-5 sm:px-10 lg:px-30 shadow py-2 sm:py-1">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  className="h-15"
                  src="https://media.istockphoto.com/id/1258141375/vector/plane-travel-icon-air-travel-around-the-world-flying-around-the-world-travel-agency-logo.jpg?s=612x612&w=0&k=20&c=QaZk5NDYsdfKd_7iUNAe3CImkcwlzyaibpMuYIteeWY="
                  alt=""
                />
              </NavLink>
            </div>
            {/* Desctop Navlink */}
            <div className="hidden sm:block ">
              <ul className="flex items-center gap-6 ">
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
                  <div className="absolute -left-9 z-[999] hidden group-hover:block shadow-md text-black w-[150px] bg-white  p-2 ">
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
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-300 text-white px-3 py-1 rounded-full cursor-pointer font-medium">
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
