import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoMentor from '../../../assets/mentor.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';

export function UserLogin() {
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);
  const [cedulaDisabled, setCedulaDisabled] = useState(false);
  const [verificado, setVerificado] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const errorPreuser = () => toast.error('No se pudo encontrar una cuenta que coincida con esas credenciales.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const errorUser = () => toast.error('Contraseña Invalida Intenta de nuevo.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const handleVerifyCedula = () => {
    // Hacer la solicitud a la API para verificar la cédula
    fetch(`https://axion-49av.onrender.com/api/preusers/cedula/${cedula}`)
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            if (data.estado === false) {
              setVerificado(true);
              setCedulaDisabled(true);
            } else {
              navigate(`/UserRegistered/${cedula}`)
            }
          });
        } else {
          // Aquí puedes manejar el caso en el que no se encontró la cédula o la solicitud tiene un estado diferente de 200.
          console.log("Cédula no encontrada");
          errorPreuser();
          // También podrías restablecer el estado o realizar otras acciones según tus necesidades.
        }
      })
      .catch((error) => {
        // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error.
        console.error("Error al verificar la cédula:", error);
      });

  };

  const handleLogin = () => {
    // Hacer la solicitud de inicio de sesión
    fetch("https://axion-49av.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: cedula, password: password }), // Enviar cédula y contraseña
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then(async (data) => {
            const token = data.token
            try {
              const decodedToken = jwtDecode(token);

              if (decodedToken && decodedToken.userId) {
                const userId = decodedToken.userId;
                localStorage.setItem("Cedula", userId);

                navigate("/User");
              } else {
                console.error('El token no contiene la propiedad userId o no es válido.');
              }
            } catch (error) {
              console.error('Error al decodificar el token:', error);
            }
          })
          // Redirigir al usuario al componente de redirección después de iniciar sesión
        } else {
          // Mostrar un mensaje de error si el inicio de sesión falla
          errorUser();  
        }
      })
      .catch((error) => {
        // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error.
        console.error("Error al iniciar sesión:", error);
      });
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
              <a href="/MonitorLogin" className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300">
                <img className="h-6 mr-2" src={logoMentor} alt="logoMentor" />
                Inicia sesión como Mentor
              </a>
              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-gray-500 grow" />
                <p className="mx-4 text-gray-600">o</p>
                <hr className="h-0 border-b border-solid border-gray-500 grow" />
              </div>
              <label htmlFor="number" className="mb-2 text-sm text-start text-gray-900">Cedula*</label>
              <input id="number" type="number" placeholder="Introduce la cedula" disabled={verificado || cedulaDisabled} onChange={(e) => setCedula(e.target.value)} className="w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl" />
              <button onClick={handleVerifyCedula} className={`w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-green-100 bg-green-500 ${verificado ? 'hidden' : ''}`}>
                Verificar Cedula
              </button>
              {verificado ? (
                <div className="flex flex-col w-full h-full text-center rounded-3xl">
                  <label htmlFor="password" className="mb-2 text-sm text-start text-gray-900">Contraseña*</label>
                  <input id="password" type="password" placeholder="Introduzce la contraseña" onChange={(e) => setPassword(e.target.value)} className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl" />
                  <div className="flex flex-row justify-between mb-8">
                    <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                      <input type="checkbox" id="checkbox" checked={checked} onChange={handleCheckboxChange} className="hidden" />
                      <div className={`w-5 h-5 bg-white rounded-sm ${checked ? 'border-green-500' : 'border-gray-500 border-2'}`}>
                        {checked && (
                          <img className="w-full h-full" src="https://img.icons8.com/ios-filled/100/16A34A/checked-checkbox.png" alt="checked-checkbox" />
                        )}
                      </div>
                      <span className="ml-3 text-sm font-normal text-gray-900">Mantenme conectado</span>
                    </label>

                    <a href="/" className="mr-4 text-sm font-medium text-purple-blue-500">¿Olvidaste tu contraseña?</a>
                  </div>
                  <button onClick={handleLogin} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-green-100 bg-green-500">Iniciar sesión</button>
                </div>
              ) : null}
              <p className="text-sm leading-relaxed text-gray-900"> <a href="/" className="font-bold text-gray-700">Administración u Organización</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}