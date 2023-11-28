import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home"
import { NotFound } from "./components/Pages/NotFound";
import { UserRegistered } from "./components/Users/UserRegistered";
import { HomeUser } from "./components/Users/HomeUser";
import { MonitorLogin } from "./components/Monitors/auth/MonitorLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/User" element={<HomeUser />} />
          <Route path="/UserRegistered/:cedula" element={<UserRegistered />} />
          <Route path="/MonitorLogin" element={<MonitorLogin/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
