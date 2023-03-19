import React, { useState, Fragment } from "react";
import { SiPhpmyadmin } from "react-icons/si";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line, RiFoldersLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowLeft, FaRegAddressCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import ListSlideBar from "../components/ListSlideBarMenu";

const Home = () => {
  const [currentSubmenuClick, setcurrentSubmenuClick] = useState("");

  const Menus = [
    {
      name: "Perfil",
      link: "#",
      icon: CgProfile,
      spaceT: true,
      divider: false,
      submenu: true,
      gapItem: true,
      submenuItems: [
        {
          nameItem: "Datos personales",
          linkItem: "#",
          iconSubmenuItem: FaRegAddressCard,
        },
        {
          nameItem: "Configuración",
          linkItem: "#",
          iconSubmenuItem: RiSettings4Line,
        },
      ],
    },
    {
      name: "Dashboard",
      link: "#",
      icon: MdOutlineDashboard,
      spaceT: true,
      divider: true,
    },
    { name: "Usuarios", link: "/home/users", icon: AiOutlineUser },
    { name: "Clientes", link: "/home/clients", icon: AiOutlineUser },
    {
      name: "Expedientes",
      link: "/home/file",
      icon: RiFoldersLine,
      divider: true,
      submenu: false,
      spaceT: true,
    },
    {
      name: "Calendario",
      link: "/home/calendar",
      icon: TbReportAnalytics,
    },
    {
      name: "Configuración",
      link: "#",
      icon: RiSettings4Line,
      submenu: true,
      gapItem: true,
      submenuItems: [
        { nameItem: "Vista", linkItem: "#", iconSubmenuItem: AiFillFolderOpen },
        { nameItem: "Tema", linkItem: "#", iconSubmenuItem: AiFillFolderOpen },
      ],
    },
  ];
  return (
    <section>
      <div className="flex">
        <div className="drawer drawer-mobile bg-base-100">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col bg-slate-300 h-screen overflow-y-scroll">

            {/* NavbarTOP Mobile */}
            <div className="navbar bg-base-100 lg:hidden">
              <div className="navbar-start">
                <div className="dropdown">
                  <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">ItzKan</a>
              </div>
              <div className="navbar-end">

              </div>
            </div>

              {/* Vistas seleccionadas */}
            <Outlet />
            {/* Fin de contenido de navbar */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
              {/* Nombre de proyecto con logo */}
              <div className="inline-flex items-center">
                <SiPhpmyadmin
                  className={`bg-violet-300 text-4xl text-black rounded
          cursor-pointer block float-left mr-6 duration-300 hover:rotate-[360deg]`}
                />
                <h1
                  className={` origin-left font-medium  text-[1.2rem] duration-300`}
                >
                  ItzKan
                </h1>
              </div>
              <div className="divider"></div>

              {/*Perfil  */}
              <div className="flex mt-6 items-center">
                <div>
                  <div className="avatar online">
                    <div className={`rounded-full w-10 `}>
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className={`text-[14px]`}>Edgar Iván Monterde Vallado</h4>
                  <div className={` text-[12px] badge badge-warning mt-2 `}>
                    Administrador
                  </div>
                </div>
              </div>
              {Menus.map((menu, index) => (
                <Fragment key={index}>
                  <ListSlideBar
                    submenu={menu.submenu}
                    icon={menu.icon}
                    spaceT={menu.spaceT}
                    link={menu.link}
                    name={menu.name}
                    submenuItems={menu.submenuItems}
                    gapItem={menu.gapItem}
                    divider={menu.divider}
                  />
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;