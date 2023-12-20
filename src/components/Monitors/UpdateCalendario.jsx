import React from 'react'
import NavbarMonitor from './UI/NavbarMonitor';

export default function UpdateCalendario() {
  return (
    <>
      <NavbarMonitor />
      <div className="ml-auto pt-[88px] mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 2xl:container">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-gray-500 text-2xl font-semibold pb-6">Actualizar Cita</h2>
            <div className="my-2"></div>
            <div className="bg-gradient-to-r from-green-300 to-green-500 h-px mb-8"></div>
            <div>
              <label>Enlace de la reunión (Google Meet):</label>
              <input
                type="text"
                value="https://meet.google.com/wdf-jfcg-qja"
                placeholder="Ingrese el enlace de la reunión"
                className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"
              />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Actualizar Cita</button>
          </div>
        </div>
      </div>
    </>
  )
}
