import React, { useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Projects/company_logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

import "./navbar.css";

function NavBar({ setParentNavbarHeight }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.clientHeight);
        setParentNavbarHeight(navbarRef.current.clientHeight);
      }
    };

    // Call handleResize initially and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [setNavbarHeight]);

  function scrollHandler() {
    // if (window.scrollY >= 20) {
    //   updateNavbar(true);
    // } else {
    //   updateNavbar(false);
    // }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      bg="light"
      ref={navbarRef}
      expanded={expand}
      fixed="top"
      expand="lg"
      sticky="top"
      className={"navbar"}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="Company-logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          className="nav-bar-mobile-icon"
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                className={"nav-link"}
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className={"nav-link"}
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item classname={"nav-project"}>
              <Nav.Link
                as={Link}
                to="/project"
                className={"nav-link"}
                // className={navColour ? "nav-link" : "nav-link-scrolled"}
                onClick={() => updateExpanded(false)}
              >
                Our Work
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                className={"nav-link"}
                // className={navColour ? "nav-link" : "nav-link-scrolled"}
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                className={navColour ? "nav-link" : "nav-link-scrolled"}
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
