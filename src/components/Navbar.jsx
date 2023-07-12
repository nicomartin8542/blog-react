import { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

const linkMenu =
  "mt-4 inline-block lg:mt-0 text-sky-800  mr-4 border-b-2 border-gray-100  hover:border-b-2  hover:text-sky-500 hover:border-sky-600 transition ease-in-out duration-500";
const botonMenu =
  "inline-block text-md px-4 py-3 leading-none border rounded-md text-sky-800 hover:cursor-pointer border-sky-800 hover:border-transparent hover:text-white transition ease-in-out duration-700 hover:bg-sky-800 mt-3 mr-3 lg:mt-0";

export const Navbar = () => {
  const [menuAnimation, setMenuAnimation] = useState("hidden");

  const handleClick = () => {
    if (menuAnimation === "hidden") {
      setMenuAnimation("");
    } else {
      setMenuAnimation("hidden");
    }
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between text-center  lg:text-right  flex-wrap bg-gray-100 p-6`}
      >
        <div className="flex flex-shrink-0 text-white mr-6">
          <img
            src="public/logo.svg"
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            alt=""
          />

          <span className="font-semibold text-xl text-sky-800 tracking-tight">
            Blog-Rocio
          </span>
        </div>

        <div className="block lg:hidden">
          <button
            id="boton"
            className="flex items-center px-3 py-2 border rounded text-sky-800 border-sky-800 hover:text-sky-500 hover:border-sky-500"
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
          className={`w-full ${menuAnimation}  transition-2 flex-grow lg:flex lg:items-center lg:w-auto   `}
        >
          <ul className="flex justify-center flex-col w-1/3 mx-auto text-md lg:flex-grow lg:flex-row lg:justify-end lg:mr-5">
            <li>
              <Link to="/" className={linkMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts-user" className={linkMenu}>
                Mis Articulos
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkMenu}>
                About
              </Link>
            </li>
          </ul>

          <Link to="/login" className={botonMenu}>
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
};
