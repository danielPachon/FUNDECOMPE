import React, { useState } from 'react';
import NavbarMonitor from './UI/NavbarMonitor';
import Calendar from 'react-calendar';
import Select from 'react-select';

const availableHours = [
  { value: '09:00', label: '09:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '14:00', label: '02:00 PM' },
  // Add more hours as needed
];

export default function Calendario() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    // Reset selected hour when date changes
    setSelectedHour(null);
  };

  const handleHourChange = (selectedOption) => {
    setSelectedHour(selectedOption);
  };

  return (
    <>
      <NavbarMonitor />
      <div className="ml-auto pt-[88px] mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 2xl:container">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-gray-500 text-2xl font-semibold pb-6">Calendario</h2>
            <div className="my-2"></div>
            <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-px mb-8"></div>

            <div className="flex justify-between">
              <div className="w-1/2 pr-4">
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </div>

              <div className="w-1/2 pl-4">
                <h3 className="text-gray-500 text-xl font-semibold mb-4">Citas Disponibles</h3>

                <Select
                  options={availableHours}
                  value={selectedHour}
                  onChange={handleHourChange}
                  placeholder="Selecciona una hora"
                />

                {selectedHour && (
                  <div className="mt-4">
                    <p>Citas disponibles para el {selectedDate.toDateString()} a las {selectedHour.label}:</p>
                    {/* Agrega aquí la lógica para mostrar las citas disponibles */}
                    <ul>
                      <li>Juan Pérez</li>
                      <li>Laura Torres</li>
                      {/* Agrega más citas según sea necesario */}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
