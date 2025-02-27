import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import Suggest from "./Components/Suggest/Suggest";

function App() {
  return (
    <div className="main-container">
      <div className="support-div">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/suggest"
            element={
              <>
                <Navbar />
                <Suggest />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
