import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import AboutPage from "./components/About/About";
import Projects from "./components/Projects/ProjectsGrid";
import Footer from "./components/Footer";
import ContactTab from "./components/ContactTab/contactTab";

import ProjectGrid from "./components/Projects/ProjectsGrid";
import ContactPage from "./components/contactpage/contactpage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [load, upadateLoad] = useState(true);
  const [navbarHeight, setParentNavbarHeight] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar setParentNavbarHeight={setParentNavbarHeight} />
        <ScrollToTop />
        {/* {console.log(navbarHeight, "nav bar height in app ")} */}
        <div
          style={{
            marginTop: navbarHeight,
            backgroundColor: "pink",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectGrid />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/contact" element={<ContactTab />} /> */}
            <Route path="/resume" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* <div
            style={{
              height: "100px",
              backgroundColor: "pink",
            }}
          ></div> */}
        </div>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
