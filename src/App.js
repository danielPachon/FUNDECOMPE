import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home"
import { NotFound } from "./components/Pages/NotFound";
import { UserRegistered } from "./components/Users/UserRegistered";
import { HomeUser } from "./components/Users/HomeUser";
import { MonitorLogin } from "./components/Monitors/auth/MonitorLogin";
import { HomeMonitor } from "./components/Monitors/HomeMonitor";
import { ResetPasswordMonitor } from "./components/Monitors/auth/ResetPasswordMonitor";
import AlumnosAsignados from "./components/Monitors/AlumnosAsignados";
import Calendario from "./components/Monitors/Calendario";
import UpdateCalendario from "./components/Monitors/UpdateCalendario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/User" element={<HomeUser />} />
          <Route path="/UserRegistered/:cedula" element={<UserRegistered />} />
          
          <Route path="/MonitorLogin" element={<MonitorLogin/>} />
          <Route path="/Monitor" element={<HomeMonitor/>}/>
          <Route path="/ResetPasswordMonitor" element={<ResetPasswordMonitor/>}/>
          <Route path="/Alumnos" element={<AlumnosAsignados/>}/>
          <Route path="/Agenda-Alumnos" element={<Calendario/>}/>
          <Route path="/Actualizar-Reunion" element={<UpdateCalendario/>}/>

          

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
