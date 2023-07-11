import { useState } from "react";

const linkMenu =
  "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 border-b-2 border-teal-800 hover:border-b-2 hover:border-teal-100 transition ease-in-out duration-500";
const botonMenu =
  "inline-block ab text-sm px-4 py-2 leading-none border rounded text-white hover:cursor-pointer border-white hover:border-transparent hover:text-teal-500 transition ease-in-out duration-700 hover:bg-white mt-4 lg:mt-0";

export const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState("hidden");

  const handleClick = () => {
    menuHidden.length > 0 ? setMenuHidden("") : setMenuHidden("hidden");
  };

  return (
    <>
      <nav class="flex items-center justify-between  lg:text-right  flex-wrap bg-teal-800 p-6">
        <div class="flex items- flex-shrink-0 text-white mr-6">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>

          <span class="font-semibold text-xl tracking-tight">Blog-Rocio</span>
        </div>

        <div class="block lg:hidden">
          <button
            id="boton"
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => handleClick()}
          >
            <svg
              class="fill-current h-3 w-3"
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
          class={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${menuHidden} `}
        >
          <div class="text-xl lg:flex-grow lg:mr-5 lg:mb-1">
            <a href="#responsive-header" class={linkMenu}>
              Home
            </a>
            <a href="#responsive-header" class={linkMenu}>
              Articulos
            </a>
          </div>
          <div>
            <span class="inline-flex">
              <button type="button" class={botonMenu} disabled="">
                Sign In
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
