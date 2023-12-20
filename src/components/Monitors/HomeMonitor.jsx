import React from "react"
import NavbarMonitor from "./UI/NavbarMonitor"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ['Nuevos', 'Registrados'],
  datasets: [
    {
      label: 'Votos',
      data: [12, 19],
      backgroundColor: [
        'rgba(246, 158, 12, 0.2)',
        'rgba(24, 13, 91, 0.2)',
      ],
      borderColor: [
        'rgba(246, 158, 12, 1)',
        'rgba(24, 13, 91, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const data2 = {
  labels: ['Nuevos', 'Registrados'],
  datasets: [
    {
      label: 'Votos',
      data: [3, 5],
      backgroundColor: [
        'rgba(29, 149, 54, 0.2)',
        'rgba(246, 158, 12, 0.2)',
      ],
      borderColor: [
        'rgba(29, 149, 54, 1)',
        'rgba(246, 158, 12, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function HomeMonitor() {
  return (
    <div>
      <NavbarMonitor />

      <div className="ml-auto pt-[88px] mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 2xl:container">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-md">
              <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
              <div className="my1-"></div>
              <div className="bg-gradient-to-r from-green-300 to-green-500 h-px  mb-6"></div>
              <div className="chart-container w-60 flex justify-center">
                <Doughnut data={data1}/>
              </div>
            </div>


            <div className="bg-white p-4 rounded-md">
              <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-green-300 to-green-500 h-px mb-6"></div>
              <div className="chart-container w-60 flex justify-center">
                <Doughnut data={data2}/>
              </div>
            </div>


            <div className="bg-white p-4 rounded-md">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">Alumnos Asignados</h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-green-300 to-green-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Apellidos</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">FDE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                    <td className="py-2 px-4 border-b border-grey-light">Juan</td>
                    <td className="py-2 px-4 border-b border-grey-light">Pérez</td>
                    <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                    <td className="py-2 px-4 border-b border-grey-light"></td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                    <td className="py-2 px-4 border-b border-grey-light">María</td>
                    <td className="py-2 px-4 border-b border-grey-light">Gómez</td>
                    <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                    <td className="py-2 px-4 border-b border-grey-light">Carlos</td>
                    <td className="py-2 px-4 border-b border-grey-light">López</td>
                    <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                    <td className="py-2 px-4 border-b border-grey-light">Laura</td>
                    <td className="py-2 px-4 border-b border-grey-light">Torres</td>
                    <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                    <td className="py-2 px-4 border-b border-grey-light">Ana</td>
                    <td className="py-2 px-4 border-b border-grey-light">Ramírez</td>
                    <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                    <td className="py-2 px-4 border-b border-grey-light">Luis</td>
                    <td className="py-2 px-4 border-b border-grey-light">Martínez</td>
                    <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-right mt-4">
                <a href="/Alumnos" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Ver más
                </a>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">Proximas Reuniones</h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-green-300 to-green-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py- px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-[18px] px-4 border-b border-grey-light">Carlos Sánchez</td>
                    <td className="py-[18px] px-4 border-b border-grey-light">27/07/2023</td>
                    <td className="py-[18px] px-4 border-b border-grey-light text-right"><a href="/Actualizar-Reunion" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Opciones</a></td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-[18px] px-4 border-b border-grey-light">Ana Torres</td>
                    <td className="py-[18px] px-4 border-b border-grey-light">28/07/2023</td>
                    <td className="py-[18px] px-4 border-b border-grey-light text-right"><a href="/Actualizar-Reunion" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Opciones</a></td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-[18px] px-4 border-b border-grey-light">Juan Ramírez</td>
                    <td className="py-[18px] px-4 border-b border-grey-light">29/07/2023</td>
                    <td className="py-[18px] px-4 border-b border-grey-light text-right"><a href="/Actualizar-Reunion" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Opciones</a></td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-[18px] px-4 border-b border-grey-light">María Gómez</td>
                    <td className="py-[18px] px-4 border-b border-grey-light">30/07/2023</td>
                    <td className="py-[18px] px-4 border-b border-grey-light text-right"><a href="/Actualizar-Reunion" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Opciones</a></td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-[18px] px-4 border-b border-grey-light">Luis González</td>
                    <td className="py-[18px] px-4 border-b border-grey-light">31/07/2023</td>
                    <td className="py-[18px] px-4 border-b border-grey-light text-right"><a href="/Actualizar-Reunion" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Opciones</a></td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-[18px] px-4 border-b border-grey-light">Laura Pérez</td>
                    <td className="py-[18px] px-4 border-b border-grey-light">01/08/2023</td>
                    <td className="py-[18px] px-4 border-b border-grey-light text-right"><a href="/Actualizar-Reunion" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Opciones</a></td>
                  </tr>
                </tbody>
              </table>
              <div className="text-right mt-4">
                <a href="/Agenda-Alumnos" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}