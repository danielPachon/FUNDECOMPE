import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarAdmin from './UI/NavbarAdmin'

export default function Admin() {
  return (
    <div>
      <NavbarAdmin />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 2xl:container">
          <div className='grid grid-cols-3'>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/MascotasEpsa'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656630978/Imagenes/mascota_ahets0.jpg" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Ubicaciones
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/TiposMascota/'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656631500/Imagenes/tippet_trzuih.webp" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Zonas Poblacionales
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/TiposSangre/'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656631673/Imagenes/tipfloot_ivfih4.jpg" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Nivel de educacion
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/ListadoBeneficios'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656632113/Imagenes/Beneficios-y-riesgos-del-internet_uy402y.jpg" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Tipos de emprendedores
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/ListadoEspecialidades'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656632170/Imagenes/sadas_rkbihu.jpg" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Generos
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/CarnetIdentificacion'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656632354/Imagenes/1_3_o1jszr.jpg" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Niveles de Salarios
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 my-2'>
              <div className="overflow-hidden shadow-lg rounded-lg h-100 w-grid-cols-1 sm:w-60 md:w-70 lg:w-80 xl:w-80 cursor-pointer m-auto ">
                <NavLink to={'/CarnetIdentificacion'} className="w-full block h-full">
                  <img alt="" src="https://res.cloudinary.com/dadzakyw1/image/upload/v1656632354/Imagenes/1_3_o1jszr.jpg" className="max-h-40 w-full object-cover" />
                  <div className="bg-white w-full p-4">
                    <h5 className="text-black text-md font-medium">
                      Categorias Mentores
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}