import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Homepage from "./pages/Homepage/Homepage";
import Usa from "./pages/Usa/Usa";
import Italy from "./pages/Italy/Italy";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Homepage />} />
            <Route path="/usa" element={<Usa />} />
            <Route path="/italy" element={<Italy />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
