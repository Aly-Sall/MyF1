// App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Drivers from "./pages/drivers/drivers";
import Teams from "./pages/teams/teams";
import Schedule from "./pages/schedule/schedule";
import DriverDetail from "./pages/drivers/driver/DriverDetail";
import TeamDetail from "./pages/teams/TeamDetail";
import Circuit from "./pages/schedule/Circuit";
import Header from "./components/Header/Header";
import Tires from "./components/Header/pages/tires";
import Engine from "./components/Header/pages/engine";
import ConfirmedLineup from "./components/Header/pages/confirmedLineup";
import Liveries from "./components/Header/pages/liveries";
import Drs from "./components/Header/pages/Drs";
import RookiePoints from "./components/Header/pages/RookiePoints";
import Lewis from "./components/Header/pages/Lewis";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />} />
        <Route path="/tires" element={<Tires />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/rookiePoints" element={<RookiePoints />} />
        <Route path="/confirmedLineup" element={<ConfirmedLineup />} />
        <Route path="/Lewis" element={<Lewis />} />
        <Route path="/Liveries" element={<Liveries />} />
        <Route path="/drs" element={<Drs />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/driver/:familyName" element={<DriverDetail />} />
        <Route path="/team/:team" element={<TeamDetail />} />
        <Route path="/schedule/:circuit" element={<Circuit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
