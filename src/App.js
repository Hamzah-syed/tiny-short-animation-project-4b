import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//context
import { GlobalProvider } from "./context/globalContext";
//pages
import Index from "./pages/index";
import TeamInfo from "./template/teamInfo";
//css
import "./assets/css/utilities.css";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:slug" element={<TeamInfo />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
