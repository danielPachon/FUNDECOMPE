import React from "react"

export function MonitorLogin() {
  return (
    <div className="flex justify-center w-full my-auto xl:gap-10 lg:justify-normal md:gap-3 draggable">
      <div className="flex items-center justify-center w-full lg:p-12">
        <div className="flex items-center xl:p-6">
          <div className="flex flex-col w-full h-full pb-6 text-center  rounded-3xl">
            <h3 className="mb-3 text-4xl font-extrabold text-dark-gray-900">Iniciar sesión</h3>
            <p className="mb-4 text-gray-700">Introduce tu cedula  y contraseña</p>
            <a href="/" className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300">
              <img className="h-6 mr-2" src="https://img.icons8.com/glyph-neue/100/user--v1.png" alt="logoMentor" />
              Inicia sesión como Usuario
            </a>
            <div className="flex items-center mb-3">
              <hr className="h-0 border-b border-solid border-gray-500 grow" />
              <p className="mx-4 text-gray-600">o</p>
              <hr className="h-0 border-b border-solid border-gray-500 grow" />
            </div>
            <label htmlFor="number" className="mb-2 text-sm text-start text-gray-900">Cedula*</label>
            <input id="number" type="number" placeholder="Introduce la cedula" className="w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl" />
              <div className="flex flex-col w-full h-full text-center rounded-3xl">
                <label htmlFor="password" className="mb-2 text-sm text-start text-gray-900">Contraseña*</label>
                <input id="password" type="password" placeholder="Introduzce la contraseña" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl" />
                <div className="flex flex-row justify-between mb-8">
                  <a href="/" className="mr-4 text-sm font-medium text-purple-blue-500">¿Olvidaste tu contraseña?</a>
                </div>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-green-100 bg-green-500">Iniciar sesión</button>
              </div>
            <p className="text-sm leading-relaxed text-gray-900"> <a href="/" className="font-bold text-gray-700">Administración u Organización</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}