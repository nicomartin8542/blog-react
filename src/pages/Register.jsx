import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container mx-auto mt-16 w-11/12 lg:w-1/2 ">
      <section>
        <h1 className="text-sky-600 font-black text-5xl text-center capitalize">
          Regístrate
        </h1>

        <form className="bg-white shadow-xl my-10 rounded-lg p-10">
          <div className="my-5">
            <label
              htmlFor="nombre"
              className="uppercase text-gray-600 font-bold block text-xl"
            >
              Nombre
            </label>
            <input
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50"
              id="nombre"
              type="text"
              placeholder="Ingresa tu nombre"
              autoComplete="on"
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 font-bold block text-xl"
            >
              Email
            </label>
            <input
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50"
              id="email"
              type="email"
              placeholder="Ingresa tu email"
              autoComplete="on"
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 font-bold block text-xl"
            >
              Password
            </label>
            <input
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50"
              id="password"
              type="password"
              placeholder="Ingresa tu password"
              autoComplete="on"
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="password2"
              className="uppercase text-gray-600 font-bold block text-xl"
            >
              Repetir Password
            </label>
            <input
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50"
              id="password2"
              type="password"
              placeholder="Repite tu password"
              autoComplete="on"
            />
          </div>

          <input
            type="submit"
            className="w-full bg-sky-600 text-white py-3 rounded hover:cursor-pointer hover:bg-sky-800 font-bold uppercase transition-colors mb-5"
            value="Registrarse"
          />
        </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            to="/"
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            ¿Ya tienes cuenta? Inicia sesion
          </Link>

          <Link
            to="/forget-password"
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            Olvide mi password
          </Link>
        </nav>
      </section>
    </div>
  );
};
