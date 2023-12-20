import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'

export default function AdminLogin() {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");

  const alertlogin = () => toast.error('Por favor, completa todos los campos.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const handleLogin = async () => {
    if (!cedula || !password) {
      alertlogin()
      return;
    }

    navigate(`/Admin`)
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex justify-center w-full my-auto xl:gap-10 lg:justify-normal md:gap-3 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-6">
            <div className="flex flex-col w-full h-full pb-6 text-center  rounded-3xl">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-gray-900">Iniciar sesión</h3>
              <p className="mb-4 text-gray-700">Introduce tu cedula  y contraseña</p>
              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-gray-500 grow" />
              </div>
              <label htmlFor="number" className="mb-2 text-sm text-start text-gray-900">Cedula*</label>
              <input id="number" type="number" onChange={(e) => setCedula(e.target.value)} placeholder="Introduce la cedula" className="w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl" />
              <div className="flex flex-col w-full h-full text-center rounded-3xl">
                <label htmlFor="password" className="mb-2 text-sm text-start text-gray-900">Contraseña*</label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Introduzce la contraseña" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl" />
                <div className="flex items-end mb-8">
                  <a href="/ResetPasswordMonitor" className="flex items-end mr-4 text-sm font-medium text-purple-blue-500">¿Olvidaste tu contraseña?</a>
                </div>
                <button onClick={handleLogin} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-green-100 bg-green-500">Iniciar sesión</button>
              </div>
              <p className="text-sm leading-relaxed text-gray-900"> <a href="/" className="font-bold text-gray-700">Volver</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
