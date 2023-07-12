import { Link } from "react-router-dom";

export const ForgetPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">
        Recupera tu acceso y no pierdas tu proyectos{" "}
        <span className="text-slate-600 capitalize">proyectos</span>
      </h1>

      <form className="bg-white shadow my-10 rounded-lg p-10">
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
          />
        </div>

        <input
          type="submit"
          className="w-full bg-sky-600 text-white py-3 rounded hover:cursor-pointer hover:bg-sky-800 font-bold uppercase transition-colors mb-5"
          value="Enviar"
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
          to="/register"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿No tienes cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};
