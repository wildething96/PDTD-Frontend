import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { CompanySelection } from "./pages/companySelection";
import { CompanyMaintenance } from "./pages/companyMaintenance";
import { MainMenu } from "./pages/mainMenu";
import { Dashboard } from "./pages/dashboard";
import { Dashboard_b } from "./pages/dashboard_b";
import { Login } from "./pages/login";
import { postComp } from "./utils/fetchRequest";
import { Signup } from "./pages/signup";
import { Toolbar } from "./components/toolbar";
import { Dashboard_c } from "./pages/dashboard_c";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* < Signup /> */}
      {/* <Toolbar /> */}
      <Router>
        <Routes>
          <Route path="/a" element={<CompanySelection />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company-maintenance" element={<CompanyMaintenance />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/home" element={<Dashboard_b />} />
        </Routes>
      </Router>
    </div>
  );
}
