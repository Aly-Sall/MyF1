import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  className="h-8 w-8 cursor-pointer"
                  src="https://png.pngtree.com/png-clipart/20230917/original/pngtree-linear-f1-racing-car-illustration-vector-png-image_12283551.png"
                  alt="Logo"
                  width={480}
                  height={150}
                />
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-10">
                <NavLink
                  to="/drivers"
                  className="text-white  hover:bg-slate-950 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Drivers
                </NavLink>

                <NavLink
                  to="/schedule"
                  className="text-white  hover:bg-slate-950 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Schedule
                </NavLink>
                <NavLink
                  to="/teams"
                  className="text-white  hover:bg-slate-950 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Teams
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/f1"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              F1
            </NavLink>
            <NavLink
              to="/drivers"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Drivers
            </NavLink>
            <NavLink
              to="/results"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Results
            </NavLink>
            <NavLink
              to="/schedule"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Schedule
            </NavLink>
            <NavLink
              to="/teams"
              className="text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Teams
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
