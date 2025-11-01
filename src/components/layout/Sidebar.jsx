import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const menu = [
    { name: "Overview", path: "/" },
    { name: "Inequality", path: "/inequality" },
    { name: "Scenario", path: "/scenario" },
    { name: "Recommendations", path: "/recommendations" }
  ];

  return (
    <div className="sidebar">
      <div className="logo">MilkAI 🥛</div>

      <nav className="menu">
        {menu.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
