const Hero = () => {
  return (
    <section className="bg-gray-50 py-5 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-start xl:items-center">
        <div>
          <h1 className="text-4xl font-bold text-black">
            Bienvenido(a) a mi página de blogs
          </h1>
        </div>
        <div>
          <p className="mt-4 text-lg text-gray-900">
            Descubre artículos interesantes sobre diversos temas.
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <img
          src="/public/live-chat.svg"
          width="200"
          height="200"
          alt=""
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
