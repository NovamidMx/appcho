import React, { useState, createElement } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import ListSlideBarSubmenu from "../components/ListSlideBarSubmenu";

const ListSlideBar = (props) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <>
    <div className={` ${props.spaceT ? "mt-4" : "mt-2"} ${props.divider ? "divider " : "hidden"}`}></div>
      <li className={`duration-200 ${props.gapItem ? "mb-2" : "mb-0"}`}
        onClick={() => {
          setSubmenuOpen(!submenuOpen);
        }}
      >
        <Link
          to={"/home" + props.link}
          className={` text-sm flex items-center gap-x-4 cursor-pointer p-2
 rounded-md ${props.spaceT ? "mt-2" : "mt-1"}`}
        >
          <span>{createElement(props.icon, { size: "22" })}</span>
          <span
            className={``}
          >
            {props.name}
          </span>
          {props.submenu && (
            <AiOutlineDown
              className={`duration-200 ${submenuOpen && "rotate-180"}`}
            />
          )}
        </Link>
      </li>
      {props.submenu && submenuOpen && (
        <ul>
          {props.submenuItems.map((submenuItem, index) => (
            <ListSlideBarSubmenu
              nameItem={submenuItem.nameItem}
              iconSubmenuItem={submenuItem.iconSubmenuItem}
              linkItem={submenuItem.linkItem}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListSlideBar;