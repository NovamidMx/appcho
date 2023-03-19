import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { DataShowFile } from "./DataShowFIle";
import Swal from "sweetalert2";


const ShowFile = (props) => {
  const [searchFile, setSearchFile] = useState("");
  console.log(searchFile);

  const statusTag = (data) => {
    if(data === "Cancelado") {
        return <div className="badge badge-error">{data}</div>
    } else if(data === "Activo") {
        return <div className="badge badge-success gap-2">
        {data}
      </div>
    } else if( data === "Pendiente") {
        return <div className="badge badge-warning gap-2">
        {data}
      </div>
    }
  }

  const showAlertDelete = () => {
    Swal.fire({
        title: 'Está a punto de eliminar un expediente',
        text: "¿Está seguro de eliminar el expediente?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si lo estoy, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Eliminado!',
            'El expediente ha sido eliminado correctamente.',
            
          )
        }
      })
  }

  return (
    <>
      {/*Navbar de vista para filtros etc. */}
      <div className=" h-auto w-auto m-5 flex justify-end">
        <div className="flex justify-center items-center">
          <input
            onChange={(e) => setSearchFile(e.target.value)}
            type="text"
            placeholder="Buscar"
            className="input rounded-lg	 input-primary w-full max-w-xs"
          />
        </div>
      </div>

      {/*Tabla expedientes/usuarios/etc */}
      <div className="overflow-x-auto m-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Folio</th>
              <th>Expediente</th>
              <th>Estado</th>
              <th>Encargado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {DataShowFile.filter((item) => {
              //FILTRO EXPEDIENTE
              if (searchFile.toLowerCase() === "") {
                return item;
              } else {
                return (
                  item.expediente.toLowerCase().includes(searchFile) ||
                  item.expediente.toUpperCase().includes(searchFile) ||
                  item.folio.toPrecision().includes(searchFile)||
                  item.estado.toLowerCase().includes(searchFile) ||
                  item.estado.toUpperCase().includes(searchFile) ||
                  item.encargado.toLowerCase().includes(searchFile)||
                  item.encargado.toUpperCase().includes(searchFile)
                );
              }
            }).map((item) => (
              <tr key={item.folio} className="hover">
                <th>{item.folio}</th>
                <td>{item.expediente}</td>
                <td>{statusTag(item.estado)}</td>
                <td>{item.encargado}</td>
                <td>
                  <div className="flex">
                    <Link
                      data-tip="Ver detalles"
                      className="mr-3 tooltip"
                      to={"/home/file/view/" + item.folio}
                    >
                      <AiOutlineEye />
                    </Link>
                    <Link
                      data-tip="Editar"
                      className="mr-3 tooltip"
                      to={"/home/file/edit/" + item.folio}
                    >
                      <AiOutlineEdit />
                    </Link>
                    <Link
                      data-tip="Eliminar"
                      className="tooltip text-red-500"
                      onClick={showAlertDelete}
                    >
                      <BsTrash />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowFile;
