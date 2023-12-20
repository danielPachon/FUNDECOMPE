import React from 'react'
import NavbarMonitor from './UI/NavbarMonitor'

export default function AlumnosAsignados() {
  return (
    <>
      <NavbarMonitor/>

      <div class="ml-auto pt-[88px] mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="px-6 2xl:container">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-gray-500 text-2xl font-semibold pb-6">Alumnos Asignados</h2>
            <div className="my-2"></div>
            <div className="bg-gradient-to-r from-green-300 to-green-500 h-px mb-8"></div>
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-sm leading-normal">
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Apellidos</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">FDE</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" /></td>
                  <td class="py-2 px-4 border-b border-grey-light">Juan</td>
                  <td class="py-2 px-4 border-b border-grey-light">Pérez</td>
                  <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                  <td class="py-[10px] px-4 border-b border-grey-light">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Asignar Cita</button>
                    </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" /></td>
                  <td class="py-2 px-4 border-b border-grey-light">María</td>
                  <td class="py-2 px-4 border-b border-grey-light">Gómez</td>
                  <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                  <td class="py-[10px] px-4 border-b border-grey-light">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Asignar Cita</button>
                    </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" /></td>
                  <td class="py-2 px-4 border-b border-grey-light">Carlos</td>
                  <td class="py-2 px-4 border-b border-grey-light">López</td>
                  <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                  <td class="py-[10px] px-4 border-b border-grey-light">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Asignar Cita</button>
                    </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" /></td>
                  <td class="py-2 px-4 border-b border-grey-light">Laura</td>
                  <td class="py-2 px-4 border-b border-grey-light">Torres</td>
                  <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                  <td class="py-[10px] px-4 border-b border-grey-light">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Asignar Cita</button>
                    </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" /></td>
                  <td class="py-2 px-4 border-b border-grey-light">Ana</td>
                  <td class="py-2 px-4 border-b border-grey-light">Ramírez</td>
                  <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                  <td class="py-[10px] px-4 border-b border-grey-light">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Asignar Cita</button>
                    </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" /></td>
                  <td class="py-2 px-4 border-b border-grey-light">Luis</td>
                  <td class="py-2 px-4 border-b border-grey-light">Martínez</td>
                  <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                  <td class="py-[10px] px-4 border-b border-grey-light">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Asignar Cita</button>
                    </td>
                </tr>
              </tbody>
            </table>
          </div> 
        </div>
      </div>
    </>
  )
}
