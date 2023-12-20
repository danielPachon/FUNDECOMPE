import React, { useRef } from 'react'
import NavbarAdmin from '../UI/NavbarAdmin'
import { useNavigate, } from "react-router"

export default function CreatePreregistro() {
  const navigate = useNavigate()

  const cedulaClienteNuevo = useRef()
  const nombresNuevo = useRef()
  const apellidosNuevo = useRef()
  const emailNuevo = useRef()

  const validarCampos = () => {

    let objetoClienteNuevo = new Object()

    if (nombresNuevo.current.value != "") {
      objetoClienteNuevo.nombres = nombresNuevo.current.value
    } else {
      alert("Campo nombre esta vacio")
    }

    if (apellidosNuevo.current.value != "") {
      objetoClienteNuevo.apellidos = apellidosNuevo.current.value
    } else {
      alert("Campo apellidos esta vacio")
    }

    if (emailNuevo.current.value != "") {
      objetoClienteNuevo.fechaNacimiento = emailNuevo.current.value
    } else {
      alert("Campo fecha nacimiento esta vacio")
    }
  }

  return (
    <div>
      <NavbarAdmin />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className=" 2xl:container">
          <div className="mt-5 ml-24 mr-4 sm:mt-0 border-2 rounded-md">
            <div className="md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="py-5 bg-white sm:p-6">
                    <div>
                      <h1>Crear Preregistro</h1>
                      <hr />
                    </div>
                    <div className="grid grid-cols-6 gap-6">

                      <div className="col-span-6 sm:col-span-1">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Tipo de Documento
                        </label>
                        <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <option>CC</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Cedula Cliente
                        </label>
                        <input type="number" maxLength="10" ref={cedulaClienteNuevo} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          Nombres
                        </label>
                        <input type="text" ref={nombresNuevo} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          Apellidos
                        </label>
                        <input type="text" ref={apellidosNuevo} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input type="email" ref={emailNuevo} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="button" onClick={() => navigate("/VeterinarioEpsa")} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                      Cancelar
                    </button>
                    <button type="button" onClick={() => validarCampos()} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                      Crear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
