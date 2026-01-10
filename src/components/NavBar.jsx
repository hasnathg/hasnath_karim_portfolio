import React from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { FiDownload } from "react-icons/fi"

const navLinks = [
  { label: "About", route: "/about", hash: "#about" },
  { label: "Skills", route: "/skills", hash: "#skills" },
  { label: "Education", route: "/education", hash: "#education" },
  { label: "Experience", route: "/experience", hash: "#experience" },
  { label: "Projects", route: "/projects", hash: "#projects" },
  { label: "Contact", route: "/contact", hash: "#contact" },
];

const NavBar = () =>{
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";

  // decide target based on current page
  const toFor = (item) => (isHome ? `/${item.hash}` : item.route);

  // simple active style for home hashes
  const linkClass = (to) => {
    if (isHome && typeof to === "string" && to.startsWith("/#")) {
      return hash === to.slice(1) ? "text-primary font-semibold" : "";
    }
    return "";
  };
    
return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((item) => {
              const to = toFor(item);
              return (
                <li key={item.label}>
                  {isHome ? (
                    <Link to={to} className={linkClass(to)}>
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      to={to}
                      className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              );
            })}
            <li>
              <a
                className="btn btn-accent mt-2"
                href="/Hasnath_Karim_resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload /> Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Logo + Name */}
        {/* <div className="flex items-center gap-2">
          <img src="/logo1.png" alt="logo" className="h-12 w-12 rounded-full object-cover" />
          <NavLink to="/" className="btn btn-ghost text-xl">
            Hasnath Karim
          </NavLink>
        </div> */}
        <Link to="/" className="flex items-center gap-2">
  <img
    src="/logo1.png"
    alt="logo"
    className="h-12 w-12 rounded-full object-cover"
  />
  <span className="btn btn-ghost text-xl">Hasnath Karim</span>
</Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((item) => {
            const to = toFor(item);
            return (
              <li key={item.label}>
                {isHome ? (
                  <Link to={to} className={linkClass(to)}>
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right side - Resume button */}
      <div className="navbar-end hidden lg:flex">
        <a
          className="btn btn-accent"
          href="/Hasnath_Karim_resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <FiDownload /> Resume
        </a>
      </div>
    </div>
    );
};

export default NavBar;