import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import { CalendarPage } from '../calendar';


const Home = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Usuarios", link: "/users", icon: AiOutlineUser },
    { name: "Clientes", link: "/clients", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "Calendario", link: "/calendar", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Configuración", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex ">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        {/* Icono del sideBar */}
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {/* Links del sideBar */}
        <div className="mt-4 flex flex-col relative">
          {menus?.map((menu, i) => (
            <Link
              to={"/home"+menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* paginas */}
      {/* <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div> */}
      <Outlet/>
    </section>
  );
};

export default Home;
