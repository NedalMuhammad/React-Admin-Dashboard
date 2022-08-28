import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../data/Data";
import Logo from "../../imgs/logo.png";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar ">
      <div className="logo">
        <img src={Logo} alt="" />
        Sh<span>o</span>ps
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem "}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
