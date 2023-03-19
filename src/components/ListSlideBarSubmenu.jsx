import React, { createElement } from "react";
import { Link } from "react-router-dom";

const ListSlideBarSubmenu = (props) => {
  return (
    <li >
      <Link
        to={props.linkItem}
        className=" text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5
                   rounded-md"
      >
        <span>
          {createElement(props.iconSubmenuItem, {
            size: "22",
          })}
        </span>
        {props.nameItem}
      </Link>
    </li>
  );
};

export default ListSlideBarSubmenu;