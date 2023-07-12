import { useState } from "react";
import { Link } from "react-router-dom";

const linkMenu =
  "block mt-4 lg:inline-block lg:mt-0 text-teal-800  mr-4 border-b-2 border-gray-100  hover:border-b-2  hover:text-teal-500 hover:border-teal-600 transition ease-in-out duration-500";
const botonMenu =
  "inline-block text-md px-4 py-3 leading-none border rounded-md text-teal-800 hover:cursor-pointer border-teal-800 hover:border-transparent hover:text-white transition ease-in-out duration-700 hover:bg-teal-800 mt-3 mr-3 lg:mt-0";

export const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState("hidden");

  const handleClick = () => {
    menuHidden.length > 0 ? setMenuHidden("") : setMenuHidden("hidden");
  };

  return (
    <>
      <nav className="flex items-center justify-between text-center  lg:text-right  flex-wrap bg-gray-100 p-6 ">
        <div className="flex items- flex-shrink-0 text-white mr-6">
          <img
            src="public/logo.svg"
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            alt=""
          />

          <span className="font-semibold text-xl text-teal-800 tracking-tight">
            Blog-Rocio
          </span>
        </div>

        <div className="block lg:hidden">
          <button
            id="boton"
            className="flex items-center px-3 py-2 border rounded text-teal-800 border-teal-800 hover:text-teal-500 hover:border-teal-500"
            onClick={() => handleClick()}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          id="menu"
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${menuHidden} `}
        >
          <div className="text-md lg:flex-grow lg:mr-5 ">
            <Link to="/" className={linkMenu}>
              Home
            </Link>
            <Link to="/posts-user" className={linkMenu}>
              Mis Articulos
            </Link>
            <Link to="/about" className={linkMenu}>
              About
            </Link>
          </div>
          <div>
            <Link to="/login" className={botonMenu}>
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
