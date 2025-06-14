import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Best Places",
      link: "/places",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <>
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white  px-8 pb-6 pt-16 dark:text-white transition-all duration-200 text-black sm:hidden rounded-r-xl shadow-md`}
      >
        <div className="Navbar_card">
          {/* top section */}
          <div className="">
            {" "}
            <div className="flex justify-start items-center gap-4">
              <FaUserCircle className="text-slate-600" size={50} />
              <div className="select-none text-slate-600">
                <h1 className="">Hello User</h1>
                <h1 className="text-sm text-slate-400">Premium user</h1>
              </div>
            </div>
          </div>
          {/* navlinks section */}
          <div className="text-slate-600 mt-12">
            <ul className="space-y-4 text-xl ">
              {navLinks.map(({ name, link }) => {
                return (
                  <li key={name} className="">
                    <Link
                      className="mb-5 inline-block hover:text-primary"
                      onClick={() => setShowMenu(false)}
                      to={link}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
