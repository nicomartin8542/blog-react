export const CardPost = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center"
          src="/public/foto.png"
          alt="Imagen del post"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Título del post</h3>
          <p className="text-gray-600 text-sm mb-4">
            Breve descripción del post
          </p>
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full mr-2"
              src="/public/imagen.jpg"
              alt="Avatar del usuario"
            />
            <p className="text-gray-600 text-sm">Nombre de usuario</p>
          </div>
          <p className="text-gray-400 text-xs mt-2">Fecha de publicación</p>
        </div>
      </div>
    </>
  );
};
