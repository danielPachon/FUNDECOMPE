import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ResetPasswordMonitor() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    // Lógica para enviar un correo de restablecimiento de contraseña
    // ...

    // Redirección después de enviar el correo de restablecimiento
    navigate(`/MonitorLogin`);
  };

  return (
    <div className="flex justify-center w-full my-auto xl:gap-10 lg:justify-normal md:gap-3 draggable">
      <div className="flex items-center justify-center w-full lg:p-12">
        <div className="flex items-center xl:p-6">
          <div className="flex flex-col w-full h-full pb-6 text-center  rounded-3xl">
            <h3 className="mb-3 text-4xl font-extrabold text-dark-gray-900">Restablecer <br /> Contraseña</h3>
            <p className="mb-4 text-gray-700">Ingresa tu dirección de correo electrónico.</p>

            <label htmlFor="email" className="mb-2 text-sm text-start text-gray-900">Correo Electrónico*</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu correo electrónico"
              className="w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"
            />
            <div className="flex flex-col w-full h-full text-center rounded-3xl">
              <button onClick={handleResetPassword} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-green-100 bg-green-500">Iniciar sesión</button>
            </div>
            <p className="text-sm leading-relaxed text-gray-900"> <a href="/MonitorLogin" className="font-bold text-gray-700">Volver al Inicio de Sesión</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
