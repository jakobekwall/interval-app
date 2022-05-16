import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SetTimerPage from "./Pages/SetTimerPage"




function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SetTimerPage" element={<SetTimerPage />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
