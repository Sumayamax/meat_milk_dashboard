

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";

import Overview from "./pages/Overview";
import Inequality from "./pages/Inequality";
import ScenarioModeling from "./pages/ScenarioModeling";
import Recommendations from "./pages/Recommendations";

export default function App() {
  return (
    <div style={{color:"white", padding:20}}>Debug Loaded
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/inequality" element={<Inequality />} />
          <Route path="/scenario" element={<ScenarioModeling />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </div>
  );
}
